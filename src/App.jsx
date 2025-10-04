import { useState } from 'react'
import './App.css'
import Todo from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className="flex justify-center max-w-[full] h-screen px-4 py-10 mx-auto  ">
      <Todo /> 
    </div>


  )
}

export default App
