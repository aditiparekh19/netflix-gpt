import { useEffect } from "react";
import { APIOPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        APIOPTIONS
      );
      const json = await data.json();
      console.log(json);
      dispatch(addNowPlayingMovies(json.results));
    };
    getNowPlayingMovies();
  }, [dispatch]);
};
