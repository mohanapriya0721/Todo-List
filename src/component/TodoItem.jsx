import React from 'react'
import { IoClose } from "react-icons/io5";

const TodoItem = ({ text, isComplete, id, toggleTask, deleteTodo }) => {
    return (
        <div className='flex justify-between items-center gap-2'>
            <label className={`hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none ${isComplete ? "line-through" : ""}`} onClick={() => toggleTask(id)}>{text}</label>
            <div className="size-[26px] p-1 hover:bg-red-50 rounded-md">
                <IoClose onClick={() =>  deleteTodo(id)} className='text-black hover:text-pink-500' />
            </div>
        </div>
    )
}

export default TodoItem
