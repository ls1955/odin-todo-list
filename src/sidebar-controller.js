import { Project } from "./project";

// A controller that handle all the event related to project sidebar
export const SidebarController = {
    new(projects, storageHandler = null) {
        const ctrller = Object.create(this);
        const dialog = document.querySelector(".create-project-dialog");

        ctrller.projects = projects;
        ctrller.storageHandler = storageHandler;
        ctrller.projectsContainer = document.querySelector(".projects-container");
        ctrller.sidebar = document.querySelector(".projects-sidebar");
        ctrller.dialog = dialog;
        ctrller.form = dialog.querySelector("form");
        ctrller.nameInput = dialog.querySelector("input");
        ctrller.errMsgContainer = dialog.querySelector(".error-message-container");
        ctrller.cancelBtn = dialog.querySelector(".cancel-button");
        ctrller.createBtn = dialog.querySelector(".create-button");
        ctrller.showDialogBtn = document.querySelector(".create-project-button");
        ctrller.deleteProjectBtn = document.querySelector(".delete-project-button");

        return ctrller;
    },
    createAndInsertProject(e) {
        let newProjectName = this.nameInput.value;

        if (newProjectName === "") {
            this.errMsgContainer.textContent = "empty project name";
            return;
        }

        if (this.projects.some(project => project.name === newProjectName )) {
            this.errMsgContainer.textContent = "existed project name";
            return;
        }

        this.errMsgContainer.textContent = "";

        this.projects.push(Project.new(newProjectName, this.storageHandler));
        this.storageHandler.updateStorage();
        this.form.reset();
        this.dialog.close();
        this.populateSidebar(true);
    },
    populateSidebar(hadJustCreateNewProject = false, hadJustDeleteProject = false) {
        this.projectsContainer.innerHTML = "";

        this.projects.forEach((project, index) => {
            let projectButton = project.toButton();

            projectButton.dataset.index = index;
            projectButton.classList.add("project-button");

            this.projectsContainer.appendChild(projectButton);

            // It kind of make sense to focus on newly created project
            // so we could add todo into it, right?
            if (hadJustCreateNewProject && project === this.projects.at(-1)) {
                projectButton.click();
            } else if (hadJustDeleteProject && index === 0) {
                projectButton.click();
            }
        });
    },
    setDOMsEventListener() {
        this.showDialogBtn.addEventListener("click", () => this.dialog.show());
        this.cancelBtn.addEventListener("click", () => {
            this.form.reset();
            this.dialog.close();
        });
        this.createBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.createAndInsertProject(e);
        });
        this.deleteProjectBtn.addEventListener("click", () => {
            let deleteIndex = document.querySelector(".current-project-index-holder").dataset.index;

            this.projects.splice(deleteIndex, 1);
            this.populateSidebar(false, true);
            this.storageHandler.updateStorage();
        });
    }
};
