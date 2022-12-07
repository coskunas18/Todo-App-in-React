import { useDispatch } from "react-redux";
import { useState } from "react";
import "./Input.css";
import {addTodo} from "../store/actions/todoActions";

const Input = ()=>{
   const [text,setText]=useState('');
   const dispatch=useDispatch();

    return(
        <div className="input-wrapper">
         
         <input
         onKeyPress={(e)=>{
            if (e.key === "Enter" && text.trim() !== "") {
                dispatch(addTodo({id:new Date().getTime(),text,complete:false}))
                setText('')
            }
         }}
         onChange={(e)=>{
            setText(e.target.value);
         }}         
         placeholder="Create New Todo" autoFocus/>
        </div>
    )

}

export default Input