import { configurStore } from "@reduxjs/toolkit";
import todoReducer from '..features/todo/todoSlice'

export const store = configurStore({
    reducer: todoReducer
})