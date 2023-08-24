// Might rename this to sidebarController...
export const WebpageController = {
    new: function(projects) {
        const ctrller = Object.create(this);

        ctrller.projects = projects;

        return ctrller;
    },
    initPage: function() {
        const sidebar = document.querySelector(".projects-sidebar");

        this.projects.forEach((project, index) => {
            let projectButton = project.toButton();

            projectButton.dataset.index = index;
            sidebar.appendChild(projectButton);
        });
    }
};
