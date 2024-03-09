import React from "react";
export default function ButtonLoader({ extraclassName, className, Color, Size }) {
  return (
    <div className={extraclassName}>
      {/* <ScaleLoader className={className} color={Color} height={Size} /> */}
      {/* <ScaleLoader color="#36d7b7" /> */}
      laoding...
    </div>
  );
}