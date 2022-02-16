import React, { useState } from "react";
const Komentar = () => {
  const [comments, setComments] = useState([]);
  const [posting, setPosting] = useState(""); //these for POST submit
  //these show or load data
  const fetchCommento = async () => {
    try {
      const response = await fetch("/api/learnapi");
      const data = await response.json();
      setComments(data);
    } catch (e) {
      console.error("ada errorr");
    }
  };
  //post new comments/input data to array in api/learnApi/commento
  const submitCommento = async () => {
    try {
      const response = await fetch("api/learnapi", {
        method: "POST",
        body: JSON.stringify({ posting }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error("ada error submit");
    }
  };

  const deleteCommento = async (commentId) => {
    try {
      const response = await fetch(`/api/learnapi/${commentId}`, {
        method: "DELETE",
      });
      const data = await response.json(); //convert to json
      console.log(data);
      fetchCommento(); //show after deleted
    } catch (e) {
      console.error(e, "delete commento");
    }
  };
  return (
    <div>
      <input type="text" value={posting} onChange={(e) => setPosting(e.target.value)} />
      <button onClick={submitCommento}>Submit posting</button>
      <button onClick={fetchCommento}>load comments here</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h1>
              {comment.id}
              {comment.text}
              {/* <button onClick={() => deleteCommento(comment.id)}>Delete</button> */}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Komentar;
