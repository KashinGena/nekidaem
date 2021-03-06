import React from 'react'
import './AddTask.scss'


const AddTask = ({onCancelClick, onAddClick}) => {
    const [value, setValue] =React.useState('')
    const onClick = () => {
        onAddClick(value)
    }
    return (
        <div className='add-task'>
            <textarea className='add-task__text'
                      placeholder="Ввести заголовок для этой карточки"
                      value={value}
                      onChange={(e)=>setValue(e.target.value)}></textarea>
            <div className="add-task__btn-container">
                <button className='add-task__add-btn'
                        onClick={onClick}
                >
                    Добавить карточку
                </button>
                <button className='add-task__cancel-btn'
                        onClick={onCancelClick}
                >
                    x
                </button>
            </div>
        </div>
    )
}

export default AddTask