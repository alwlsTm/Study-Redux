import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => { //리스트 추가
      state.push({ text: action.payload, id: Date.now() });
      //{type: 'todo/addTodo', payload: 'todo1'}
    },
    deleteTodo: (state, action) => {  //리스트 삭제
      return state.filter((todo) => todo.id !== action.payload);
      //{type: 'todo/deleteTodo', payload: 1678986921550}
    },
  }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;