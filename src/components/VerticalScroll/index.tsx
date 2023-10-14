import React, { useEffect } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Lenis
import Lenis from "@studio-freight/lenis";

// GSAP Register Plugin
gsap.registerPlugin(ScrollTrigger);

const VerticalScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
    });

    const raf = (time: any) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const section_1 = document.getElementById("vertical");
    const col_left = document.querySelector(".col_left");
    const timeln = gsap.timeline({ paused: true });

    timeln.fromTo(
      col_left,
      { y: 0 },
      { y: "170vh", duration: 1, ease: "none" },
      0
    );

    const scroll_1 = ScrollTrigger.create({
      animation: timeln,
      trigger: section_1,
      start: "top top",
      end: "bottom center",
      scrub: true,
    });
  }, []);

  return (
    <section id="vertical">
      <div className="container">
        <div className="vertical__content">
          <div className="col col_left">
            <h2 className="vertical__heading">
              <span>About</span>
              <span>Smooth</span>
              <span>Scroll</span>
            </h2>
          </div>
          <div className="col col_right">
            <div className="vertical__item">
              <h3>Smooth Scroll Lenis</h3>
              <p>
                Lenis is an open-source library built to standardize scroll
                experiences and sauce up websites with butter-smooth navigation,
                all while using the platform and keeping it accessible.
              </p>
            </div>
            <div className="vertical__item">
              <h3>Smooth Scroll Lenis</h3>
              <p>
                Lenis is an open-source library built to standardize scroll
                experiences and sauce up websites with butter-smooth navigation,
                all while using the platform and keeping it accessible.
              </p>
            </div>
            <div className="vertical__item">
              <h3>Smooth Scroll Lenis</h3>
              <p>
                Lenis is an open-source library built to standardize scroll
                experiences and sauce up websites with butter-smooth navigation,
                all while using the platform and keeping it accessible.
              </p>
            </div>
            <div className="vertical__item">
              <h3>Smooth Scroll Lenis</h3>
              <p>
                Lenis is an open-source library built to standardize scroll
                experiences and sauce up websites with butter-smooth navigation,
                all while using the platform and keeping it accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalScroll;
