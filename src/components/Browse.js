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

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selector = useSelector((store) => {
    return store.user;
  });

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
    console.log("SignOut Clicked");
    dispatch(removeUser());
  };

  const handleGPTsearch = () => {
    console.log("HandleGPTSEARCh");
  };
  if (selector) {
    return (
      <div className="">
        <div className="w-screen  px-9 py-2 flex justify-between z-1 absolute ">
          <img
            className="w-48 contrast-200"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Logo"
          />
          <div className=" flex">
            <button
              className="bg-blue-500 text-white rounded-lg p-2 my-3 mx-3"
              onClick={handleGPTsearch}
            >
              Search GPT
            </button>
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
        <MainContainer />
        <SecondaryContainer />
      </div>
    );
  }
};

export default Browse;
