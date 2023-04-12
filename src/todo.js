import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => { //리스트 추가
      state.push({ text: action.payload, id: Date.now(), checked: false });
      console.log(action)
      //{type: 'todo/addTodo', payload: 'todo1'}
    },
    deleteTodo: (state, action) => {  //리스트 삭제
      return state.filter((todo) => todo.id !== action.payload);
      //{type: 'todo/deleteTodo', payload: 1678986921550}
    },
    checkTodo: (state, action) => { //리스트 체크
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !state.checked } : todo)
    }
  }
});

export const { addTodo, deleteTodo, checkTodo } = todoSlice.actions;

export default todoSlice.reducer;