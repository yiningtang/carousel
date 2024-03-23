import { FONT_COLOUR } from "@src/models/constants";
import React from "react";
import { ImgPlaceholderItem, ImgWrapper } from "./CarouselList.styles";

export default function CarouselLoading() {
  return (
    <ImgWrapper>
      {[0, 1, 2, 3, 4, 5].map((val) => (
        <ImgPlaceholderItem key={val} $bgColour={FONT_COLOUR}>
          <div className="image-placeholder"></div>
        </ImgPlaceholderItem>
      ))}
    </ImgWrapper>
  );
}
