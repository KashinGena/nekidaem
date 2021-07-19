import React from 'react'
import './Task.scss'

const Task = ({id, text, onCreateClick, onDelete}) => {
    return (
        <div draggable={true} className="task">
            <div className="task__header">
                <button onClick={onDelete} className='task__btn-delete'>Х</button>
            </div>
            <p className="task__title"><span>id</span>  {id}</p>
            <div className="task__test">{text}</div>
        </div>
    )
}

export default Task