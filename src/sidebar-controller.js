import { Project } from "./project";

// A controller that handle all the event related to project sidebar
export const SidebarController = {
    new: function(projects) {
        const ctrller = Object.create(this);
        const dialog = document.querySelector(".create-project-dialog");

        ctrller.projects = projects;
        ctrller.projectsContainer = document.querySelector(".projects-container");
        ctrller.sidebar = document.querySelector(".projects-sidebar");
        ctrller.dialog = dialog;
        ctrller.form = dialog.querySelector("form");
        ctrller.cancelBtn = dialog.querySelector(".cancel-button");
        ctrller.createBtn = dialog.querySelector(".create-button");
        ctrller.nameInput =dialog.querySelector("input");
        ctrller.showDialogBtn = document.querySelector(".create-project-button");

        ctrller.showDialogBtn.addEventListener("click", () => ctrller.dialog.show());
        ctrller.cancelBtn.addEventListener("click", () => {
            ctrller.form.reset();
            ctrller.dialog.close();
        });
        ctrller.createBtn.addEventListener("click", (e) => {
            e.preventDefault();
            ctrller.createAndInsertProject();
        });

        return ctrller;
    },
    createAndInsertProject: function() {
        let newProjectName = this.nameInput.value;

        if (newProjectName === "") {
            // Invalid project name, output some message with it
            return;
        }

        if (this.projects.some(project => project.name === newProjectName )) {
            // Same project name already exist, output some message with it;
            return;
        }

        this.projects.push(Project.new(newProjectName));
        // TODO: Should focus index on latest project
        this.dialog.close();
        this.populateSidebar();
    },
    populateSidebar: function() {
        this.projectsContainer.innerHTML = "";

        this.projects.forEach((project, index) => {
            let projectButton = project.toButton();

            projectButton.dataset.index = index;
            projectButton.classList.add("project-button");

            this.projectsContainer.appendChild(projectButton);
        });
    }
};
