const { readFile, writeFile } = require("fs/promises")

class TaskRepository {
    constructor(file) {
        this.file = file;
    }

    async _getFileContent() {
        return JSON.parse(await readFile(this.file))
    }
    async _updateFileContent(newContent) {
        await writeFile(this.file, JSON.stringify(newContent));
    }

    async find(taskId) {
        const all = await this._getFileContent();
        if (!taskId)
            return all;

        return all.find(x => x.id == taskId) ?? {};
    }

    async create(task) {
        var allTasks = await this._getFileContent();
        allTasks.push(task);

        return task.id;
    }
}

module.exports = TaskRepository;