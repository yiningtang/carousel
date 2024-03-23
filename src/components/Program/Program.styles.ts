import { styled } from "styled-components";

export const ProgramWrapper = styled.div<{ $fontColour?: string }>`
  display: flex;
  margin: 0 2em;
  color: ${(props) => props.$fontColour ?? ''};
`;

export const Image = styled.img`
  width: 20vw;
`;

export const ProgramSection = styled.section`
  display: block;
  padding: 0 4em;
  h1 {
    margin-top: 0;
    font-size: xx-large;
    font-weight: normal;
  }
  p {
    display: inline;
    padding: 0 0.5em;
    &:nth-of-type(1) {
        padding-left: 0;
    }
  }
  .divider {
    height: 0.75em;
    border-right: 1px solid white;
    display: inline-block;
  }
`;

export const ProgramDesc = styled.section`
  margin-top: 2em;
`;

export const PlaceHolder = styled.div<{$bgColour:string, $width: string, $height: string}>`
background: ${props => props.$bgColour};
width: ${props => props.$width};
height: ${props => props.$height};
margin: 2em;
&.image-placeholder {
    margin-left: 0;
}
`