import React, { useEffect, useState } from "react";
import { getTiles } from "../../Services/GetTiles.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [values, setTiles] = useState();
  const history = useNavigate();
  const buttonHandler = () => {
    history("/thread");
  };

  useEffect(() => {
    getTiles().then((values) => {
      console.log(values);
      setTiles(values);
    });
  }, []);

  return (
    <div className="article">
        <h1>Let's Hear It.</h1>
      <ul>
        {values?.map((value) => (
          <li key={value.id} className="value">
            {value.get("Title")} | {value.get("Category")}
            <br />
            <button onClick={buttonHandler}>View More</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

