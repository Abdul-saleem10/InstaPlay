import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      console.log(request)
      setMovie(
        request.data.results.find((e,i) => i === Math.floor(Math.random() * request.data.results.length)) ===
          undefined
          ? request.data.results.find((e,i) => i === Math.floor(Math.random() * request.data.results.length))
          : request.data.results.find((e,i) => i === 0)
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    
    <header
      className="bannerhome"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${`${base_url}${movie.poster_path || movie.backdrop_path }`})`,
        backgroundPosition: "center center",
      }}
    >
    </header>
  );
}

export default Banner;
