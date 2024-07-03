import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./reducers/movieSlice";
import tvReducer from "./reducers/tvSlice";
import personReducer from "./reducers/personSlice";
import layoutSlice from './reducers/layoutSlice';


export const store = configureStore({
  reducer: {
    movie:movieReducer,
    tv:tvReducer,
    person:personReducer,
    layout : layoutSlice,
  },
})