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
        <div 
          className="txt-loading"
          style={{ 
            fontFamily: 'var(--font-montserrat), "Montserrat", serif'
          }}
        >
          <span 
            data-text-preloader="A" 
            className="letters-loading"
            style={{ fontFamily: 'var(--font-montserrat), "Montserrat", serif' }}
          >
            A
          </span>
          <span 
            data-text-preloader="R" 
            className="letters-loading"
            style={{ fontFamily: 'var(--font-montserrat), "Montserrat", serif' }}
          >
            R
          </span>
          <span 
            data-text-preloader="V" 
            className="letters-loading"
            style={{ fontFamily: 'var(--font-montserrat), "Montserrat", serif' }}
          >
            V
          </span>
          <span 
            data-text-preloader="I" 
            className="letters-loading"
            style={{ fontFamily: 'var(--font-montserrat), "Montserrat", serif' }}
          >
            I
          </span>
          <span 
            data-text-preloader="S" 
            className="letters-loading"
            style={{ fontFamily: 'var(--font-montserrat), "Montserrat", serif' }}
          >
            S
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
