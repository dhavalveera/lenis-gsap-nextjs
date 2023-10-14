import React, { useEffect, useRef } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Lenis
import Lenis from "@studio-freight/lenis";

// GSAP Register Plugin
gsap.registerPlugin(ScrollTrigger);

// Styles
import {
  Col,
  ColLeft,
  ColRight,
  Container,
  Vertical,
  VerticalContent,
  VerticalHeading,
  VerticalItem,
  VerticalWrapper,
} from "./styles";

const VerticalScroll = () => {
  const verticalRef = useRef<HTMLElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);

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

    const timeln = gsap.timeline({ paused: true });

    timeln.fromTo(
      colLeftRef.current,
      { y: 0 },
      { y: "170vh", duration: 1, ease: "none" },
      0
    );

    const scroll_1 = ScrollTrigger.create({
      animation: timeln,
      trigger: verticalRef.current,
      start: "top top",
      end: "bottom center",
      scrub: true,
    });
  }, []);

  return (
    <VerticalWrapper>
      <Vertical ref={verticalRef}>
        <Container>
          <VerticalContent>
            <Col>
              <ColLeft ref={colLeftRef}>
                <VerticalHeading>
                  <span>About</span>
                  <span>Smooth</span>
                  <span>Scroll</span>
                </VerticalHeading>
              </ColLeft>
            </Col>
            <Col>
              <ColRight className="colRight">
                <VerticalItem>
                  <h3>Smooth Scroll Lenis</h3>
                  <p>
                    Lenis is an open-source library built to standardize scroll
                    experiences and sauce up websites with butter-smooth
                    navigation, all while using the platform and keeping it
                    accessible.
                  </p>
                </VerticalItem>
                <VerticalItem>
                  <h3>Smooth Scroll Lenis</h3>
                  <p>
                    Lenis is an open-source library built to standardize scroll
                    experiences and sauce up websites with butter-smooth
                    navigation, all while using the platform and keeping it
                    accessible.
                  </p>
                </VerticalItem>
                <VerticalItem>
                  <h3>Smooth Scroll Lenis</h3>
                  <p>
                    Lenis is an open-source library built to standardize scroll
                    experiences and sauce up websites with butter-smooth
                    navigation, all while using the platform and keeping it
                    accessible.
                  </p>
                </VerticalItem>
                <VerticalItem>
                  <h3>Smooth Scroll Lenis</h3>
                  <p>
                    Lenis is an open-source library built to standardize scroll
                    experiences and sauce up websites with butter-smooth
                    navigation, all while using the platform and keeping it
                    accessible.
                  </p>
                </VerticalItem>
              </ColRight>
            </Col>
          </VerticalContent>
        </Container>
      </Vertical>
    </VerticalWrapper>
  );
};

export default VerticalScroll;
