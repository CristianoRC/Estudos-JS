const TaskFactory = require("../factories/taskFactory")
const taskController = async (request, response) => {
    const factory = TaskFactory.generateInstance();
    const tasks = await factory.find();
    response.write(JSON.stringify(tasks));
    return response;
}


module.exports = taskController;