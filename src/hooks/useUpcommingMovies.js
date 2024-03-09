import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";

const useUpcommingMovies =()=>{

    const moviedispatch = useDispatch();

    const getUpcommingMovies = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
        const jsondata= await data.json()
        console.log('upcommingMovies-->',jsondata.results)
    }


    useEffect( ()=>{
        getUpcommingMovies()
    })
}

export default useUpcommingMovies