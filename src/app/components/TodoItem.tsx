import { Todo } from "../types";

interface ItemProp {
    todo: Todo;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    // todo: Todo;
}

function TodoItem({todo, deleteTodo, toggleTodo}: ItemProp) {
    return (
        <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
           {todo.text}
           <button onClick={() => deleteTodo(todo.id)}>删除</button>
           <button onClick={() => toggleTodo(todo.id)}>切换</button>
        </li>
    )
}
export default TodoItem