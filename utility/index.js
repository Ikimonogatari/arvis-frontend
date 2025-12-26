import { ScrollTrigger, SplitText } from "@/lib/plugins";
import { gsap } from "gsap";

export const zotechUtility = {
  stickyHeader: () => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        document.getElementById("header-sticky").classList.add("sticky");
      } else {
        document.getElementById("header-sticky").classList.remove("sticky");
      }
    });
  },
  hamburgerMenu: () => {
    document
      .querySelector(".sidebar__toggle")
      .addEventListener("click", function () {
        document.querySelector(".offcanvas__info").classList.add("info-open");
        document
          .querySelector(".offcanvas__overlay")
          .classList.add("overlay-open");
      });
    document
      .querySelectorAll(".offcanvas__close,.offcanvas__overlay")
      .forEach((el) => {
        el.addEventListener("click", function () {
          document
            .querySelector(".offcanvas__info")
            .classList.remove("info-open");
          document
            .querySelector(".offcanvas__overlay")
            .classList.remove("overlay-open");
        });
      });
  },
  animation: () => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  progressBar: () => {
    const bars = document.querySelectorAll(".count-bar");
    if (bars.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const bar = entry.target;
              const percent = bar.dataset.percent;
              bar.style.width = percent;
              bar.classList.add("counted");
            }
          });
        },
        { root: null, threshold: 1, rootMargin: "-50px" }
      );
      bars.forEach((bar) => observer.observe(bar));
    }
  },
  gsapAnimation: () => {
    (function () {
      "use strict";

      gsap.registerPlugin(SplitText, ScrollTrigger);

      // Text Invert With Scroll
      const splitInvert = new SplitText(".bw-split-text", {
        type: "lines",
      });
      splitInvert.lines.forEach((target) => {
        gsap.to(target, {
          backgroundPositionX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: "top 90%",
            end: "bottom center",
          },
        });
      });

      //>> Split Text Animation <<//
      const st = document.querySelectorAll(".split-text");
      if (st.length === 0) return;

      st.forEach((el) => {
        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });

        gsap.set(el, { perspective: 400 });

        if (el.classList.contains("right")) {
          gsap.set(el.split.chars, {
            opacity: 0,
            x: "50",
            ease: "circ.easeOut",
          });
        }
        if (el.classList.contains("left")) {
          gsap.set(el.split.chars, { opacity: 0, x: "-50", ease: "circ.out" });
        }
        if (el.classList.contains("up")) {
          gsap.set(el.split.chars, { opacity: 0, y: "80", ease: "circ.out" });
        }
        if (el.classList.contains("down")) {
          gsap.set(el.split.chars, { opacity: 0, y: "-80", ease: "circ.out" });
        }

        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          x: 0,
          y: 0,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
        });
      });

      // Text Up Scroll
      const textUp = document.querySelectorAll(".text-splite-up");
      if (textUp.length > 0) {
        textUp.forEach((splitTextLine) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 110%",
              end: "bottom 100%",
              scrub: 1,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const itemSplitted = new SplitText(splitTextLine, {
            type: "words, lines",
          });
          gsap.set(splitTextLine, { perspective: 400 });

          itemSplitted.split({ type: "lines" });

          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
        });
      }

      // Hero Banner Content
      const heroItems = document.querySelectorAll(".tp-play-up, .tp-play-up-2");
      if (heroItems.length > 0) {
        heroItems.forEach((splitTextLine) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 90%",
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const itemSplitted = new SplitText(splitTextLine, {
            type: "lines",
          });

          gsap.set(splitTextLine, { perspective: 400 });

          itemSplitted.split({ type: "lines" });

          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.7,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
        });
      }

      // Hero Circle Btn
      const btnTriggers = document.querySelectorAll(".tp-btn-trigger");
      if (btnTriggers.length > 0) {
        const btns = document.querySelectorAll(".tp-btn-bounce");

        gsap.set(btns, { y: -150, opacity: 0 });

        btns.forEach((btn) => {
          const trigger = btn.closest(".tp-btn-trigger");
          gsap.to(btn, {
            scrollTrigger: {
              trigger: trigger,
              start: "top center",
              markers: false,
            },
            duration: 1.5,
            delay: 1,
            ease: "bounce.out",
            y: 0,
            opacity: 1,
          });
        });
      }

      // Draw Border
      const borderDraw = document.querySelectorAll(".bw-draw-border");
      borderDraw.forEach((line) => {
        gsap.set(line, { width: 0 });
        gsap.to(line, {
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            end: "bottom 80%",
            scrub: 1,
            markers: false,
          },
          width: "100%",
          delay: 5,
          duration: 3,
        });
      });

      // Image Reveal Animation
      function revealAnimation(selector, axis, percent, scale) {
        document.querySelectorAll(selector).forEach((revealItem) => {
          const image = revealItem.querySelector("img");
          if (!image) {
            console.warn("No image found in", revealItem);
            return;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: revealItem,
              toggleActions: "play none none reverse",
            },
          });

          tl.set(revealItem, { autoAlpha: 1 })
            .from(revealItem, {
              duration: 1.5,
              [`${axis}Percent`]: -percent,
              ease: "power2.out",
            })
            .from(image, {
              duration: 1.5,
              [`${axis}Percent`]: percent,
              scale: scale,
              delay: -1.5,
              ease: "power2.out",
            });
        });
      }

      revealAnimation(".reveal-right", "x", -100, 1.3);
      revealAnimation(".reveal-left", "x", 100, 1.3);
      revealAnimation(".reveal-bottom", "y", -100, 1.3);

      // Hover Reveal
      const hoverItems = document.querySelectorAll(".bw-hover-image");

      function moveImage(e, item, index) {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (item.children[index]) {
          item.children[index].style.transform = `translate(${x}px, ${y}px)`;
        }
      }

      hoverItems.forEach((item) => {
        item.addEventListener("mousemove", (e) => {
          moveImage(e, item, 1);
        });
      });

      // Set background images
      const bgElements = document.querySelectorAll("[data-background]");
      bgElements.forEach((el) => {
        const bg = el.getAttribute("data-background");
        if (bg) el.style.backgroundImage = `url(${bg})`;
      });
    })();
  },
  serarchpopup: () => {
    const searchWrap = document.querySelector(".search-wrap");
    const searchClose = document.getElementById("search-close");
    const searchTrigger = document.querySelector(".search-trigger");

    searchTrigger.addEventListener("click", function () {
      searchWrap.style.display = "block";
      searchClose.classList.add("active");
    });
    searchClose.addEventListener("click", function () {
      searchWrap.style.display = "none";
      searchClose.classList.remove("active");
    });
  },
  scrollTop: () => {
    const scrollPath = document.querySelector(".scroll-up path");
    const pathLength = scrollPath.getTotalLength();
    scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
    scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
    scrollPath.style.strokeDashoffset = pathLength;
    scrollPath.getBoundingClientRect();
    scrollPath.style.transition = scrollPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    const updateScroll = function () {
      let scrollTotal = window.scrollY;
      let height = document.documentElement.scrollHeight - window.innerHeight;
      let scrollTotalHeight = pathLength - (scrollTotal * pathLength) / height;
      scrollPath.style.strokeDashoffset = scrollTotalHeight;
    };
    updateScroll();

    window.addEventListener("scroll", updateScroll);

    const offset = 50;
    const duration = 950;

    window.addEventListener("scroll", function () {
      if (window.scrollY > offset) {
        document.querySelector(".scroll-up").classList.add("active-scroll");
      } else {
        document.querySelector(".scroll-up").classList.remove("active-scroll");
      }
    });
  },
};
