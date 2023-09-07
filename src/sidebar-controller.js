import { Project } from "./project";

// A controller that handle all the event related to project sidebar
export const SidebarController = {
    new: function(projects, storageHandler = null) {
        const ctrller = Object.create(this);
        const dialog = document.querySelector(".create-project-dialog");

        ctrller.projects = projects;
        ctrller.storageHandler = storageHandler;
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

        this.projects.push(Project.new(newProjectName, this.storageHandler));
        this.storageHandler.updateStorage();
        this.form.reset();
        this.dialog.close();
        this.populateSidebar(true);
    },
    populateSidebar: function(hadJustCreateNewProject = false) {
        this.projectsContainer.innerHTML = "";

        this.projects.forEach((project, index) => {
            let projectButton = project.toButton();

            // TODO: Include a delete button for every projectButton?

            projectButton.dataset.index = index;
            projectButton.classList.add("project-button");

            this.projectsContainer.appendChild(projectButton);

            // It kind of make sense to focus on newly created project
            // so we could add todo into it, right?
            if (hadJustCreateNewProject && project === this.projects.at(-1)) {
                projectButton.click();
            }
        });
    }
};
