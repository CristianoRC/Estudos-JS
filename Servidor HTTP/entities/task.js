const { v4: uuidv4 } = require('uuid');

class Task {
    constructor(title, description, priority){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.id = uuidv4()
    }
    isValid(){
        //TODO: Implementar
    }
}

module.exports = Task;