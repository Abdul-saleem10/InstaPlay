import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";
import { API_KEY } from "./requests";
import axios from 'axios';

const base_url = "https://image.tmdb.org/t/p/original/";
const video_url = "https://www.youtube.com/embed/"

const Movie = (props) => {
  const [movie, setMovie] = useState([])
  const [show, setShow] = useState(false)
  const [videokey,setVideokey] = useState('')
  const [videotitle,setVideoTitle] = useState('')
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://api.themoviedb.org/3/movie/${props.location.state.movie.id}/videos?api_key=${API_KEY}&append_to_response=videos`)
        setMovie(request.data.results.sort((a,b) =>  new Date(a.published_at) - new Date(b.published_at)).slice(0, 10));
      return request;
    }
    fetchData();
  }, [props.location.state.movie.id]);

 const watchVideo = (video, title) => {
        setShow(true)
        setVideokey(video)
        setVideoTitle(title)
  };
  const closevideo=()=>{
    setShow(false)
    setVideokey('')
    setVideoTitle('')
  }

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
            {movie.map(e=>
            <a
                className="btn m-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() =>watchVideo(e.key,e.name)}
              >
                <ion-icon name="play-circle-outline"></ion-icon>{e.name.substr(0, 22 - 1) + "..."}
              </a>
              )}
          </div>
        </section>
      </div>

      <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{ background: "none", border: "none" }}
            >
              <div className="modal-header" style={{ borderBottom: "none" }}>
                <h5 className="modal-title" id="#staticBackdrop"></h5>
                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-between py-2">
                  <span
                    className="text-white"
                    style={{ borderLeft: "3px solid red" }}
                  >
                    &nbsp;&nbsp;&nbsp;{videotitle}
                  </span>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closevideo}
                  ></button>
                </div>
                {show === true ? (
                  <div className="video-responsive">
                    <iframe
                      width="853"
                      height="480"
                      src = {video_url+videokey}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Movie;
