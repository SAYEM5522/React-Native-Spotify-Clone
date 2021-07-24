import { createSlice } from '@reduxjs/toolkit'

const initialState = {
song:null,
}

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
  setSong:(state,action)=>{
    state.song=action.payload
  }
  }
});

export const {
setSong
} = songSlice.actions
export const selectSong=(state)=>state.song.song

export default songSlice.reducer
