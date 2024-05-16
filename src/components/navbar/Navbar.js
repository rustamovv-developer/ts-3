import React, { memo } from "react";
import img from "@/assets/images/logo.png";
import "./nav.scss";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <Link href={"/"} className="nav__left">
            <Image src={img} alt="nav__logo" className="nav__img" />
            <h2 className="nav__title">E-Comm</h2>
          </Link>
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" href={"/"}>
                HOME
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"/bags"}>
                BAGS
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"/sneakers"}>
                SNEAKERS
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"/belt"}>
                BELT
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href={"/contact"}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Nav);
