"use client";

import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="UroLaser"
      width={110}
      height={110}
      className="object-contain"
    />
  );
};