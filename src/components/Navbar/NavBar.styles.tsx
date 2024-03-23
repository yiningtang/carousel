import styled from "styled-components";

const Option = styled.li<{ $fontColour: string; $activeFontColour: string }>`
  list-style: none;
  weight: bold;
  margin: 1em;
  font-weight: bold;
  &:focus,
  &:hover {
    color: ${(props) => props.$activeFontColour};
  }
  a {
    color: ${(props) => props.$fontColour};
    text-decoration: none;
    &: hover, focus, &.active {
      color: ${(props) => props.$activeFontColour};
    }
  }
`;

const Menu = styled.ul`
  display: inline-flex;
`;

export default { Menu, Option };
