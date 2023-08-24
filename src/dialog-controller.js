export const DialogController = {
    new: function() {
        const ctrller = Object.create(this);

        ctrller.showButton = document.querySelector(".show-create-todo-dialog-button");
        ctrller.dialog = document.querySelector(".create-todo-dialog");
        ctrller.inputs = ctrller.dialog.querySelectorAll("input");
        ctrller.cancelButton = ctrller.dialog.querySelector(".cancel-button");
        ctrller.createButton = ctrller.dialog.querySelector(".create-button");

        ctrller.showButton.addEventListener("click", () => ctrller.dialog.show());
        ctrller.cancelButton.addEventListener("click", () => ctrller.dialog.close());
        ctrller.createButton.addEventListener("click", () => {
            console.log("Should create and insert dialog into the project");
        });

        return ctrller;
    },
    createAndInsertTodo: function() {
        // TODO
    }
};