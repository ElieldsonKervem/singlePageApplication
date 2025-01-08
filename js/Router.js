export class Router {
    routes = {};

    add(routerName, pages) {
        this.routes[routerName] = pages;
    }

    route = (event) => {
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
        this.handle();
    };

    handle = () => {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes["/"];
        fetch(route)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro ${response.status}: ${response.statusText}`);
                }
                return response.text();
            })
            .then((html) => {
                document.getElementById("app").innerHTML = html;
            })
            .catch((error) => {
                console.error("Erro ao carregar a rota:", error);
                document.getElementById("app").innerHTML = "<h1>Erro 404: Página não encontrada</h1>";
            });
    };
}
