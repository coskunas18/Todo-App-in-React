
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, SET_TODO_FILTER } from "../actionTypes/todoActionTypes";
import { todoState } from "../state/todoState";


function todoReducer(state=todoState,action){
     switch (action.type) {
        case ADD_TODO:
         return {...state,todoList:[...state.todoList,action.payload]}
         case DELETE_TODO:
          return {...state,todoList:state.todoList.filter((item)=>item.id !== action.payload)}
         case SET_TODO_FILTER:
           return {...state,todoFilter:action.payload}
         case COMPLETE_TODO:
            const arr=[...state.todoList]
            const findedIndex=arr.findIndex((item)=>item.id === action.payloda.id )
            arr[findedIndex].complete = action.payload.complete
          return {...state,todoList:arr}
     
        default:
          return state
     }
}

export default todoReducer