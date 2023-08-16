import {configureStore} from '@reduxjs/toolkit';
import directionSlice from './directionSlice';

const store = configureStore({
  reducer:{
    counter:directionSlice.reducer
  }
});
export default store;