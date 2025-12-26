"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [load, setLoad] = useState(true);
  const [displayLoaded, setDisplayLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
    setTimeout(() => {
      setDisplayLoaded(false);
    }, 1500);
  }, []);
  return (
    <div
      id="preloader"
      className={`preloader ${!load ? "loaded" : ""}`}
      style={{ display: displayLoaded ? "flex" : "none" }}
    >
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="Z" className="letters-loading">
            Z
          </span>
          <span data-text-preloader="O" className="letters-loading">
            O
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="E" className="letters-loading">
            E
          </span>
          <span data-text-preloader="C" className="letters-loading">
            C
          </span>
          <span data-text-preloader="H" className="letters-loading">
            H
          </span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
