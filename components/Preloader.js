"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [load, setLoad] = useState(true);
  const [displayLoaded, setDisplayLoaded] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Show loader on route change
    setLoad(true);
    setDisplayLoaded(true);

    // Hide loader after animation
    const timer1 = setTimeout(() => {
      setLoad(false);
    }, 1000);

    const timer2 = setTimeout(() => {
      setDisplayLoaded(false);
    }, 1500);

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
        <div className="spinner"></div>
        <div className="logo-loading-wrapper">
          <img
            src="assets/img/arvis-logo.png"
            alt="Arvis Systems Logo"
            className="logo-loading"
          />
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
