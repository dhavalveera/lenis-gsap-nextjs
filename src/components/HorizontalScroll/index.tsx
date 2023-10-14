import React, { useEffect } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// GSAP Register Plugin
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  useEffect(() => {
    // Horizontal Scroll
    const sectionTwo = document.getElementById("horizontal");
    const boxItems = gsap.utils.toArray(".horizontal__item");

    gsap.to(boxItems, {
      xPercent: -100 * (boxItems.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionTwo,
        pin: true,
        scrub: 3,
        // snap: 1 / (boxItems.length - 1),
        end: () => "+=" + 100,
        // endTrigger: ".lastElem",
        // end: "bottom 50%",
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section id="horizontal">
      <div className="container">
        <div className="horizontal__content">
          <div className="horizontal__item">
            <div className="horizontal__num">1</div>
          </div>
          <div className="horizontal__item">
            <div className="horizontal__num">2</div>
          </div>
          <div className="horizontal__item">
            <div className="horizontal__num">3</div>
          </div>
          <div className="horizontal__item">
            <div className="horizontal__num">4</div>
          </div>
          <div className="horizontal__item">
            <div className="horizontal__num">5</div>
          </div>
          <div className="horizontal__item lastElem">
            <div className="horizontal__num">6</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
