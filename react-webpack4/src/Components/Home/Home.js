import React, { useEffect, useState } from "react";
import { getTiles } from "../../Services/GetTiles.js";

export default function Home() {
  const [values, setData] = useState();

  useEffect(() => {
    getTiles().then((values) => {
      console.log(values);
      setData(values);
    });
  });

  return (
    <div class="article">
        <h1>Home</h1>
      <ul>
        {values?.map((value) => (
          <li key="value" class="value">
            ${value.title} <br />${value.category}.
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

/*export default function Home() {
    return (
      <section>
        <h1>Welcome to the Home component</h1>
        <p>This is the home component</p>
      </section>
    );
  }
*/