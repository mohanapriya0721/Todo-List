import React, { useRef, useState } from 'react'

import TodoItem from './TodoItem';

const Todo = () => {
  const [todoList, setTodoList] = useState ([
    {
    id: 123,
    text: "read",
    isComplete: true,
  },
  {
    id: 124,
    text: "upload",
    isComplete: false,
  },
  ]);
  
  const inputRef = useRef();
  
  // add new task
  const addTask = () => {
    const inputText = inputRef.current.value.trim();
    if(inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev)=>[...prev, newTodo]);
    inputRef.current.value = "";
  };

  // update task status

  const toggleTask = (id) => {
    setTodoList((prev) =>{
      return prev.map((todo) =>{
        if(id===todo.id){
          return {...todo,isComplete:!todo.isComplete}
        }
        return todo;
      });
  })
  };

  // delete todo item

  const deleteTodo=(id) =>{
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id)
    });
  };

    return (
        <div className='w-[30-rem]'>
            <h1 className='text-lg my-2 items-center font-medium text-amber-500'>To-Do List</h1>
            <div className='flex gap-2'>
                <div className='flex-1'>
                    <input ref={inputRef} type="text" className="bg-white p-2 rounded-3xl w-full focus:outline-none " placeholder='Add Your Task'/>
                </div>
                <button className=' text-white bg-amber-500 p-2  border-none  rounded-3xl hover:bg-amber-600' onClick={addTask} >Add Tasks</button>
            </div>
            <p className="my-3 text-sm text-zinc-300 px-1">
              Fill Task Details
            </p>

            <div className='w-[30-rem] bg-white py-6 px-4'>
             <fieldset className='space-y-3'>
                <legend className="text-pink-800 font-medium">List of Tasks</legend>
                {todoList.length === 0 ? (
                  <p className="text-gray-500 text-sm">No tasks found</p>
                ) : ( 
                  todoList.map((todo, index) => {
                    return <TodoItem text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTask={toggleTask}  deleteTodo={deleteTodo}/>;
                  })
                )
                }
             </fieldset>

            </div>
        </div>

    )
}

export default Todo


