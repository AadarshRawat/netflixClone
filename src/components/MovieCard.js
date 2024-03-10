import { IMG_CDN } from "../utils/constants"

const MovieCard =({posterPath})=>{
    return (
        <div className = "text-white text-4xl w-48 pr-5">
            <img
            className=""
            alt="Movie Card" src={IMG_CDN+posterPath} />
        </div>
    )
}

export default MovieCard