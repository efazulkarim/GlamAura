import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../utils";

const PostSectionNine = ({ postData, bgColor }) => {

  const firstPost = postData[0];

  return (
    <div className={`axil-tech-post-banner ${bgColor || "bg-color-grey"}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12 col-12 mt--30">
            <div className="content-block post-grid post-grid-transparent">
            {firstPost.featureImg ? 
              <div className="post-thumbnail">
                <Link href={`/post/${firstPost.slug}`}>
                  <a>
                    <Image
                      src={firstPost.featureImg}
                      alt={firstPost.title}
                      height={600}
                      width={600}
                      priority={true}
                    />
                  </a>
                </Link>
              </div>:""}
              <div className="post-grid-content">
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
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
            <div className="row">
              {postData.slice(1, 5).map((data) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--30" key={data.slug}>
                  <div className="content-block post-default image-rounded">
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

export default PostSectionNine;
