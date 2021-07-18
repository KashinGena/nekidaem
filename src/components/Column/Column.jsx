import React from 'react'
import './Column.scss'
import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask';


const Column = ({color, title, tasks}) => {
    const [isAddMode,setAddMode]=React.useState(false);
    
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
            {isAddMode? <AddTask onCancelClick={() =>{console.log(isAddMode);
             setAddMode(false)}}/>:
            <div className="column__add">
                <button onClick={() => setAddMode(true)} className="column__add-btn">Добавить карточку</button>
            </div>
            }
        </div>
    )
}

export default Column