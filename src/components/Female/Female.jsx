
import React from "react";
import People from "../People/People";

export default function Female({ newPeople }) {
  const women = newPeople.filter((woman) => woman.sex === "female");
  console.log(women);
  return (
    <div className="cont_female">
      <p className="p_women">Women</p>
      <div className="div_female">
        {women.map((woman) => (
          <People key={woman.id} {...woman} />
        ))}
      </div>
    </div>
  );
}
