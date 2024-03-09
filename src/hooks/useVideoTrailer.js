import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addtrailerVideo } from "../utils/moviesSlice";

const useVideoTrailer = ({ movieId }) => {
  const trailerDispatch = useDispatch();

  const getVideoTrailer = async () => {

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json_data = await data.json();
    const trailer_data=json_data.results.filter((data)=> data.type ==="Trailer")
    trailerDispatch(addtrailerVideo(trailer_data));
  };

  useEffect(() => {
    getVideoTrailer();
  },[]);
};

export default useVideoTrailer;
