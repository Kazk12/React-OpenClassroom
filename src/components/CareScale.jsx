import React from "react";
import Sun from "../assets/images/sun.svg";
import Water from "../assets/images/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  const quantityLabel = {
    1: "peu",
    2: "modérément",
    3: "beaucoup",
  };

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
