const http = require("http")
const Router = require("./router")
const DEFAULT_HEADER = { "Content-Type": "application/json" }
const configureRoutes = require("./configureRoutes")

const splitUrl = (url) => {
    const [_, route, id] = url.split("/")
    return { route, id: isNaN(id) ? id : Number(id) }
}

const handler = async (request, response) => {

    const { url, method } = request;
    const splitedUrl = splitUrl(url);
    request.queryString = splitedUrl.id;
    const action = Router.getRouteAction(splitedUrl.route, method);

    if (action) {
        response = await action(request, response);
        response.writeHead(200, DEFAULT_HEADER)
    }
    else {
        response.writeHead(404)
    }

    response.end()
}

const startServer = (port) => {
    configureRoutes();
    http.createServer(handler)
        .listen(port, console.log("O servidor esta rodando na porta", port, '-', `http://localhost:${port}`))
}

module.exports = startServer;