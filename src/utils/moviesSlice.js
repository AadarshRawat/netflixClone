import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState: {
        nowplayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies : (state,action) =>{
            state.nowplayingMovies = action.payload;
            
        },
        addtrailerVideo: (state,action) => {
            state.trailerVideo=action.payload
        }
    }
})

export const { addNowPlayingMovies,addtrailerVideo } = movieSlice.actions
export default movieSlice.reducer;
