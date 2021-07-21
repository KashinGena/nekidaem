import React from 'react'
import './Column.scss'
import Task from '../Task/Task'
import AddTask from '../AddTask/AddTask';
import { Droppable } from 'react-beautiful-dnd';
import TaskList from '../TaskList/TaskList';
import { useSelector } from 'react-redux';


const Column = ({id,color, title, tasks, onAddClickl,onDeleteTask}) => {
    const [isAddMode,setAddMode]=React.useState(false) 
    const cards = useSelector( state => state.cardsReducer.cards)
    
    


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
               {title} ({tasks.length})  
            </div>
            <div className="column__inner">
            <Droppable droppableId={id.toString()}>
                {(provided) => (
                    <TaskList
                     innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    >
                        {tasks.length!==0 && tasks.map((id,index) => {
                          return (cards[id])? <Task key={id} index={index} id={id} text={cards[id].text} onDelete={onDeleteTask.bind(null,id)}/>
                          :null
})}
                        {provided.placeholder}
                    </TaskList>
                )
                }
                
            </Droppable>
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