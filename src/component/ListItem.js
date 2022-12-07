

import './ListItem.css';

import {useDispatch} from "react-redux"
import { deleteTodo,updateTodo } from '../store/actions/todoActions';

const ListItem = (props)=>{
const dispatch=useDispatch()
    return(
        <div className="list-item hover:bg-gray-200">
           <div className={props.className}>           
              <input type="checkbox" className='mr-2'
              checked={props.item.complete}
              onChange={()=>{
                dispatch(updateTodo(props.item.id,!props.item.complete))
              }}
              
              />

              <span>{props.item.text}</span>
           </div>
           {!props.item.complete && <div className="remove-list-item" onClick={()=>{
             dispatch(deleteTodo(props.item.id))
           }}>
              Sil
            </div> }

        </div>

    );

}


export default ListItem;