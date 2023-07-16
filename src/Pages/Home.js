import React from "react";
import ProductCart from "../Components/ProductCart";
import { useTitle } from "../Custom-hook/useTitle";

const Home = () => {
  useTitle("Home");

  const products = [
    {
      id: 1001,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 30000,
      image: "/assets/images/1001.png",
    },
    {
      id: 1002,
      name: "Boat Rockerz 450",
      price: 3000,
      image: "/assets/images/1002.png",
    },
    {
      id: 1003,
      name: "JBL Tune 760NC",
      price: 17000,
      image: "/assets/images/1003.png",
    },
    {
      id: 1004,
      name: "Logitech H111 Wired",
      price: 3239,
      image: "/assets/images/1004.png",
    },
    {
      id: 1005,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 19999,
      image: "/assets/images/1005.png",
    },
    {
      id: 1006,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 2999,
      image: "/assets/images/1006.png",
    },
  ];
  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
