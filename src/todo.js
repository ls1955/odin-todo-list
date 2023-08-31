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

        const titleOutput = result.querySelector(".todo-title");
        const descriptionOutput = result.querySelector(".description");
        const dueDateOutput = result.querySelector(".due-date");
        const priorityOutput = result.querySelector(".priority");

        titleOutput.textContent = this.title;
        descriptionOutput.textContent = this.description;
        dueDateOutput.textContent = this.dueDate;
        priorityOutput.textContent = this.priority;

        const editBtn = result.querySelector(".edit-button");
        const editContainer = result.querySelector(".edit-container");
        editBtn.addEventListener("click", () => {
            editContainer.style.display = editContainer.style.display === "block" ?
                                          "none" :
                                          "block";
        });

        const titleEditInput = editContainer.querySelector(".title-edit-input");
        const descriptionEditInput = editContainer.querySelector(".description-edit-input");
        const dueDateEditInput = editContainer.querySelector(".due-date-edit-input");
        const priorityEditInput = editContainer.querySelector(".priority-edit-input");

        titleEditInput.value = this.title;
        descriptionEditInput.value = this.description;
        // Commented out for now as author doesn't feel like working with date for now
        // dueDate.value = this.dueDate;
        priorityEditInput.value = this.priority;

        titleEditInput.addEventListener("input", () => {
            this.title = titleEditInput.value;
            titleOutput.textContent = this.title;
        });

        descriptionEditInput.addEventListener("input", () => {
            this.description = descriptionEditInput.value;
            descriptionOutput.textContent = this.description;
        });
        dueDateEditInput.addEventListener("input", () => {
            // this.dueDate = dueDateEditInput.value
            // dueDateOutput.value = this.dueDate;
        });
        priorityEditInput.addEventListener("input", () => {
            this.priority = priorityEditInput.value
            priorityOutput.value = this.priority;
        });

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
