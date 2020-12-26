const homeController = (request, response) => {
    response.write(JSON.stringify({ texto: 'Olá Mundo' }));
    return response;
}


module.exports = homeController;