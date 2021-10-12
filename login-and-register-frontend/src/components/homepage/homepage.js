import React from "react";
import "./homepage.css";
import Mainplayer from "./Mainplayer";
import axios from "axios";
import { useRef } from "react";

const Homepage = ({ setLoginUser }) => {
  const inputRef = useRef(null);
  const upload = () => {
    var formData = new FormData();
    formData.append("audio", inputRef.files[0]);
    axios.post("upload_file", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
  return (
    <div className="homepage">
      {/* <h1>Hello Homepage</h1> */}
      <Mainplayer />
      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontSize: "20px",
          color: "blue",
          cursor: "pointer",
        }}
        onClick={() => setLoginUser({})}
      >
        <b>Logout</b>
      </div>
      <form enctype="multipart/form-data">
        <input type="file" name="audio" ref={inputRef} />
        <button onClick={upload}>UPLOAD</button>
      </form>
    </div>
  );
};

export default Homepage;
