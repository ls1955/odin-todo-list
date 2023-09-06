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

        DialogController.new(this.projects);
        SidebarController.new(this.projects).populateSidebar();
    },
    push: function(project) {
        // push the project json into localstorage
    },
    update: function(project) {
        // find the project in localstorage, then update it
    },
    buildDefaultProject: function() {
        let today = new Date().toISOString().substring(0, 10);

        let defaultTodoOne = Todo.new("Sleep", "Go to bed early tonight.", today, 3);
        let defaultTodoTwo = Todo.new("Live healthy", "Be kind to myself", today, 3);
        let defaultProject = Project.new("Life", [defaultTodoOne, defaultTodoTwo]);

        localStorage.setItem(
            "odin-todo-list-projects",
            JSON.stringify([defaultProject.toJSON()])
        );
        this.projects.push(defaultProject);
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
    }
};
