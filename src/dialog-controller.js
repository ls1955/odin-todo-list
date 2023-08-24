import { Todo } from "./todo";

export const DialogController = {
    new: function(projects) {
        const ctrller = Object.create(this);
        const dialog = document.querySelector(".create-todo-dialog");

        ctrller.projects = projects;
        ctrller.showBtn = document.querySelector(".show-create-todo-dialog-button");
        ctrller.dialog = dialog;
        ctrller.cancelBtn = dialog.querySelector(".cancel-button");
        ctrller.createBtn = dialog.querySelector(".create-button");
        ctrller.titleInput = dialog.querySelector(".title-input");
        ctrller.descriptionInput = dialog.querySelector(".description-input");
        ctrller.dateInput = dialog.querySelector(".date-input");
        ctrller.priorityInput = dialog.querySelector(".priority-input");

        ctrller.showBtn.addEventListener("click", () => ctrller.dialog.show());
        ctrller.cancelBtn.addEventListener("click", () => ctrller.dialog.close());
        ctrller.createBtn.addEventListener("click", (e) => {
            e.preventDefault();
            ctrller.createAndInsertTodo();
        });

        return ctrller;
    },
    createAndInsertTodo: function() {
        let title = this.titleInput.value;
        let description = this.descriptionInput.value;
        let dueDate = this.dateInput.value;
        let priority = this.priorityInput.value;
        let todo = Todo.new(title, description, dueDate, priority);

        let index = document.querySelector(".current-project-index-holder").dataset.index;

        this.projects[index].push(todo);
        this.projects[index].updateMainContent();

        // TODO: reset the input before closing the dialog

        this.dialog.close();
    }
};