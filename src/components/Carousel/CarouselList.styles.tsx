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
@keyframes easeIn {
  0% {
    width: 10%;
  }
  100% {
    width: 100%;
  }
}
  position: relative;
  padding: 0 1em;
  &:nth-of-type(1) {
    padding-left: 0;
  }
  animation: easeIn 2s;
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
  height: 60vh;
  background: no-repeat url(${props => props.$url});
  background-size: cover;
  background-position: top;
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
    height: 60vh;
      animation: fadeIn 2s;
      background: ${(props) => props.$bgColour};
  }
`;

export const CarouselContainer = styled.div `position: relative;`
