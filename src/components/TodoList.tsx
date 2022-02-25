import React, { FC } from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
    return (
        <>
            {
                todos.length > 0 &&
                <div className='todos'>
                    {
                        todos.map(todo => (
                            <SingleTodo
                                key={todo.id}
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))
                    }
                </div>
            }            
        </>
    )
}

export default TodoList