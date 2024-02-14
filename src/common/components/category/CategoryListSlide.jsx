import Link from "next/link";
import Image from "next/image";
import { SectionTitleTwo } from "../../elements/sectionTitle/SectionTitle";
import {removeDuplicates, slugify} from '../../utils';
import Slider from "react-slick";

const CategoryListSlide = ({cateData}) => {

  const uniqueCategory = removeDuplicates(cateData, "cate");

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
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	adaptiveHeight: true,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,	
        },
      },
    ],
};
    
  return (
    <div className="axil-categories-list axil-section-gap bg-color-grey">
      <div className="container">
        <SectionTitleTwo title="Trending Topics" btnText="See All Topics"/>
        <div className="row">
          <div className="col-lg-12">
			<Slider {...slideSettings} className="list-categories categories-activation axil-slick-arrow arrow-between-side">
              {uniqueCategory.map((data, index) => (
                <div className="single-cat" key={index}>
                <div className="inner">
                <Link href={`/category/${slugify(data.cate)}`}>
                  <a>
                    <div className="thumbnail">
                    <Image
                        src={data.cate_img}
                        alt={data.cate}
                        height={180}
                        width={180}
                    />
                    </div>
                    <div className="content">
                      <h5 className="title">{data.cate}</h5>
                    </div>
                  </a>
                  </Link>
                </div>
              </div>
              ))}
              
			</Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryListSlide;
