import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import SocialData from "../../../data/social/SocialData.json";

const HeaderThree = ({ darkLogo, lightLogo, postData }) => {
  const dateFormate = () => {
    var day = new Date().getDate();
    var month = new Date().toLocaleString("en-US", { month: "long" });
    var year = new Date().getFullYear();

    var todayDate = day + " " + month + "," + " " + year;

    return todayDate;
  };

  if (typeof window !== "undefined") {
    var colorMode = window.localStorage.getItem("color-mode");
  }

  const [showMMenu, SetShowMMenu] = useState(false);

  const MobileShowHandler = () => SetShowMMenu(true);
  const MobileHideHandler = () => SetShowMMenu(false);

  const [togglaClass, setTogglaClass] = useState(false);

   const toggleHandler = () => {
        setTogglaClass(active => !active);
   }

  return (
    <>
      <header className="header axil-header header-style-3  header-light header-sticky">
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8 col-sm-12">
                <div className="header-top-bar d-flex flex-wrap align-items-center justify-content-center justify-content-md-start">
                  <ul className="header-top-date liststyle d-flex flrx-wrap align-items-center mr--20">
                    <li>
                      <Link href="#">
                        <a>{dateFormate()}</a>
                      </Link>
                    </li>
                  </ul>
                  <ul className="header-top-nav liststyle d-flex flrx-wrap align-items-center">
                    <li>
                      <Link href="#">
                        <a>Advertisement</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a href="#">About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-sm-12">
                <ul className="social-share-transparent md-size justify-content-center justify-content-md-end">
                  <li>
                    <a href={SocialData.fb.url}>
                      <i className={SocialData.fb.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialData.instagram.url}>
                      <i className={SocialData.instagram.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialData.twitter.url}>
                      <i className={SocialData.twitter.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialData.linked.url}>
                      <i className={SocialData.linked.icon} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <Image
                                className="dark-logo"
                                width={141}
                                height={37}
                                src={(colorMode === "Dark" ? lightLogo || "/images/logo/logo-white2.webp" : darkLogo || "/images/logo/logo-black.webp") || "/images/logo/logo-black.webp" }
                                alt="Blogar logo"
                                />
                            </a>
                        </Link>
                    </div>
                </div>     
                <div className="col-lg-9 col-md-8 col-sm-6">
                    <div className="banner-add text-end">
                    <a href="#">
                        <Image
                        src="/images/others/add-01.webp"
                        width={728}
                        height={92}
                        alt="Add images"
                        />
                    </a>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-7 col-12">
                <div className="mainmenu-wrapper d-none d-xl-block">
                  <nav className="mainmenu-nav">
                  <Nav posts={postData}/>
                  </nav>
                </div>
              </div>
              <div className="col-xl-5 col-12">
                <div className="header-search d-flex flex-wrap align-items-center justify-content-center justify-content-xl-end">
                  <form className="header-search-form d-sm-block d-none">
                    <div className="axil-search form-group">
                      <button type="submit" className="search-button">
                        <i className="fal fa-search" />
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                  <div className="mobile-search-wrapper d-sm-none d-block">
                    <button className="search-button-toggle" onClick={toggleHandler}>
                      <i className="fal fa-search" />
                    </button>
                    <form className={`header-search-form ${togglaClass ? "open": ""}`}>
                      <div className="axil-search form-group">
                        <button type="submit" className="search-button">
                          <i className="fal fa-search" />
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </div>
                  <ul className="metabar-block">
                    <li className="icon">
                      <Link href="#">
                        <a>
                          <i className="fas fa-bookmark" />
                        </a>
                      </Link>
                    </li>
                    <li className="icon">
                      <Link href="#">
                        <a>
                          <i className="fas fa-bell" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <Image
                            width={40}
                            height={40}
                            src="/images/others/author.webp"
                            alt="Author Images"
                          />
                        </a>
                      </Link>
                    </li>
                  </ul>
                  {/* Start Hamburger Menu  */}
                  <div className="hamburger-menu d-block d-xl-none">
                    <div className="hamburger-inner">
                      <div className="icon" onClick={MobileShowHandler}>
                        <i className="fal fa-bars" />
                      </div>
                    </div>
                  </div>
                  {/* End Hamburger Menu  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu menuShow={showMMenu} menuHide={MobileHideHandler} />
    </>
  );
};

export default HeaderThree;
