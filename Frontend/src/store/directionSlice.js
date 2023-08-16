import {createSlice} from '@reduxjs/toolkit';

const directionSlice = createSlice({
  name:'directionSlice',
  initialState:{value:'right'},
  reducers:{
    dir:(state, action)=>{
      state.value = action.payload;
    }
  }
});
export default directionSlice;
export const {dir} = directionSlice.actions;