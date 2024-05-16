import React from "react";
import { memo } from "react";
import img from "../../assets/images/adidas-img.png";
import "./adidas.scss";
import Image from "next/image";

const Adidas = () => {
  return (
    <section className="adidas">
      <div className="container">
        <div className="adidas__info">
          <div className="adidas__left">
            <h2 className="adidas__title">Adidas Men Running Sneakers</h2>
            <p className="adidas__text">
              Performance and design. Taken right to the edge.
            </p>
            <button className="adidas__btn">SHOP NOW</button>
          </div>
          <Image src={img} alt="adidas__img" className="adidas__img" />
        </div>
      </div>
    </section>
  );
};

export default memo(Adidas);
