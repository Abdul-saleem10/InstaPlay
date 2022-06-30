import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = ({search,onSearchInput}) => {
  return (
    <div className="nav nav_black d-flex justify-content-between">
      <div className="p-4">
        <Link to={"/"}>
          <img
            src={process.env.PUBLIC_URL + "/InstaPlaylogo.png"}
            alt="InstaPlaylogo"
          />
        </Link>
      </div>
      <div className="p-4">
        <div className="input-group">
          <input
            type="text"
            name="search"
            className="form-control searchinput"
            placeholder="Search"
            autoComplete="on"
            onChange={(e)=>onSearchInput(e.target.value)}
            value={search}
          ></input>
          <div className="input-group-append">
            <div className="input-group-text searchbtn">
              <span className="mr-2 text-white">
                <ion-icon name="search-outline"></ion-icon>
              </span>
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
