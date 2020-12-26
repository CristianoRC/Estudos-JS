const { request } = require("http");
const TaskFactory = require("../factories/taskFactory")
const getTask = async (request, response) => {
    const taskId = request.queryString.id;
    const factory = TaskFactory.generateInstance();
    const tasks = await factory.find(taskId);
    response.write(JSON.stringify(tasks));
    return response;
}

const insertTask = async (request, response) => {

}


module.exports = { getTask, insertTask }