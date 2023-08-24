export const DialogController = {
    new: function() {
        const ctrller = Object.create(this);
        const dialog = document.querySelector(".create-todo-dialog");

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
        // TODO
    }
};