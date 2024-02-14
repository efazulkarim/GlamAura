import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { slugify } from "../../utils";


const SliderTwo = ({postData}) => {
    
    const slideSettingsOne = {
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        draggable: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    const slideSettingsTwo = {
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        draggable: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
      <div className="slider-area creative-slider-area bg-color-grey">
        <div className="axil-slide slider-style-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1">
                
                <Slider asNavFor={nav2} ref={(slider1 => setNav1(slider1))} {...slideSettingsOne} className="slider-inner slick-nav-avtivation-new">
                    {postData.slice(1, 10).map((data, index) => (
                    <div className="content-block post-medium post-medium-border" key={data.slug}>
                        <div className="post-number">
                        <span>{index + 1}</span>
                        </div>
                        {data.featureImg ? 
                        <div className="post-thumbnail">
                            <Link href={`/post/${data.slug}`}>
                                <a>
                                    <Image
                                        src={data.featureImg}
                                        alt={data.title}
                                        height={100}
                                        width={100}
                                        priority
                                    />
                                </a>
                            </Link>
                        </div>
                        :""}
                        <div className="post-content">
                            <div className="post-cat">
                                <div className="post-cat-list">
                                <Link href={`/category/${slugify(data.cate)}`}>
                                    <a>{data.cate}</a>
                                </Link>
                                </div>
                            </div>
                            <h4 className="title">
                                <Link href={`/post/${data.slug}`}>
                                    <a>{data.title}</a>
                                </Link>
                            </h4>
                            <div className="post-button">
                                <Link href={`/post/${data.slug}`}>
                                    <a className="axil-button button-rounded color-secondary-alt">
                                        Read More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                  ))}
                </Slider>
                
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <Slider asNavFor={nav1} ref={(slider2 => setNav2(slider2))} {...slideSettingsTwo} className="thumbnail-wrapper slick-for-avtivation-new">
                {postData.slice(1, 10).map((data) => (
                    <div className="thumbnail" key={data.slug}>
                        {data.featureImg ? 
                        <Link href={`/post/${data.slug}`}>
                            <a>
                                <Image
                                    src={data.featureImg}
                                    alt={data.title}
                                    height={870}
                                    width={730}
                                    priority={true}
                                />
                            </a>
                        </Link>
                        :""}
                    </div>
                ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default SliderTwo;