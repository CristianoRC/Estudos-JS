const Router = require("./router")

const homeController = require("./controllers/home");
const taskController = require("./controllers/task");

const configureRoutes = () => {
    Router.addRoute("home", "get", homeController);
    Router.addRoute("task", "get", taskController);
}

module.exports = configureRoutes;