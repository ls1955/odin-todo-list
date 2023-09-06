export const Project = {
    new: function(name, storageHandler = null, todos = []) {
        const project = Object.create(this);

        project.name = name;
        project.todos = [];
        project.storageHandler = storageHandler;
        todos.forEach(todo => project.push(todo));

        return project;
    },
    push: function(todo) {
        // Child will inform parent to kill
        // itself when it time has come
        todo.parent = this;
        this.todos.push(todo);
    },
    updateMainContent: function() {
        this.todos = this.todos.filter(todo => !todo.isCompleted);

        const main = document.querySelector(".todo-list-container");
        const indexHolder = document.querySelector(".current-project-index-holder");
        
        main.innerHTML = "";
        // Let others know which project should new todo insert into
        indexHolder.dataset.index = this.index;
        
        if (this.todos.length === 0) {
            const message = document.createElement("p");
            message.textContent = "This project is empty."
            main.appendChild(message);
        } else {
            const ul = document.createElement("ul");

            this.todos.forEach(todo => ul.appendChild(todo.toListItem()));

            main.appendChild(ul);
        }

        this.storageHandler.updateStorage();
    },
    toButton: function() {
        const button = document.createElement("button");

        button.innerText = this.name;

        button.addEventListener("click", () => {
            // Button's dataset index will be assign by sidebarController
            // Useful to know coresspond project index inside projects array
            this.index = button.dataset.index;
            this.updateMainContent();
        });

        return button;
    },
    toJSON: function() {
        return {
            name: this.name,
            todos: this.todos.map(todo => todo.toJSON())
        }
    }
};
