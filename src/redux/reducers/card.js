const initialState = {
    cards:{},
    columns:['0','1','2','3'],
    columnHeader:{
       '0': {title:'ON_HOLD',id:0,color:'#fb7e46',task:[]},
       '1': {title:'IN-PROGRESS',id:1,color:'#2a92bf',task:[]},
       '2': {title:'NEEDS-REVIEW',id:2,color:'#f4ce46',task:[]},
       '3': {title:'APPROVED',id:3,color:'#00b961',task:[]}
    }
}


const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case('GET_CARDS_SUCCESS'): {
                const res = [...action.payload];
                const arr = [...state.columns]
                const columnHeader={...state.columnHeader}
                arr.map((id,index) => 
                    columnHeader[id].task=[...columnHeader[id].task,...res.filter(item => +item.row===index).map(item => item.id)]
                )
            const object = res.reduce(
                    (obj, item) => Object.assign(obj, { [item.id]: item}), {});
            return {
                ...state,
                cards:object,
                columnHeader:columnHeader
            }
        }
        case ('DELETE_CARD'): {
            const id = action.payload
           const cards = {...state.cards}
            const row = cards[id].row
            console.log(row);
            delete cards[id]
            const column = {...state.columnHeader[row]}
            const task =column.task.filter(item =>item!==id)
            return {
                ...state,
                cards:cards,
                columnHeader: {
                    ...state.columnHeader,
                    [row]:{
                        ...state.columnHeader[row],
                        task
                    }
                }
            
        }
    }
        case ('CARD_CREATED'): {
            const item = action.payload
            console.log('cr',item);
            
            const {id, row} = item
            const columns= {...state.columnHeader}
            columns[row].task=[...columns[row].task,item.id] 

                return {
                    ...state,
                    cards: {...state.cards,[id]:item},
                    columnHeader: columns
                }
        }
        

        case ('UPDATE_CARD'): {
            const id=action.id
            const destination = action.destination
            
            
             const cardsClone={...state.cards}
             
            
             
             
             const item = cardsClone[id]
             
             console.log('insideact');
             
             
             if (destination.droppableId===item.row) { 
                 console.log('insideif');
                const columnFrom = {...state.columnHeader[item.row]}  
                const [col]=columnFrom.task.splice(item.seq_num,1)
                columnFrom.task.splice(destination.index,0,col)
                columnFrom.task.map((item,index) =>cardsClone[item].seq_num=index )
                return {
                    ...state,
                    cards:cardsClone,
                    columnHeader: {
                        ...state.columnHeader,
                        [item.row]:columnFrom
                    }
                }
                
            }
            const columnFrom = {...state.columnHeader[item.row]}
            
            const [col]=columnFrom.task.splice(item.seq_num,1)    
            const columnTo = {...state.columnHeader[destination.droppableId]}  
            
                 
            columnTo.task.splice(destination.index,0,col)
            columnFrom.task.map((item,index) =>cardsClone[item].seq_num=index )
            columnTo.task.map((item,index) =>cardsClone[item].seq_num=index )
            console.log(columnFrom.task);
            console.log(columnTo.task);
            item.row=destination.droppableId           
                    return {
                        ...state,
                        cards:cardsClone,
                        columnHeader: {
                            ...state.columnHeader,
                            [item.row]:columnFrom,
                            [destination.droppableId]:columnTo
                        }
                    }
                
            

        }

        default:
            return state;
    }
}

export default cardsReducer