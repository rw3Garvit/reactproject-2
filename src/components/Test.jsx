import React from "react";
import { Button } from "./Atoms/Elements";

const Test = () => {
  function test() {
    console.log("test called");
  }

  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        class="card-img-top"
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <Button
          content="Go somewhere"
          classs="btn btn-primary"
          onClick={test}
        />
      </div>
    </div>
  );
};

export default Test;
