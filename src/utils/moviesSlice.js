import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState: {
        nowplayingMovies:null,
        trailerVideo:null,
        upCommingMovies:null
    },
    reducers:{
        addNowPlayingMovies : (state,action) =>{
            state.nowplayingMovies = action.payload;
            
        },
        addtrailerVideo: (state,action) => {
            state.trailerVideo=action.payload
        },
        addupCommingMovies: (state,action) => {
            state.upCommingMovies=action.payload
        },
        addPopularMovies: (state,action) => {
            state.PopularMovies = action.payload
        },
        addTopRatedMovies: (state,action) => {
            state.TopRatedMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies,addtrailerVideo,addupCommingMovies,addPopularMovies,addTopRatedMovies } = movieSlice.actions
export default movieSlice.reducer;
