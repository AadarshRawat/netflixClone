import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GPTSearchBar = () => {

  const config= useSelector((store)=>store.config)

  return (

  <div className="pt-[10%] w-screen flex justify-center ">
    <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
      <input
        type="text"
        className="p-4 m-4 col-span-9"
        placeholder={language[config.lang].gptSearchPlaceholder}
      />
      <button className=" col-span-3 m-4 py-2 px-4 bg-red-800 text-white  rounded-lg">{language[config.lang].search} </button>
    </form>
  </div>
  )
};

export default GPTSearchBar
