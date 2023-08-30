export const Todo = {
    new: function(title, description, dueDate, priority) {
        const todo = Object.create(this);

        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;
        todo.isCompleted = false;
        // Will be set by the parent later on.
        // Useful when sending message to tell parent
        // to remove itself when this.isCompleted
        todo.parent = null;

        return todo;
    },
    toListItem() {
        const template = document.querySelector("#todo-template");
        const result = template.content.cloneNode(true);

        result.querySelector(".todo-title").textContent = this.title;

        result.querySelector(".description").innerText = this.description;
        result.querySelector(".due-date").innerText = this.dueDate;
        result.querySelector(".priority").innerText = this.priority;
        
        const detailsContainer = result.querySelector(".details-container");
        const toggleDetailsBtn = result.querySelector(".toggle-details-button");
        toggleDetailsBtn.addEventListener("click", () => {
            detailsContainer.style.display = detailsContainer.style.display === "block" ?
                                             "none" :
                                             "block";
            toggleDetailsBtn.textContent = toggleDetailsBtn.textContent === "▼" ?
                                            "▲" :
                                            "▼";
        });

        const checkbox = result.querySelector(".check-todo-button");
        checkbox.addEventListener("click", () => {
            this.isCompleted = true;
            this.parent.updateMainContent();
        });

        return result;
    }
};
