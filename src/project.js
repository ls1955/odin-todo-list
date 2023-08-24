export const Project = {
    new: function(name, todos = []) {
        const project = Object.create(this);

        project.name = name;
        project.todos = todos;

        return project;
    },
    push: function(todo) {
        this.todos.push(todo);
    },
    updateMainContent: function() {
        const main = document.querySelector(".todo-list-container");
        const ul = document.createElement("ul");
        const indexHolder = document.querySelector(".current-project-index-holder");

        main.innerHTML = "";
        // Let others know which project should new todo insert into
        indexHolder.dataset.currentIndex = this.index;

        this.todos.forEach(todo => {
            const li = document.createElement("li");

            li.innerText = todo.title;

            ul.appendChild(li);
        });

        main.appendChild(ul);
    },
    toButton: function() {
        const button = document.createElement("button");

        button.innerText = this.name;

        button.addEventListener("click", () => {
            // Button's dataset index will be assign by sidebarController
            this.index = button.dataset.index;
            this.updateMainContent();
        });

        return button;
    }
};
