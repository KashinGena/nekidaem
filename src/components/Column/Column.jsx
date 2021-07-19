import React from 'react'
import './Column.scss'
import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask';


const Column = ({id,color, title, tasks, onAddClickl,onDeleteTask}) => {
    const [isAddMode,setAddMode]=React.useState(false) 

    const onAddClick = (f) => {
        const resp = {
            row:id.toString(),
            text:f
        }
        onAddClickl(resp)
        setAddMode(false)
   }

    return (
        <div className="column">
            <div className='column__header' style={{backgroundColor:color}}>
                {title}
            </div>
            <div className="column__inner">
            {tasks.length!==0 && tasks.map(task => 
                 <Task key={task.id} id={task.id} text={task.text} onDelete={onDeleteTask.bind(null,task.id)}/>
            )}
            </div>
            {isAddMode? <AddTask onCancelClick={() => setAddMode(false)}
                                 onAddClick={onAddClick}/>:
            <div className="column__add">
                <button onClick={() => setAddMode(true)} className="column__add-btn">Добавить карточку</button>
            </div>
            }
        </div>
    )
}

export default Column