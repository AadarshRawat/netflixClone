import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (

    movies.nowplayingMovies && (
      <div className="bg-black">
        <div className="-mt-[400px] pl-14 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowplayingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList title={"Upcomming"} movies={movies.upCommingMovies} />
          <MovieList title={"Top rated"} movies={movies.TopRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
