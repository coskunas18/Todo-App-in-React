import todoReducer from "./reducers/todoReducer"
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"


const reducer=combineReducers({
    todo:todoReducer
})

export const store=configureStore({reducer:reducer})