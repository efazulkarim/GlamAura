import Image from "next/image";
import PostAuthor from "./element/PostAuthor";
import SidebarTwo from "../../sidebar/SidebarTwo";
import PostMetaTwo from "./element/PostMetaTwo";
import PostComment from "./element/PostComment";
import Slider from "react-slick";

const PostFormatGallery = ({ postData, allData }) => {
	const basePathLink = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? "" : "";
  
  	const postContent = postData.content.replaceAll('/images/', basePathLink + '/images/');
	
  const SlideGallery = () => {
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
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SlickNextArrow />,
		prevArrow: <SlickPrevArrow />,
	};
    return (
		<Slider {...slideSettings} className="post-gallery-activation axil-slick-arrow arrow-between-side">
			{postData.gallery.map((data, index) => (
				<div className="post-images" key={index}>
					<Image
					src={data}
					alt={postData.title}
					height={500}
					width={810}
					priority={true}
					/>
				</div>
			))}
		</Slider>
    );
  };

  return (
    <>
      <div className="post-single-wrapper axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <PostMetaTwo metaData={postData} />
              <div className="axil-post-details">
                {postData.gallery ? <SlideGallery /> : ""}
                <div
                  className="post-details-content"
                  dangerouslySetInnerHTML={{ __html: postContent }}
                ></div>
                <PostAuthor dataAuthor={postData} />
                <PostComment />
              </div>
            </div>
            <div className="col-lg-4">
              <SidebarTwo dataPost={allData} tagData={postData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormatGallery;
