import { useState } from 'react';
import Link from 'next/link'
import Image from "next/image";
import { slugify } from "../../utils";

const filters = [
    {
        id: 1,
        cate: "Fashion",
    },
    {
        id: 2,
        cate: "Skincare",
    },
    {
        id: 3,
        cate: "Beauty",
    },
    {
        id: 4,
        cate: "Apparel",
    },
];

const defaultActiveCat = slugify(filters[0].cate);

const Nav = ({ posts }) => {

    const defaultData = posts.filter(
        (post) => slugify(post.cate) === defaultActiveCat
    );

    const [activeNav, setActiveNav] = useState(defaultActiveCat);
    const [tabPostData, setTabPostData] = useState(defaultData);

    const handleChange = (e) => {
        let filterText = slugify(e.target.textContent);
        setActiveNav(filterText);

        let tempData = [];

        for (let i = 0; i < posts.length; i++) {
            const element = posts[i];
            let categories = element["cate"];

            if (slugify(categories).includes(filterText)) {
                tempData.push(element);
            }
        }

        setTabPostData(tempData);
    };

    return (
        <ul className="mainmenu">
            <li className="menu-item-has-children">
                <Link href="/">Home</Link>
            </li>
            <li className="menu-item-has-children">
                <Link legacyBehavior href="/apparel-blog">
                    <a>Apparel</a>
                </Link>
                {/*  <ul className="axil-submenu">
                    <li>
                        <Link legacyBehavior href="/post/beauty-of-deep-space-billions-of-galaxies-in-the-universe.">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Format Standard">Post Format Standard</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/post/flutter-the-good-the-bad-and-the-ugly">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Format Video">Post Format Video</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/post/fashion-young-handsome-man-in-casual-watch">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Format Gallery">Post Format Gallery</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/post/lightweight-grippable-and-ready-to-go">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Format Audio">Post Format Audio</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/post/new-freehand-templates-built-for-the-whole-team">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Format Quote">Post Format Quote</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                </ul> */}
            </li>
            <li className="menu-item-has-children megamenu-wrapper">
                <Link legacyBehavior href="#">
                    <a> Category</a>
                </Link>
                <ul className="megamenu-sub-menu">
                    <li className="megamenu-item">
                        {/* Start Verticle Nav  */}
                        <div className="axil-vertical-nav">
                            <ul className="vertical-nav-menu">
                                {filters.map((data) => (
                                    <li className={`vertical-nav-item ${slugify(data.cate) === activeNav ? "active" : ""}`} key={data.id}>
                                        <a className="hover-flip-item-wrapper" href="#" onMouseOver={handleChange}>
                                            <span className="hover-flip-item">
                                                <span data-text={data.cate}>{data.cate}</span>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Start Verticle Nav  */}
                        {/* Start Verticle Menu  */}
                        <div className="axil-vertical-nav-content">
                            {/* Start One Item  */}
                            <div className="axil-vertical-inner tab-content">
                                <div className="axil-vertical-single">
                                    <div className="row">
                                        {tabPostData.slice(0, 4).map((data) => (
                                            <div className="col-lg-3" key={data.slug}>
                                                <div className="content-block image-rounded">
                                                    <div className="post-thumbnail mb--20">
                                                        <Link legacyBehavior href={`/post/${data.slug}`}>
                                                            <a>
                                                                <Image
                                                                    src={data.featureImg}
                                                                    alt={data.title}
                                                                    height={130}
                                                                    width={200}
                                                                    priority={true}
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="post-content">
                                                        <div className="post-cat">
                                                            <div className="post-cat-list">
                                                                <Link legacyBehavior href={`/category/${slugify(data.cate)}`}>
                                                                    <a className="hover-flip-item-wrapper">
                                                                        <span className="hover-flip-item">
                                                                            <span data-text={data.cate}>
                                                                                {data.cate}
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <h5 className="title">
                                                            <Link legacyBehavior href={`/post/${data.slug}`}>
                                                                <a>{data.title}</a>
                                                            </Link>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* End One Item  */}
                        </div>
                        {/* End Verticle Menu  */}
                    </li>
                </ul>
            </li>
            {/* <li className="menu-item-has-children">
                <Link legacyBehavior href="/">
                    <a>Pages</a>
                </Link>
                <ul className="axil-submenu">
                    <li>
                        <Link legacyBehavior href="/post-list">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post List">Post List</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/category/design">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Post Archive">Post Archive</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/author/rose-mary">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Author Page">Author Page</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/about">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="About Page">About Page</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/contact">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Contact Us">Contact Us</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/404">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="404 Page">404 Page</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/maintenance">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Maintenance">Maintenance</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/privacy-policy">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Privacy Policy">Privacy Policy</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </li> */}

            <li>
                <Link legacyBehavior href="/fashion-blog">
                    <a>Fashion</a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior href="/beauty-blog">
                    <a>Beauty</a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior href="/beauty-blog">
                    <a>Skincare</a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior href="/lifestyle-blog">
                    <a>Pets</a>
                </Link>
            </li>
        </ul>
    );
}

export default Nav;
