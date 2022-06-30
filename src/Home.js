import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import { useState } from "react";

function Home() {
  const [pagecount, setPagecount] = useState(1);
  const [search, setSearch] = useState("");

  const Pagecount = (i) => {
    setPagecount(i);
  };

  const onSearchInput = (value) => {
    setSearch(value);
    if (value === undefined || value === "") {
      setPagecount(1);
    } else {
      setPagecount(value);
    }
  };

  return (
    <div className="app">
      <Nav search={search} onSearchInput={onSearchInput} />
      <Banner />
      {pagecount === 1 ? (
        <Row title="Trending" fetchUrl={requests.fetchTrending} />
      ) : pagecount === 2 ? (
        <Row title="ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      ) : pagecount === 3 ? (
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      ) : pagecount === 4 ? (
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      ) : pagecount === 5 ? (
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      ) : pagecount === 6 ? (
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      ) : (
        <Row title="Search Results" fetchUrl={requests.GetMovies + search} />
      )}
      <div className="">
        <ul className="pagination d-flex justify-content-center align-items-center text-white py-5">
          <li className="page-item app px-1">
            <span
              className="page-link app fs-5"
              onClick={() => Pagecount(pagecount - 1)}
            >
              ❮
            </span>
          </li>
          <li className="page-item app px-1">
            <span
              className={`${
                pagecount === 1 ? "active-page-link" : "page-link app"
              }`}
              onClick={() => Pagecount(1)}
            >
              1
            </span>
          </li>
          <li className="page-item app px-1">
            <span
              className={`${
                pagecount === 2 ? "active-page-link" : "page-link app"
              }`}
              onClick={() => Pagecount(2)}
            >
              2
            </span>
          </li>
          <li className="page-item app px-1">
            <span
              className={`${
                pagecount === 3 ? "active-page-link" : "page-link app"
              }`}
              onClick={() => Pagecount(3)}
            >
              3
            </span>
          </li>
          <li className="page-item app px-1">
            <span
              className={`${
                pagecount === 4 ? "active-page-link" : "page-link app"
              }`}
              onClick={() => Pagecount(4)}
            >
              4
            </span>
          </li>
          <li className="page-item app px-1">
            <span
              className={`${
                pagecount === 5 ? "active-page-link" : "page-link app"
              }`}
              onClick={() => Pagecount(5)}
            >
              5
            </span>
          </li>
          <li className="page-item app px-1">
            <span
              className={`${
                pagecount === 6 ? "active-page-link" : "page-link app"
              }`}
              onClick={() => Pagecount(6)}
            >
              6
            </span>
          </li>
          <li className="page-item app px-1">
            <span
              className="page-link app fs-5"
              onClick={() => Pagecount(pagecount + 1)}
            >
              ❯
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
