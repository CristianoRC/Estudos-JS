class Router {
    constructor() {
        if (!Router._instance) {
            this.routes = new Map();
            Router._instance = this;
        }
        return Router._instance;
    }

    addRoute(route, method, callback) {
        const key = this._getRouteKey(route, method);
        this.routes.set(key, callback);
    }
    
    getRouteAction(route, method){
        const key =  this._getRouteKey(route, method);
        return this.routes.get(key);
    }

    _getRouteKey(route, method) {
        return `${route}:${method}`.toLocaleLowerCase();
    }
}


const router = new Router();
Object.freeze(router);

module.exports = router;