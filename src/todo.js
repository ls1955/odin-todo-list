export const Todo = {
    new: function(title, description, priority) {
        const todo = Object.create(this);

        todo.title = title;
        todo.description = description;
        todo.priority = priority;

        return todo;
    }
};
