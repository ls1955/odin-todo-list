export const Project = {
    new: function(name = "Default project") {
        const project = Object.create(this);

        project.name = name;
        project.todos = [];

        return project;
    }
};
