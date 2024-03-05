import {useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = async () =>{

    const moviedispatch = useDispatch();

    // Fetch Data from TMDB API and update store
    const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    console.log(json.results);
    moviedispatch(addNowPlayingMovies(json.results));

}

export default useNowPlayingMovies