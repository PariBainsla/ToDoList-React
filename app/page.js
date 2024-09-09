"use client"
import React, { useState } from 'react'

const page = () => {

const [task, settask] = useState("")
const [maintask, setmaintask] = useState([])

const submitHandler = (e) => {
  e.preventDefault()
  setmaintask([...maintask, {task}])
  console.log(maintask)
  settask("")
}

const deleteHandler = (i) => {
  let copytask = [...maintask]
  copytask.splice(i,1)
  setmaintask(copytask)
}

let renderTask = <h2>No Task Available</h2>

if(maintask.length>0){
  renderTask = maintask.map((t,i) => {
    return(
      <li key={i} className='flex items-center justify-between '>
        <div className='m-5'>
          <h5>{t.task}</h5>
        </div>
        <button onClick={()=>{
          deleteHandler(i)
        }} className='bg-red-500 text-white rounded px-4 py-1 '>Delete</button>
        
      </li>
      
    )
  })
}

  return (

    <>
    <div>
      <h1 className='bg-slate-500 text-5xl p-5 text-center font-bold'>Todo List</h1>

      <form onSubmit={submitHandler}>
        <input 
        type='text'
        className='m-5 px-6 py-3 rounded text-black text-2xl bg-slate-200'
        placeholder='Enter Task Here'
        value={task}
        onChange={(e)=>{
          settask(e.target.value)
        
        }}
        />
<button className='bg-slate-500 py-2.5 px-3 rounded font-bold text-2xl'>Add Task</button>

      </form>
      
<hr/>

<div className='p-3 m-5 bg-slate-300 text-black '>
  <ul>
    {renderTask}
  </ul>
</div>

    </div>
    
    </>
  )
}

export default page
