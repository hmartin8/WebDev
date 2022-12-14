import React, { useEffect, useState } from "react";
import { getTiles } from "../../Services/Threads.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [values, setTiles] = useState();
  const history = useNavigate();
  function buttonHandler(objId, title) {
    history("/thread", {state:{objId: objId, title:title}});
  };

  useEffect(() => {
    getTiles().then((values) => {
      console.log(values);
      setTiles(values);
    });
  }, []);

  //display basic information about threads - pulls data from Threads class
 
  return (
    <div className="article">
      <h1>Let's Hear It.</h1>
      <div className="holder">
        {values?.map((value) => (
          <div className="tile">
            {value.get("Title")} | {value.get("Category")}
            <br />
            <button class = "viewMore" onClick={() => buttonHandler(value.id, value.get("Title"))}>View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};
//in future add ability to write a thread 

