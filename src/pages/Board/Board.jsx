import React, { useCallback } from 'react'
import './Board.scss'
import Column from '../../components/Column/Column'
import {useDispatch, useSelector} from 'react-redux'
import {createCard, getCards, deleteCards, update, updateCardSuccess} from '../../redux/actions/cards'
import { DragDropContext } from 'react-beautiful-dnd'



const Board = () => {

  const dispatch = useDispatch()
  const token = useSelector(state => state.authReducer.token)

  
  
  const columns = useSelector(state => state.cardsReducer.columns)
  const columnHeader = useSelector(state => state.cardsReducer.columnHeader)
 

  const onAddClickHandler = useCallback((card) => {
      dispatch(createCard(card,token))  
  },[])
    
  const onDeleteClickHandler = (id) => {
      dispatch(deleteCards(id,token))  
  }

  const onDragEnd = React.useCallback((result) => {
    const {destination, source,draggableId} = result
    if (!destination) return;
    if (destination.droppableId=== source.droppableId &&
      destination.index===source.index)  return;
      dispatch(updateCardSuccess(draggableId,source,destination)) 
      dispatch(update(draggableId,destination,token))
  },[token,dispatch])

  React.useEffect(()=>{
    if (token)
      dispatch(getCards())
  },[token])

  return (
    <DragDropContext onDragEnd={onDragEnd}>

          <div className="board">
            {columns.length!==0 && columns.map((id, index)=> {
              console.log(columnHeader[id]);
              return (
                
                
                <Column key={columnHeader[id].title}
                        id={id}
                        count={columnHeader[id].task.length}
                        title={columnHeader[id].title}
                        color={columnHeader[id].color}
                        tasks={columnHeader[id].task}
                        onAddClickl={onAddClickHandler}
                        onDeleteTask={onDeleteClickHandler}
                        />
              )
            })}
          </div>
        

    </DragDropContext>
  );
}

export default React.memo(Board);
