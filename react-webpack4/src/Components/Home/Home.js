import React, { useEffect, useState } from "react";
import { getTiles } from "../../Services/GetTiles.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [values, setData] = useState();
  const history = useNavigate();
  const buttonHandler = () => {
    history("/thread");
  };

  useEffect(() => {
    getTiles().then((values) => {
      console.log(values);
      setData(values);
    });
  });

  return (
    <div className="article">
        <h1>Home</h1>
      <ul>
        {values?.map((value) => (
          <li key="value" className="value">
            ${value.title} <br />${value.category}.
            <br />
          </li>
        ))}
      </ul>
      <button onClick={buttonHandler}>View More</button>
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