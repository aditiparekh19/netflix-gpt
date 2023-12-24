import { useEffect } from "react";
import { APIOPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        APIOPTIONS
      );
      const json = await data.json();
      const filteredData = json.results.filter((x) => x.type === "Trailer");
      const trailer = filteredData?.length ? filteredData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    };

    getMovieVideos();
  }, [dispatch, id]);
};

export default useMovieTrailer;
