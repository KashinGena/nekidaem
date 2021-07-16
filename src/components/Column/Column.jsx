import React from 'react'
import './Column.css'
import Task from '../Task/Task'


const Column = ({color, title, tasks}) => {
    console.log(tasks);
    
    return (
        <div className="column">
            <div className='column__header' style={{backgroundColor:color}}>
                {title}
            </div>
            <div className="column__inner">
            {tasks.length!==0? tasks.map(task => 
                 <Task key={task.id} id={task.id} text={task.text}/>
            )
           
            :null}
            </div>
           
            <div className="column__add">
                <button className="column__add-btn">Добавить карточку</button>
            </div>
        </div>
    )
}

export default Column