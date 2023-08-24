// Might rename this to sidebarController...
export const WebpageController = {
    new: function(projects) {
        const ctrller = Object.create(this);

        ctrller.projects = projects;

        return ctrller;
    },
    initPage: function() {
        // Make this sidebar part of the attribute?
        const sidebar = document.querySelector(".projects-sidebar");

        // Move this whole stuff into another function
        // Something like populateSidebar
        this.projects.forEach((project, index) => {
            let projectButton = project.toButton();

            projectButton.dataset.index = index;
            sidebar.appendChild(projectButton);
        });
    }
};
