export const Project = {
    new: function(name = "Default project") {
        const project = Object.create(this);

        project.name = name;
        project.todos = [];

        return project;
    },
    push: function(todo) {
        this.todos.push(todo);
    }
};
