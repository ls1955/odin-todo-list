export const SidebarController = {
    new: function(projects) {
        const ctrller = Object.create(this);

        ctrller.projects = projects;
        ctrller.sidebar = document.querySelector(".projects-sidebar");

        return ctrller;
    },
    populateSidebar: function() {
        this.projects.forEach((project, index) => {
            let projectButton = project.toButton();

            projectButton.dataset.index = index;
            this.sidebar.appendChild(projectButton);
        });
    }
};
