import { Todo } from "./todo.js";
import { Project } from "./project.js";

export const WebpageController = {
    new: function() {
        const controller = Object.create(this);

        let defaultProject = Project.new("Default Project");
        let projectOne = Project.new("The Odin Project");
        let projectTwo = Project.new("The Euler Project");
        let todoOne = Todo.new("Eat breakfast", "Eat some breakfast to begin the day", Date.now(), 3);
        let todoTwo = Todo.new("Study", "Study", Date.now(), 3);
        let todoThree = Todo.new("Complete this project", "Complete this beautiful project.", Date.now(), 1);
        defaultProject.push(todoOne);
        defaultProject.push(todoTwo);
        projectOne.push(todoThree);

        defaultProject.updateMainContent();

        controller.projects = [defaultProject, projectOne, projectTwo];

        return controller;
    },
    initPage: function() {
        const sidebar = document.querySelector(".projects-sidebar");

        sidebar.innerHTML = "";

        this.projects.forEach(project => {
            let projectButton = document.createElement("button");

            projectButton.innerText = project.name;
            projectButton.addEventListener("click", () => project.updateMainContent());

            sidebar.appendChild(projectButton);
        });
    }
};
