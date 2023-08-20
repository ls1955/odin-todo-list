export const Todo = {
    new: function(title = "Default title", description = "Default description", priority = "normal") {
        const todo = Object.create(this);

        todo.title = title;
        todo.description = description;
        todo.priority = priority;

        return todo;
    }
};
