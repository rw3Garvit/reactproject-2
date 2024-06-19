import React, { useState } from "react";

const Input = () => {
  const [text, settext] = useState("");

  function handle(e) {
    settext(e.target.value);
  }

  function submit() {
    let data = {
      name: text,
    };

    console.log(data);
  }

  return (
    <div>
      <input type="text" onChange={(e) => settext(e.target.value)} />
      <button onClick={submit}>submit</button>
    </div>
  );
};

export default Input;
