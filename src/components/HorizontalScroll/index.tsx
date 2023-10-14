import React, { useEffect } from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// GSAP Register Plugin
gsap.registerPlugin(ScrollTrigger);

// Styled
import {
  Container,
  Horizontal,
  HorizontalContent,
  HorizontalItem,
  HorizontalNum,
} from "./styles";

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
    // <HorizontalWrapper>
    <Horizontal id="horizontal">
      <Container>
        <HorizontalContent>
          <HorizontalItem className="horizontal__item">
            <HorizontalNum>1</HorizontalNum>
          </HorizontalItem>
          <HorizontalItem className="horizontal__item">
            <HorizontalNum>2</HorizontalNum>
          </HorizontalItem>
          <HorizontalItem className="horizontal__item">
            <HorizontalNum>3</HorizontalNum>
          </HorizontalItem>
          <HorizontalItem className="horizontal__item">
            <HorizontalNum>4</HorizontalNum>
          </HorizontalItem>
          <HorizontalItem className="horizontal__item">
            <HorizontalNum>5</HorizontalNum>
          </HorizontalItem>
          <HorizontalItem className="horizontal__item">
            <HorizontalNum>6</HorizontalNum>
          </HorizontalItem>
        </HorizontalContent>
      </Container>
    </Horizontal>
    // </HorizontalWrapper>
  );
};

export default HorizontalScroll;
