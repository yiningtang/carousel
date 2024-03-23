import { FONT_COLOUR } from "@src/models/constants";
import React from "react";
import { ProgramWrapper, PlaceHolder } from "./Program.styles";

export default function ProgramLoading() {
  return (
    <ProgramWrapper>
      <PlaceHolder
        className="image-placeholder"
        $bgColour={FONT_COLOUR}
        $width={`20vw`}
        $height={`40vh`}
      />
      <section>
        <PlaceHolder $bgColour={FONT_COLOUR} $width={`15vw`} $height={`5vh`} />
        <PlaceHolder $bgColour={FONT_COLOUR} $width={`35vw`} $height={`4vh`} />
        <PlaceHolder $bgColour={FONT_COLOUR} $width={`50vw`} $height={`15vh`} />
      </section>
    </ProgramWrapper>
  );
}
