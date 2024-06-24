import React, { useEffect, useState } from "react";
import { data } from "./Data";

const Effect = () => {
  const [product, setproduct] = useState([]);
  //   const [count, setcount] = useState(0);

  //   const [text, settext] = useState("garvit");

  //   useEffect(() => {
  //     console.log("Hello world");
  //     setInterval(() => {
  //       setcount(count + 1);
  //     }, 1000);
  //   }, [count]);

  useEffect(() => {
    setproduct(data);
  }, []);

  return (
    <div>
      {/* <h1>{count}</h1>
      <h1>{text}</h1>
      <button onClick={() => settext("hello garvit")}>change</button> */}

      {product?.map((val, index) => {
        return <h1>{val.productName}</h1>;
      })}
    </div>
  );
};

export default Effect;
