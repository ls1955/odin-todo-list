import { Todo } from "./todo.js";
import { Project } from "./project.js";

export const WebpageController = {
    new: function() {
        const controller = Object.create(this);

        let todoOne = Todo.new("Eat breakfast", "Eat some breakfast to begin the day", Date.now(), 3);
        let todoTwo = Todo.new("Study", "Study", Date.now(), 3);
        let todoThree = Todo.new("Complete this project", "Complete this beautiful project.", Date.now(), 1);
        let defaultProject = Project.new("Default Project", [todoOne, todoTwo]);
        let projectOne = Project.new("The Odin Project", [todoThree]);
        let projectTwo = Project.new("The Euler Project");

        defaultProject.updateMainContent();
        controller.projects = [defaultProject, projectOne, projectTwo];

        return controller;
    },
    initPage: function() {
        const sidebar = document.querySelector(".projects-sidebar");

        this.projects.forEach((project, index) => {
            let projectButton = project.toButton();

            projectButton.dataset.index = index;
            sidebar.appendChild(projectButton);
        });
    }
};
