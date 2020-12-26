const { version } = require("../package.json");

const homeController = (request, response) => {
    response.write(JSON.stringify({ version: version }));
    return response;
}


module.exports = homeController;