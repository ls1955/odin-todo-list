export const Todo = {
    new: function(title, description, dueDate, priority) {
        const todo = Object.create(this);

        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;
        todo.isCompleted = false;

        return todo;
    }
};
