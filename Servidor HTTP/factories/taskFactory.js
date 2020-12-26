const { join } = require("path")
const TaskRepository = require("../repositories/taskRepository")
const TaskService = require("../services/taskService")

const generateInstance = () => {
    const repository = new TaskRepository(_getFileName());
    const service = new TaskService(repository)

    return service;
}

const _getFileName = () => {
    return join(__dirname, "../db", "data.json");
}

module.exports = { generateInstance }