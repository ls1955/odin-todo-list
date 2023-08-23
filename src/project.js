export const Project = {
    new: function(name) {
        const project = Object.create(this);

        project.name = name;
        project.todos = [];

        return project;
    },
    push: function(todo) {
        this.todos.push(todo);
    },
    updateMainContent: function() {
        const main = document.querySelector(".todo-list-container");
        const ul = document.createElement("ul");

        main.innerHTML = "";

        this.todos.forEach(todo => {
            const li = document.createElement("li");

            li.innerText = todo.title;

            ul.appendChild(li);
        });

        main.appendChild(ul);
    }
};
