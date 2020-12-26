const taskController = (request, response) => {
    response.write(JSON.stringify({ texto: 'TASK' }));

    return response;
}


module.exports = taskController;