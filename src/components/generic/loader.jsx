import React from "react";
import { ScaleLoader } from "react-spinners";

export default function ButtonLoader({ extraclassName, className, Color, Size }) {
  return (
    <div className={extraclassName}>
      <ScaleLoader className={className} color={Color} height={Size} />
    </div>
  );
}