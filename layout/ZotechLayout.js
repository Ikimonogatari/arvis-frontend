"use client";
import ImageView from "@/components/ImageView";
import ScrollTop from "@/components/ScrollTop";
import VideoPopup from "@/components/VideoPopup";
import { zotechUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
const ZotechLayout = ({
  children,
  header,
  footer,
  bodyClass = "zotech-body",
  cta = true,
}) => {
  useEffect(() => {
    document.body.className = bodyClass;
    zotechUtility.stickyHeader();
    zotechUtility.hamburgerMenu();
    zotechUtility.animation();
    zotechUtility.progressBar();
    zotechUtility.gsapAnimation();
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} />
        {children}
        <Footer footer={footer} cta={cta} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default ZotechLayout;
