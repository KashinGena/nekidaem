import React from 'react'
import './AddTask.scss'


const AddTask = ({onCancelClick, onAddClick}) => {
    return (
        <div className='add-task'>
            <textarea className='add-task__text' placeholder="Ввести заголовок для этой карточки"></textarea>
            <button className='add-task__add-btn'
                    onClick={onAddClick}
            >
                Добавить карточку
            </button>
            <button className='add-task__cancel-btn'
                    onClick={onCancelClick}
            >
                x
            </button>
            
        
        </div>
    )
}

export default AddTask