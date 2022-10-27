import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getCommentByThreadId } from "../../Services/Comment.js";

export default function Thread() {
  const [values, setComments] = useState();
  const history = useNavigate();
  const location = useLocation();
  const objId = location.state.objId;
  const title = location.state.title;
  const buttonHandler = () => {
    history("/");
  };

  useEffect(() => {
    getCommentByThreadId(objId).then((values) => {
      console.log(values);
      setComments(values);
    });
  }, []);

  //display comments for the appropriate post - pulls data from Comment class
  return (
    <div className="article">
        <h1>{title}</h1>
      <div className="holder">
        {values?.map((value) => (

          <div className="tile">
            {value.get("Content")}
            <br />
          </div>
        ))}
      </div>
      <button onClick={buttonHandler}>Home</button>
    </div>
  );
}

//would like to add more functionality to this return statement - ability to upvote and downvote comments
//in future add ability to write a comment 