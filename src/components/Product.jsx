import React, { useRef, useState } from "react";

const Product = () => {
  let id = useRef();
  let productName = useRef();
  let price = useRef();
  let desc = useRef();
  let img = useRef();

  const [product, setproduct] = useState([
    {
      id: 1,
      productName: "ring",
      price: 200,
      desc: "this first producvt",
      img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
    },
    {
      id: 2,
      productName: "watch",
      price: 2000,
      desc: "this second producvt",
      img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },
  ]);

  //add product
  function addProduct() {
    let data = {
      id: id.current.value,
      productName: productName.current.value,
      price: price.current.value,
      desc: desc.current.value,
      img: img.current.value,
    };

    setproduct([...product, data]);

    console.log(product);
  }

  //delete product
  function deleteProduct(val) {
    console.log(val);

    setproduct(product.filter((e) => e.id !== val.id));
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="id" ref={id} />
        <input type="text" placeholder="name" ref={productName} />
        <input type="number" placeholder="price" ref={price} />
        <input type="text" placeholder="desc" ref={desc} />
        <input type="text" placeholder="img" ref={img} />
        <button onClick={addProduct}>submit</button>
      </div>

      <div className="row">
        {product.map((val, index) => {
          return (
            <>
              <div className="col-md-4">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    class="card-img-top"
                    src={val.img}
                    alt="Card image cap"
                    width={250}
                    height={250}
                  />
                  <div class="card-body">
                    <h1>{val.id}</h1>
                    <h5 class="card-title">{val.productName}</h5>
                    <h5 class="card-title">{val.price}</h5>
                    <p class="card-text">{val.desc}</p>
                    <button
                      class="btn btn-danger"
                      onClick={() => deleteProduct(val)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
