import React from "react";
import People from "../People/People";
import { useSelector } from "react-redux";

export default function Male() {
  const people = useSelector((state) => state);
  const man = people.filter((men) => men.sex === "male");

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
