import React from "react";

import MyFather from "./MyFather";
import MyMother from "./MyMother";
import MyBrother from "./MyBrother";
import Me from "./Me";
import MySister from "./MySister";

function Family({ father, mother, brother, me, sister }) {
  return (
    <div>
      <MyFather NameFather={father} />
      <MyMother NameMother={mother} />
      <MyBrother NameBrother={brother} />
      <Me MyName={me} />
      <MySister NameSister={sister} />
    </div>
  );
}

export default Family;
