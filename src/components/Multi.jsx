import React, { useState } from "react";

const Multi = () => {
  const [input, setinput] = useState({ email: "", password: "", role: "" });

  function handle(e) {
    setinput({ ...input, [e.target.name]: e.target.value });
  }

  function submit() {
    console.log(input);
    setinput({ email: " ", password: " ", role: " " });
  }

  return (
    <div>
      <input type="text" name="email" onChange={handle} value={input.email} />
      <input
        type="text"
        name="password"
        onChange={handle}
        value={input.password}
      />
      <input type="text" name="role" onChange={handle} value={input.role} />
      <button onClick={submit}>submit</button>
    </div>
  );
};

export default Multi;
