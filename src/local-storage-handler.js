// Looks like the handler should in charge
// of managing all the projects and todos
// in the page (It has to update and modify
// local storage, afterall.)
export const LocalStorageHandler = {
    init: function() {
        // Check if projects already inside local storage
        // if exists?:
        // load the projects
        // else:
        // load some predefined project
    },
    push: function(project) {
        // push the project json into localstorage
    },
    update: function(project) {
        // find the project in localstorage, then update it
    },
    build: function(projectJSON) {
        // perhaps a helper function that build particular
        // project (and its todo)
    }
};
