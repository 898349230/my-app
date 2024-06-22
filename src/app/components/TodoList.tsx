import {Todo} from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[],
    deleteTodo: (id: number) => void,
    toggleTodo: (id: number) => void
}

function TodoList({todos, deleteTodo, toggleTodo}: TodoListProps) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>
            ))}
        </ul>
    )
}

export default TodoList