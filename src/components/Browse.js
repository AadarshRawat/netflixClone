import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selector = useSelector((store) => {
    return store.user;
  });

  useNowPlayingMovies();

  useEffect(() => {
    if (selector == null) {
      navigate("/login");
    }
  }, [selector]);

  const handleSignout = () => {
    dispatch(removeUser());
  };
  if (selector) {
    return (
      <div>
        <div className="w-screen  px-8 py-2 bg-gradient-to-b from-black  flex justify-between z-1 absolute">
          <img
            className="w-44"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Logo"
          />
          <div className="flex">
            <img
              src="https://occ-0-6336-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
              className="size-10 mt-3"
            />

            <Link to={"/login"}>
              <button
                className="p-2 my-3 mx-4 font-semibold rounded-md border border-slate-200 text-slate-200 w-full"
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
