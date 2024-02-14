import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../utils";
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import AddBanner from "../ad-banner/AddBanner";

const PostSectionThree = ({ postData, adBanner, bgColor, heading }) => {

  const firstPost = postData[0];

  return (
    <div className={`axil-video-post-area axil-section-gap ${bgColor || "bg-color-black"}`}>
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
        {heading ? <SectionTitleOne title={heading} /> : ""}
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
            <div className="content-block post-default image-rounded mt--30">
            {firstPost.featureImg ? 
              <div className="post-thumbnail">
                <Link href={`/post/${firstPost.slug}`}>
                  <a>
                    <Image
                      src={firstPost.featureImg}
                      alt={firstPost.title}
                      height={500}
                      width={600}
                      priority={true}
                    />
                  </a>
                </Link>
                {firstPost.postFormat === 'video' ? <Link href={`/post/${firstPost.slug}`}>
                  <a className="video-popup position-top-center">
                    <span className="play-icon" />
                  </a>
                </Link> : ""}
               
              </div>:""}
              <div className="post-content">
                <div className="post-cat">
                  <div className="post-cat-list">
                    <Link href={`/category/${slugify(firstPost.cate)}`}>
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text={firstPost.cate}>
                            {firstPost.cate}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
                <h3 className="title">
                  <Link href={`/post/${firstPost.slug}`}>
                    <a>{firstPost.title}</a>
                  </Link>
                </h3>
                <div className="post-meta-wrapper">
                  <div className="post-meta">
                    <div className="content">
                      <h6 className="post-author-name">
                        <Link href={`/author/${slugify(firstPost.author_name)}`}>
                          <a className="hover-flip-item-wrapper">
                            <span className="hover-flip-item">
                              <span data-text={firstPost.author_name}>
                                {firstPost.author_name}
                              </span>
                            </span>
                          </a>
                        </Link>
                      </h6>
                      <ul className="post-meta-list">
                        <li>{firstPost.date}</li>
                        <li>{firstPost.read_time}</li>
                      </ul>
                    </div>
                  </div>
                  <ul className="social-share-transparent justify-content-end">
                    {firstPost.author_social.map((social) =>(
                      <li key={social.url}>
                        <a href={social.url}>
                          <i className={social.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
            <div className="row">
              {postData.slice(1, 5).map((data) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={data.slug}>
                  <div className="content-block post-default image-rounded mt--30">
                  {data.featureImg ? 
                    <div className="post-thumbnail">
                      <Link href={`/post/${data.slug}`}>
                      <a>
                        <Image
                          src={data.featureImg}
                          alt={data.title}
                          height={190}
                          width={285}
                          priority={true}
                        />
                      </a>
                    </Link>
                    {data.postFormat === 'video' ? <Link href={`/post/${data.slug}`}>
                      <a className="video-popup size-medium position-top-center">
                        <span className="play-icon" />
                      </a>
                    </Link> : ""}
                    
                    </div>
                    :""}
                    <div className="post-content">
                      <div className="post-cat">
                        <div className="post-cat-list">
                        <Link href={`/category/${slugify(data.cate)}`}>
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
                      <Link href={`/post/${data.slug}`}>
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
      </div>
    </div>
  );
};

export default PostSectionThree;
