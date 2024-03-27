import styled from "styled-components";

export const ImgWrapper = styled.ul`
  width: 110vw;
  display: flex;
  padding: 0;
  list-style: none;
  position: absolute;
  margin: 0;
`;

export const ImgItem = styled.li`
  position: relative;
  padding: 0 1em;
  &:nth-of-type(1) {
    padding-left: 0;
  }
  .image-placeholder {
    width: 16vw;
    height: 44vh;
    background-size: 100% 100%;
    background-position: top;
    background-color: grey;
  }
`;

export const ImgGroup = styled.input<{
  $movieFocus: string;
}>`
  position: absolute;
  top:0;
  left:0;
  opacity: 0;
  &:focus + .carousel-slide {
    border: 2px solid ${(props) => props.$movieFocus};
    box-sizing: border-box; 
  }
`;

export const Img = styled.div<{$url: string, $loadingColor: string}>`
  width: 16vw;
  height: 44vh;
  background: no-repeat url(${props => props.$url});
  background-size: 100% 100%;
  background-position: top;
  position: absolute;
  top: 0;
`;

export const ImgPlaceholderItem = styled.li<{ $bgColour: string }>`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  list-style: none;
  padding: 0 1em;
  &:nth-of-type(1) {
    padding-left: 0;
  }
  .image-placeholder {
    width: 16vw;
    height: 44vh;
    background-size: 100% 100%;
    background-position: top;
    animation: fadeIn 2s;
    background-color: ${(props) => props.$bgColour};
  }
`;

export const CarouselContainer = styled.div `position: relative;`
