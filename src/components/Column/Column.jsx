import React from 'react'
import './Column.scss'
import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask';
import { Droppable } from 'react-beautiful-dnd';




const Column = ({id,color, title, tasks,count, onAddClickl,onDeleteTask}) => {
    const [isAddMode,setAddMode]=React.useState(false)
    
    const onAddClick = React.useCallback((text) => {
        const card = {
            row:id.toString(),
            text:text
        }
        onAddClickl(card)
        setAddMode(false)
    },[onAddClickl,id])

    return (
        <div className="column">
            <div className='column__header' style={{backgroundColor:color}}>
               {title} ({count})  
            </div>
            <div className="column__inner">
                <Droppable droppableId={id.toString()}>
                    {(provided) => (
                        <div className="column__task-lists"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {tasks.length!==0 && tasks.map((id,index) => {
                            return  <Task key={id}
                                          index={index}
                                          id={id} 
                                          onDelete={onDeleteTask.bind(null,id)}
                                    />
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            {isAddMode && <AddTask onCancelClick={() => setAddMode(false)}
                                 onAddClick={onAddClick}
                        />}
            <div className="column__add">
               {!isAddMode && <button onClick={() => setAddMode(true)}
                        className="column__add-btn"
                >
                    Добавить карточку
                </button>
                }
            </div>
        </div>
        
    )
}

function areEqual(prevProps, nextProps) {
    return (prevProps.id===nextProps.id &&
        prevProps.color===nextProps.color &&
        prevProps.title === nextProps.title &&
        prevProps.count === nextProps.count &&
        prevProps.tasks.toString() === nextProps.tasks.toString()
        )
}

export default React.memo(Column,areEqual)