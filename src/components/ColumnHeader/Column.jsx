import React from 'react'
import './Column.css'


const Column = ({color, title, tasks}) => {
    return (
        <div className="column">
            <div className='column__header' style={{backgroundColor:color}}>
                {title}
            </div>
            {tasks && tasks.map()}
            <div className="column__add">
                <button className="column__add-btn">Добавить карточку</button>
            </div>
        </div>
    )
}

export default Column