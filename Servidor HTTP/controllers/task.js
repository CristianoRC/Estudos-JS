const TaskFactory = require("../factories/taskFactory")
const taskController = async (request, response) => {
    const taskId = request.queryString.id;
    const factory = TaskFactory.generateInstance();
    const tasks = await factory.find(taskId);
    response.write(JSON.stringify(tasks));
    return response;
}


module.exports = taskController;