const Router = require("./router")

const homeController = require("./controllers/home");
const { getTask, insertTask } = require("./controllers/task");

const configureRoutes = () => {
    Router.addRoute("home", "get", homeController);
    Router.addRoute("task", "get", getTask);
    Router.addRoute("task", "post", insertTask);
}

module.exports = configureRoutes;