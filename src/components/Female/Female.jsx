import React from "react";
import { useSelector } from "react-redux";
import People from "../People/People";

export default function Female() {

  const people = useSelector((state) => state);
  const women = people.filter((woman) => woman.sex === "female");

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
