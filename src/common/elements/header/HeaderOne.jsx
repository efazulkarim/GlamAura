import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import MobileMenu from './MobileMenu';
import Nav from './Nav';


const HeaderOne = ({pClass, darkLogo, lightLogo, postData}) => {
    if (typeof window !== "undefined") {
        var colorMode = window.localStorage.getItem('color-mode');
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
            <header className={`header axil-header ${pClass || ""}`}>
                <div className="header-wrap">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12">
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
                        <div className="col-xl-6 d-none d-xl-block">
                            <div className="mainmenu-wrapper">
                                <nav className="mainmenu-nav">
                                    <Nav posts={postData}/>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-8 col-md-8 col-sm-9 col-12">
                            <div className="header-search text-end d-flex align-items-center">
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
            </header>

            <MobileMenu menuShow={showMMenu} menuHide={MobileHideHandler}/>
        </>
    )
}

export default HeaderOne;


