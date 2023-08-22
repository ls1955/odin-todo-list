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
            // let projectButton = document.createElement("button");
            let projectDiv = document.createElement("div");

            // projectButton.innerText = project.name;
            // projectButton.addEventListener("onclick", project.updateMainContent);
            projectDiv.innerText = project.name;

            // sidebar.appendChild(projectDiv.toDOM());
            sidebar.appendChild(projectDiv);
        });
    }
};
