import { configureStore } from '@reduxjs/toolkit';
import songReducer from "../features/songSlice";
export default configureStore({
  reducer: {
    song:songReducer,
  },
});
