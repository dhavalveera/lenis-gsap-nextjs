import React from "react";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// hooks
import { useIsomorphicLayoutEffect } from "@/hook";

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
  useIsomorphicLayoutEffect(() => {
    const gsapCtx = gsap.context(() => {
      // Horizontal Scroll
      const sectionTwo = document.getElementById("horizontal");
      const boxItems = gsap.utils.toArray(".horizontal__item");

      gsap.to(boxItems, {
        xPercent: -100 * boxItems.length,
        ease: "sine.out",
        scrollTrigger: {
          trigger: sectionTwo,
          pinnedContainer: sectionTwo,
          pin: true,
          scrub: 0.5,
          // snap: 1 / (boxItems.length - 1),
          end: () => `+=${sectionTwo?.offsetWidth}`,
        },
      });

      ScrollTrigger.refresh();
    });

    return () => gsapCtx.revert();
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
