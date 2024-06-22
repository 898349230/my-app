import {useState} from 'react'

// define the props interface
interface AddTodoProps {
    addTodo: (text: string) => void
}

function AddTodo({addTodo}: AddTodoProps) {

    const [text, setText] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('AddTodo ',text)
        if (text === '') {
            return
        }
        addTodo(text)
        setText('')
        // 提交表单后，清空输入框
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} 
            onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">按钮</button>
        </form>
    )   
}

export default AddTodo
