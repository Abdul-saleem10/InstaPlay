import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Movie = (props) => {

  return (
    <div>
      <div className="nav nav_black d-flex justify-content-between">
        <div className="p-4">
          <Link to={"/"}>
            <img
              src={process.env.PUBLIC_URL + "/InstaPlaylogo.png"}
              alt="InstaPlaylogo"
            />
          </Link>
        </div>
      </div>
      <div
        style={{
          background: `url(${`${base_url}${
            props.location.state.movie.poster_path ||
            props.location.state.movie.backdrop_path
          }`})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          objectFit: "cover",
        }}
      >
        <section className="banner">
          <div className="content">
            {/* <ion-icon name="arrow-back-outline" color="light" size="large"></ion-icon> */}
            <Link
              className="text-white fs-3 mb-5"
              style={{ textDecoration: "none" }}
              to={{ pathname: "/" }}
            >
              ⟵
            </Link>
            <h1 className="title">
              {props.location.state.movie.name ||
                props.location.state.movie.title}
            </h1>
            <p className="text-white text-sm">
              Rating : {props.location.state.movie.vote_average.toFixed(1)}
            </p>
            <p className="text-white text-sm">
              {props.location.state.movie.overview}
            </p>
            <p className="text-white text-sm">
              Release Date :{" "}
              <span className="text-white">
                {props.location.state.movie.first_air_date}
              </span>
            </p>
            <p className="text-white text-sm">
              Original Language:{" "}
              <span className="text-white">
                {props.location.state.movie.original_language}
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Movie;
