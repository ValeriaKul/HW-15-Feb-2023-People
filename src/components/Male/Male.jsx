import React from "react";
import People from "../People/People";

export default function Male({ newPeople }) {
  const man = newPeople.filter((men) => men.sex === "male");
  console.log(man);
  return (
    <div className="cont_male">
      <p className="p_man">Man</p>
      <div className="div_male">
        {man.map((men) => (
          <People key={men.id} {...men} />
        ))}
      </div>
    </div>
  );
}
