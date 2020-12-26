const TaskRepository = require("../repositories/taskRepository");

class TaskService {
    constructor( repository ) {
        this.repository = repository;
    }

    async find(taskId) {
        return await this.repository.find(taskId)
    }

    async create(task) {
        //TODO: Implementar
        // return await this.repository.create(task)
    }


}


module.exports = TaskService;