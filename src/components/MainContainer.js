import React from "react";
import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  return (
    <div>
      <MovieTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
      <VideoBackground id={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;
