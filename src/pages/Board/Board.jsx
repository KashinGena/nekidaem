import React from 'react'
import Column from '../../components/Column/Column'
import {useDispatch, useSelector} from 'react-redux'
import {createCard, getCards, deleteCards, update} from '../../redux/actions/cards'
import { DragDropContext } from 'react-beautiful-dnd'



const Board = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.authReducer.token)

  
  
  const columns = useSelector(state => state.cardsReducer.columns)
  const columnHeader = useSelector(state => state.cardsReducer.columnHeader)

 
  

    const onAddClickHandler = (e) => {
        console.log('Board',e);
        dispatch(createCard(e,token))  
    }
    const onDeleteClickHandler = (e) => {
      console.log('Board',e);
      dispatch(deleteCards(e,token))  
  }

  const onDragEnd = (result) => {
    console.log(result);
   const {destination, source,draggableId} = result
   if (!destination) return;
   if (destination.droppableId=== source.droppableId &&
    destination.index===source.index)  return;
    //const column = columnHeader[source.droppableId]
    
    console.log(result);
   
    dispatch(update(draggableId,destination,token))
    
    

}

React.useEffect(()=>{
  if (token)
  dispatch(getCards(token))
},[token])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="app">
      <div className="container">
        <div className="app__inner">
          {columns.map((id, index)=> {
           
            
            return (
              <Column key={columnHeader[id].title}
                      id={id}
                      title={columnHeader[id].title}
                      color={columnHeader[id].color}
                      tasks={columnHeader[id].task}
                      onAddClickl={onAddClickHandler}
                      onDeleteTask={onDeleteClickHandler}/>
            )
          })}
         
  
        </div>
      </div>
  
    </div>
    </DragDropContext>
  );
}

export default Board;
