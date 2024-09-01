import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="NewsLetter">
      <h1>Customer Care</h1>
      <p>Provide your Feedback</p>

      <div>
        <input type="text" placeholder="Feedback" />
        <input type="email" placeholder="Your Email Id" name="" id="" />
        <button>Send</button>
      </div>
    </div>
  );
}
