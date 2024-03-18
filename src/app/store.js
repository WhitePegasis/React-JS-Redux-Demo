import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import counterReducer from '../features/counter/counterSlice';


const rootReducer = {
  counter: counterReducer,
  todos: todoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
