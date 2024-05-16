"use client";
import React, { useState } from "react";
import { memo } from "react";
import { FaRegHeart, FaRegEye, FaHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import stars from "../../assets/images/stars.png";
import "./products.scss";
import Image from "next/image";
import Link from "next/link";

const Products = ({ data }) => {
  const [limit, setLimit] = useState(8);

  console.log(data);
  let productItems = data?.products?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__box">
        <Image
          width={200}
          height={200}
          className="products__img"
          src={el.images[0]}
          alt={el.title}
        />
        <div className="products__icons">
          <Link href={"/"} className="products__icon">
            <FaRegHeart style={{ color: "#33A0FF", fontSize: "20px" }} />
          </Link>
          <Link href={"/"} className="products__icon">
            <MdOutlineShoppingCart
              style={{ color: "#33A0FF", fontSize: "20px" }}
            />
          </Link>
          <Link href={"/"} className="products__icon">
            <FaRegEye style={{ color: "#33A0FF", fontSize: "20px" }} />
          </Link>
        </div>
      </div>
      <Link href={"/"} className="products__exam">
        <h2 className="products__title">{el.title}</h2>
        <Image src={stars} alt="stars" className="products__stars" />
        <div className="products__new">
          <h3 className="products__h3">${el.price}</h3>
          <p className="products__text">${el.oldPrice}</p>
          <strong className="products__strong">24% Off</strong>
        </div>
      </Link>
    </div>
  ));

  return (
    <section className="products">
      <div className="container">
        <div className="products__top">
          <h2 className="products__top__title">BEST SELLER</h2>
          <ul className="products__list">
            <li className="products__item">
              <Link href={"/"} className="products__link">
                All
              </Link>
            </li>
            <li className="products__item">
              <Link href={"/"} className="products__link">
                Sunglasses
              </Link>
            </li>
            <li className="products__item">
              <Link href={"/"} className="products__link">
                Bags
              </Link>
            </li>
            <li className="products__item">
              <Link href={"/"} className="products__link">
                Sneakers
              </Link>
            </li>
            <li className="products__item">
              <Link href={"/"} className="products__link">
                Belt
              </Link>
            </li>
          </ul>
        </div>
        <div className="products__info">{productItems}</div>

        <button
          onClick={() => setLimit((p) => p + 4)}
          className="products__btn"
        >
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default memo(Products);
