import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";

const VideoBackground = ({ movieId }) => {
  useVideoTrailer({ movieId: movieId });
  const trailerSelector=useSelector((store)=>store.movies?.trailerVideo)

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video -mt-3"
        src={"https://www.youtube.com/embed/" + trailerSelector[0].key +"/?autoplay=0&mute=1&loop=1&playlist="+trailerSelector[0].key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;