const Task = require("../entities/task")
const TaskFactory = require("../factories/taskFactory")

const getTask = async (request, response) => {
    const taskId = request.queryString.id;
    const taskService = TaskFactory.generateInstance();
    const tasks = await taskService.find(taskId);
    response.write(JSON.stringify(tasks));
    return response;
}

const insertTask = async (request, response) => {
    //TODO: Pegar do corpo da request;
    const task = new Task("123", "123", 1);
    const taskService = TaskFactory.generateInstance();
    return await taskService.create(task);
}


module.exports = { getTask, insertTask }