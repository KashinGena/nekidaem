import React from 'react'
import './Task.scss'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({id, text,index, onDelete,...props}) => {
    console.log();
    
    return (
        <Draggable key={id} draggableId={id.toString()} index={index}>
            {(provided)=>(
                <div 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                     ref={provided.innerRef}
                    className="task">
                        <div className="task__header">
                            <button onClick={onDelete} className='task__btn-delete'>Х</button>
                        </div>
                        <p className="task__title"><span>id</span>  {id}</p>
                        <div className="task__test">{text}</div>
              </div>
            )}
      
        </Draggable>
    )
}

export default Task