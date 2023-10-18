import React from "react";
import Image from "next/image";
import LogoImage from "@/components/Images/EtheralSky.png";

export const Logo = () => (
  <Image src={LogoImage} width={35} height={35} alt="LogoImage" />
);
