import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row m-0">
      <h2 className="row row-cols-1 row-cols-md-4 g-0 px-5 pt-5 pb-1 m-0">
        {title}
      </h2>
      <div className="row g-0 m-0 px-5">
        {movies.map((movie) => (
          <div
            className="col-md-3 px-3 py-3"
            style={{ overflow: "hidden", fontWeight: "400" }}
          >
            <Link
              className="card"
              style={{
                overflow: "hidden",
                textDecoration: "none",
                background: "none",
              }}
              to={{
                pathname: "/movie",
                state: { movie: movie },
              }}
            >
              <span style={{ overflow: "hidden" }}>
                <img
                  key={movie.id}
                  className="card-img-top imghover"
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name || movie.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </span>
              <div className="card-footer text-white py-3 footbgcolour">
                <div className="d-flex justify-content-between">
                  <div className="d-grid">
                    <h6>
                      {movie.name || movie.title?.length > 22
                        ? (movie.name || movie.title).substr(0, 22 - 1) + "..."
                        : movie.name || movie.title}
                    </h6>
                    <span>
                      <ion-icon name="star" className="text-gold"></ion-icon>{" "}
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                  <div>
                    <span>
                      {/* <ion-icon name="play-outline"></ion-icon> */}
                      <img
                        className="play_button"
                        src={process.env.PUBLIC_URL + "/playimg.png"}
                        alt="play"
                      ></img>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
