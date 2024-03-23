import React from "react";
import logo from "@assets/images/logo.svg";
import { styled } from "styled-components";

const LogoWrapper = styled.a``;

const Logo = () => (
  <LogoWrapper href="#">
    <img
      src={logo}
      loading="lazy"
      alt="Stan"
      srcSet={`${logo} 5x, ${logo} 2x`}
    />
  </LogoWrapper>
);
export default Logo;
