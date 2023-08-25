// A controller that handle all the event related to project sidebar
export const SidebarController = {
    new: function(projects) {
        const ctrller = Object.create(this);

        ctrller.projects = projects;
        ctrller.sidebar = document.querySelector(".projects-sidebar");
        ctrller.button = document.querySelector(".create-project-button");

        ctrller.button.addEventListener("click", () => ctrller.createAndInsertProject());

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
