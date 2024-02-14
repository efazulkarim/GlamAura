import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import AddBanner from "../ad-banner/AddBanner";
import Slider from "react-slick";
import { slugify } from "../../utils";

const filters = [
 
  {
    id: 1,
    cate: "Gadget",
  },
  {
    id: 2,
    cate: "Design",
  },
  {
    id: 3,
    cate: "Marketing",
  },
  {
    id: 4,
    cate: "Technology",
  },
];
const defaultActiveCat = slugify(filters[0].cate);

const PostSectionTwo = ({ postData, adBanner, headingTitle }) => {
  const defaultData = postData.filter(
    (post) => slugify(post.cate) === defaultActiveCat
  );

  const [activeNav, setActiveNav] = useState(defaultActiveCat);
  const [tabPostData, setTabPostData] = useState(defaultData);

  const handleChange = (e) => {
    let filterText = slugify(e.target.textContent);
    setActiveNav(filterText);

    let tempData = [];

    for (let i = 0; i < postData.length; i++) {
      const element = postData[i];
      let categories = element["cate"];

      if (slugify(categories).includes(filterText)) {
        tempData.push(element);
      }
    }

    setTabPostData(tempData);
  };

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow next-arrow ${className}`}
        onClick={onClick}
      >
        <i className="fal fa-arrow-right"></i>
      </button>
    );
  }

  function SlickPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow prev-arrow ${className}`}
        onClick={onClick}
      >
        <i className="fal fa-arrow-left"></i>
      </button>
    );
  }

  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,	
        },
      },
    ],
  };

  return (
    <div className="axil-tab-area axil-section-gap bg-color-white">
      <div className="wrapper">
        <div className="container">
			{adBanner === true ?  
			<div className="row">
            <div className="col-lg-12">
              <AddBanner
                img="/images/add-banner/banner-03.webp"
                pClass="mb--30"
              />
            </div>
          </div> : ""}
         
          <SectionTitleOne title={ headingTitle || "Innovation & Tech"} />
          <div className="row">
            <div className="col-lg-12">
              <Tab.Container id="axilTab" defaultActiveKey={activeNav}>
                <Nav className="axil-tab-button nav nav-tabs mt--20">
                  {filters.map((data) => (
                    <Nav.Item key={data.id}>
                      <Nav.Link
                        onClick={handleChange}
                        eventKey={slugify(data.cate)}
                      >
                        {data.cate}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey={activeNav} className="single-tab-content">
                    <Slider
                      {...slideSettings}
                      className="modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side"
                    >
                      {tabPostData.map((data) => (
                        <div className="slick-single-layout" key={data.slug}>
                          <div className="content-block modern-post-style text-center content-block-column">
                            <div className="post-content">
                              <div className="post-cat">
                                <div className="post-cat-list">
                                  <Link
                                    href={`/category/${slugify(data.cate)}`}
                                  >
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
                              <h4 className="title">
                                <Link href={`/post/${data.slug}`}>
                                  <a>{data.title}</a>
                                </Link>
                              </h4>
                            </div>
                            {data.featureImg ? 
                            <div className="post-thumbnail">
                              <div className="round-shape">
                                <Image
                                    src="/images/icons/shape-01.webp"
                                    alt="Round Shape"
                                    height={77}
                                    width={390}
                                    priority={true}
                                  />
                              </div>
                              <Link href={`/post/${data.slug}`}>
                                <a>
                                  <Image
                                    src={data.featureImg}
                                    alt={data.title}
                                    height={260}
                                    width={390}
                                    priority={true}
                                  />
                                </a>
                              </Link>
                            </div>
                            :""}
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionTwo;
