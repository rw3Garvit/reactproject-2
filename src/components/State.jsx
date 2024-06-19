import React, { useState } from "react";

const State = () => {
  //   let [count, setCount] = useState(0);

  //   const [color, setcolor] = useState("black");

  const [data, setdata] = useState([
    {
      name: "garvit",
      age: 22,
    },
  ]);

  function submit() {
    let result = {
      name: "ram",
      age: 22,
    };
    // setdata(result);
  }

  return (
    <>
      {data.map((val, index) => (
        <h1>{val.name}</h1>
      ))}

      <button onClick={submit}>submit</button>
      {/* <div className="box" style={{ backgroundColor: `${color}` }}> */}
      {/* {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
      {/* </div> */}
      {/* <button onClick={() => setcolor("red")}>change</button> */}
    </>
  );
};

export default State;
