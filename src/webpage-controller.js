// import { Todo } from "./todo.js";
import { Project } from "./project.js";

export const WebpageController = {
    new: function() {
        const controller = Object.create(this);

        let defaultProject = Project.new();

        controller.projects = [defaultProject];
        controller.focusIndex = 0;

        return controller;
    },
    initPage: function() {
        document.body.innerHTML = "";

        const projectsMain = document.createElement("main");

        this.projects.forEach(project => {
            let projectDiv = document.createElement("div");

            projectDiv.innerText = project;

            projectsMain.appendChild(projectDiv);
        });

        document.body.appendChild(projectsMain);
    }
};
