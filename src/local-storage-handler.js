import { DialogController } from "./dialog-controller";
import { Project } from "./project";
import { SidebarController } from "./sidebar-controller";
import { Todo } from "./todo";

export const LocalStorageHandler = {
    new: function() {
        const handler = Object.create(this);

        handler.projects = [];

        return handler;
    },
    init: function() {
        if (localStorage.getItem("odin-todo-list-projects") != null) {
            this.buildFromLocalStorage();
        } else {
            this.buildDefaultProject();
        }

        DialogController.new(this.projects, this);
        SidebarController.new(this.projects, this).populateSidebar();
    },
    buildDefaultProject: function() {
        let today = new Date().toISOString().substring(0, 10);

        let defaultTodoOne = Todo.new("Sleep", "Go to bed early tonight.", today, 3);
        let defaultTodoTwo = Todo.new("Live healthy", "Be kind to myself.", today, 3);
        let defaultProject = Project.new("Life", [defaultTodoOne, defaultTodoTwo]);
        
        this.projects.push(defaultProject);

        this.updateStorage();
    },
    buildFromLocalStorage() {
        JSON.parse(localStorage.getItem("odin-todo-list-projects")).forEach(projectData => {
            let project = Project.new(projectData["name"]);

            projectData["todos"].forEach(todoData => {
                let todo = Todo.new(
                    todoData["title"],
                    todoData["description"],
                    todoData["dueDate"],
                    todoData["priority"]
                )
                project.push(todo);
            });
            this.projects.push(project);
        });
    },
    updateStorage: function() {
        let projectsString = JSON.stringify(this.projects.map(project => project.toJSON()));

        localStorage.setItem("odin-todo-list-projects", projectsString);
    }
};
