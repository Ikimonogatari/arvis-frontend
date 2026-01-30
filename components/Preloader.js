"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [load, setLoad] = useState(true);
  const [displayLoaded, setDisplayLoaded] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoad(true);
    setDisplayLoaded(true);

    const timer1 = setTimeout(() => setLoad(false), 1000);
    const timer2 = setTimeout(() => setDisplayLoaded(false), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return (
    <div
      id="preloader"
      className={`preloader ${!load ? "loaded" : ""}`}
      style={{ display: displayLoaded ? "flex" : "none" }}
    >
      <div className="animation-preloader">
        <div className="logo-loading-wrapper">
          <img
            src="assets/img/arvis-logo.png"
            alt="Arvis Systems Logo"
            className="logo-loading"
          />
        </div>
        <div className="preloader-progress">
          <div className="preloader-progress-bar" />
        </div>
        <p className="preloader-text">Loading</p>
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
