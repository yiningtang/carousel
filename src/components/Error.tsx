import { FONT_COLOUR } from "@src/models/constants";
import React from "react";
import styled from "styled-components";
const ErrorMsg = styled.p<{ $fontColour: string }>`
  color: ${(props) => props.$fontColour};
  font-weight: bold;
`;

export default function Error() {
  return (
    <ErrorMsg $fontColour={FONT_COLOUR}>
      An unknown error occurred, please try again later{" "}
    </ErrorMsg>
  );
}
