// import { Todo } from "./todo.js";
import { Project } from "./project.js";

export const WebpageController = {
    new: function() {
        const controller = Object.create(this);

        let defaultProject = Project.new();

        controller.projects = [defaultProject];

        return controller;
    },
    initPage: function() {
        const sidebar = document.querySelector(".projects-sidebar");

        sidebar.innerHTML = "";

        this.projects.forEach(project => {
            let projectDiv = document.createElement("div");

            projectDiv.innerText = project.name;

            // sidebar.appendChild(projectDiv.toDOM());
            sidebar.appendChild(projectDiv);
        });
    }
};
