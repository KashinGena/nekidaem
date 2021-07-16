import React from 'react'
import './Task.css'

const Task = ({id, text, onCreateClick, onDeleteClick}) => {
    return (
        <div className="task">
            <div className="task__header">
                <button className='task__btn-delete'>Х</button>
            </div>
            <p className="task__title"><span>id</span>  {id}</p>
            <div className="task__test">{text}</div>
            {/* <div className="task__btn-container">
                <button className="task__btn-add">Добавить карточку</button>
                <button className="task__btn-delete">X</button>
            </div> */}
        </div>
    )
}

export default Task