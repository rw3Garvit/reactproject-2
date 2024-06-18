import Card from "./components/Card";
import Form from "./components/Form";
import Jumbo from "./components/Jumbo";
import Navbar from "./components/Navbar";
import Test from "./components/Test";

let App = () => {
  let data = [
    {
      title: "hello",
      desc: "this is card one",
    },
    {
      title: "hello two",
      desc: "this is card two",
    },
    {
      title: "hello three",
      desc: "this is card three",
    },
    {
      title: "hello four",
      desc: "this is card three",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="row">
        {/* {data.map((val, index) => {
          return (
            <div className="col-md-4">
              <Card title={val.title} />
            </div>
          );
        })} */}
        {/* <Test /> */}
        <Jumbo />
        <Form />
      </div>
    </>
  );
};

export default App;
