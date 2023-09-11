import { Todo } from "./todo";

export const DialogController = {
    new(projects, storageHandler = null) {
        const ctrller = Object.create(this);

        let dialog = document.querySelector(".create-todo-dialog");

        return Object.assign(ctrller, {
            projects,
            storageHandler,
            dialog,
            form : dialog.querySelector("form"),
            cancelBtn : dialog.querySelector(".cancel-button"),
            createBtn : dialog.querySelector(".create-button"),
            titleInput : dialog.querySelector(".title-input"),
            descriptionInput : dialog.querySelector(".description-input"),
            dateInput : dialog.querySelector(".date-input"),
            priorityInput : dialog.querySelector(".priority-input"),
            showBtn : document.querySelector(".show-create-todo-dialog-button")
        });
    },
    createAndInsertTodo() {
        let title = this.titleInput.value;
        let description = this.descriptionInput.value;
        let dueDate = this.dateInput.value;
        let priority = this.priorityInput.value;
        let todo = Todo.new(title, description, dueDate, priority);

        let index = document.querySelector(".current-project-index-holder").dataset.index;

        this.projects[index].push(todo);
        this.projects[index].updateMainContent();
        this.storageHandler.updateStorage();
    },
    setDOMsEventListener() {
        this.showBtn.addEventListener("click", () => {
            this.dateInput.value = new Date().toISOString().slice(0, 10);
            this.dialog.show()
        });
        this.cancelBtn.addEventListener("click", () => {
            this.form.reset();
            this.dialog.close()
        });
        this.createBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.createAndInsertTodo();
            this.form.reset();
            this.dialog.close();
        });
    }
};
