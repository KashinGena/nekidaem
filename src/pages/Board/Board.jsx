import React from 'react'
import Column from '../../components/Column/Column'
import {useDispatch, useSelector} from 'react-redux'
import {createCard, getCards, deleteCards} from '../../redux/actions/cards'

const columnHeader = [
{title:'ON_HOLD', color:'#fb7e46'},
{title:'IN-PROGRESS', color:'#2a92bf'},
{title:'NEEDS-REVIEW', color:'#f4ce46'},
{title:'APPROVED', color:'#00b961'}
]


 const tasks ={
   'ON_HOLD':[{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"}],
   'IN_PROGRESS':[{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"}],
   'NEEDS_REVIEW':[{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"}],
   'APPROVED':[{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"},{id:0,text:"adsfsdf"}]
 }
const Board = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.authReducer.token)
  
  
  const tasks = useSelector(state => state.cardsReducer.cards)
 
  

    const onAddClickHandler = (e) => {
        console.log('Board',e);
        dispatch(createCard(e,token))  
    }
    const onDeleteClickHandler = (e) => {
      console.log('Board',e);
      dispatch(deleteCards(e,token))  
  }

React.useEffect(()=>{
  if (token)
  dispatch(getCards(token))
},[token])

  return (
    <div className="app">
      <div className="container">
        <div className="app__inner">
          {columnHeader.map((column, index)=> {
            return (
              <Column key={column.title}
                      id={index}
                      title={column.title}
                      color={column.color}
                      tasks={tasks.filter(task => +task.row===index)}
                      onAddClickl={onAddClickHandler}
                      onDeleteTask={onDeleteClickHandler}/>
            )
          })}
         
  
        </div>
      </div>
  
    </div>
  );
}

export default Board;
