import React, { useEffect, useState } from "react";
import { Menu } from "./Menu";
import Link from "next/link";
import useWindowDimensions from "./../utility/useWindowDimensions";
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

const Header = () => {
  const { width, height } = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground, true);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);
  return (
    <header
      className={
        menuOpen
          ? "text-gray-700 body-font stickyNav openMenu"
          : "text-gray-700 body-font stickyNav"
      }
    >
      <div className={navbar ? "navbar scrolledNavbar" : "navbar"}>
        <Link href="/">
          <div className="flex lwContainer">
            <img className="logo" src="/images/Logo.webp" />
            <a className="flex items-center mb-4 font-medium text-gray-900 title-font  ">
              <span className="ml-3 text-xl font-zygoregular text-white LWFitnessText">
                LW | FITNESS
              </span>
            </a>
          </div>
        </Link>
        {width > 960 ? (
          <div className="flex justify-center centeredLoganTitle">
            <a className="flex items-center mb-4 font-medium title-font ">
              <span className="ml-3 text-xl font-zygoregular silverTextColor ">
                LOGAN WONG
              </span>
            </a>
          </div>
        ) : null}

        <Menu setMenuOpen={setMenuOpen} />
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="text-gray-700 body-font footerPadding ">
    <div className="bg-gray-200">
      <div className="container flex flex-col flex-wrap  py-4  sm:flex-row footerBg">
        <p className="text-sm text-center text-gray-500 sm:text-left">
          <a
            href="https://www.linkedin.com/in/shawn-noruzi/"
            rel="noopener noreferrer"
            className="ml-1 text-gray-600"
            target="_blank"
          >
            ?? Made With &#10084; Noruzi 2021
          </a>
        </p>
        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start footerIcons">
          <a
            href="https://www.facebook.com/Logan-Wong-104860997868823/?view_public_for=104860997868823"
            className="text-gray-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/loganwongfitness/"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/logan-wong/"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Layout;
