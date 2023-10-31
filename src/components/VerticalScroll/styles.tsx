import styled from "styled-components";

export const VerticalWrapper = styled.div`
  & section {
    padding: 50px 0;
  }
`;

export const Vertical = styled.section`
  height: 200vh;
  width: 100vw;
`;

export const Container = styled.div`
  width: 95%;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const VerticalContent = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
  flex-wrap: wrap;
`;

export const Col = styled.div`
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ColLeft = styled.div`
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ColRight = styled.div`
  width: 40%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const VerticalHeading = styled.h2`
  font-size: 60px;
  font-weight: 900;
  line-height: 85%;
  border-left: 3px solid #ff98a2;
  padding: 25px;
  margin: 0;
  text-transform: uppercase;

  & span {
    display: block;
  }
`;

export const VerticalItem = styled.div`
  margin-bottom: 240px;
`;
