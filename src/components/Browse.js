import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GptSearch";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { addPrefferedLanguage } from "../utils/configSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selector = useSelector((store) => {
    return store.user;
  });

  const showGptSearch =useSelector(store=>store.gpt.showGptSearch)

  const configSelector= useSelector((store)=>store.config)


  useNowPlayingMovies();
  useUpcommingMovies();
  usePopularMovies();
  useTopRatedMovies();

  useEffect(() => {
    if (selector == null) {
      navigate("/login");
    }
  }, [selector]);

  const handleSignout = () => {
    dispatch(removeUser());
  };

  const handleGPTsearch = () => {
    dispatch(toggleGptSearchView())
  };

  const handleLanguageChange = (e) =>{
    dispatch(addPrefferedLanguage(e.target.value))

  }
  if (selector) {
    return (
      <div className="">
        <div className="w-screen  px-9 py-2 flex justify-between absolute z-10 bg-gradient-to-b from-black">
          <img
            className="w-48 contrast-200"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Logo"
          />
          
          <div className=" flex">
            { showGptSearch ?
          <Link>
          <select className = "p-2 bg-gray-900 text-white m-3 mx-4 rounded-sm " onChange={handleLanguageChange} value={configSelector.lang}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key = {lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
                ))}
              
            </select>
          </Link>
          : null
  }
            
          <Link className="mr-4">
              <button
                className="p-2 mt-3  font-semibold rounded-md border bg-blue-500 border-slate-200 text-slate-200 w-full"
                onClick={handleGPTsearch}
              >
               {showGptSearch?'GPT Search':'HomePage'} 
              </button>
          </Link>
            <img
              src="https://occ-0-6336-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
              className="size-10 mt-3"
            />

            <Link to={"/login"}>
              <button
                className="p-2 my-3 mx-3 font-semibold rounded-md border border-slate-200 text-slate-200 w-full"
                onClick={handleSignout}
              >
                Sign OUT
              </button>
            </Link>
          </div>
        </div>
        {
          showGptSearch ? <GPTSearch /> : <>
          
          <MainContainer />
          <SecondaryContainer /> </>  //React Fagement

        }

      </div>
    );
  }
};

export default Browse;
