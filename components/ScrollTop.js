"use client";
import { zotechUtility } from "@/utility";
import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    zotechUtility.scrollTop();
  }, []);

  return (
    <a href="#" className="scroll-up">
      <svg
        className="scroll-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "stroke-dashoffset 10ms linear",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: "125.65",
          }}
        />
      </svg>
    </a>
  );
};
export default ScrollTop;
