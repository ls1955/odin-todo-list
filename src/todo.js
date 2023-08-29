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
        const li = document.createElement("li");

        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project-container");

        const titleP = document.createElement("p");
        titleP.innerText = this.title;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const toggleDetailsBtn = document.createElement("button");
        toggleDetailsBtn.innerText = "▼";

        [titleP, checkbox, toggleDetailsBtn].forEach(el => projectContainer.appendChild(el));
        li.appendChild(projectContainer);
        
        const descriptionLi = document.createElement("li");
        descriptionLi.innerText = this.description;
        const dueDateLi = document.createElement("li");
        dueDateLi.innerText = this.dueDate;
        const priorityLi = document.createElement("li");
        priorityLi.innerText = this.priority;
        
        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("details-container");
        detailsContainer.style.display = "none";
        const detailsList = document.createElement("ul");

        [descriptionLi, dueDateLi, priorityLi].forEach(li => detailsList.appendChild(li));
        detailsContainer.appendChild(detailsList);
        li.appendChild(detailsContainer);

        checkbox.addEventListener("click", () => {
            this.isCompleted = true;
            this.parent.updateMainContent();
        });

        toggleDetailsBtn.addEventListener("click", () => {
            detailsContainer.style.display = detailsContainer.style.display === "block" ?
                                             "none" :
                                             "block";
            toggleDetailsBtn.textContent = toggleDetailsBtn.textContent === "▼" ?
                                            "▲" :
                                            "▼";
        });

        return li;
    }
};
