// A controller that handle all the event related to project sidebar
export const SidebarController = {
    new: function(projects) {
        const ctrller = Object.create(this);
        const dialog = document.querySelector(".create-project-dialog");

        ctrller.projects = projects;
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
        console.log("Testing");
    },
    populateSidebar: function() {
        this.projects.forEach((project, index) => {
            let projectButton = project.toButton();

            projectButton.dataset.index = index;
            projectButton.classList.add("project-button");

            this.sidebar.appendChild(projectButton);
        });
    }
};
