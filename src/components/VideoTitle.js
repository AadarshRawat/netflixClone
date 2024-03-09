const VideoTitle = ({title,overview})=>{

    return (
    <div className="absolute text-white   bg-gradient-to-r from-black w-screen aspect-video pt-80 px-20">
        <h1 className ="text-6xl font-bold">{title}</h1>

        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className="bg-white text-black text-bold p-4 px-12 text-xl hover:bg-opacity-40 bg-opacity-100 rounded-lg">▶ Play</button>
            <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl hover:bg-opacity-40 bg-opacity-100 rounded-lg">ⓘ More Info</button>
        </div>
        
    </div>
    )
}

export default VideoTitle