import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../utils";


const PostSectionEight = ({ postData }) => {

	const firstPost = postData[0];

  return (
    <div className="axil-seo-post-banner seoblog-banner axil-section-gap bg-color-grey">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-12 col-12">
            <div className="content-block post-grid post-grid-large">
            {firstPost.featureImg ? 
              <div className="post-thumbnail">
                <Link href={`/post/${firstPost.slug}`}>
                  <a>
                    <Image
                      src={firstPost.featureImg}
                      alt={firstPost.title}
                      height={600}
                      width={705}
                      priority={true}
                    />
                  </a>
                </Link>
              </div>
              :""}
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
                  <div className="post-meta-wrapper">
                    <div className="post-meta">
                      <div className="post-author-avatar border-rounded">
                        <Image
                          src={firstPost.author_img}
                          alt={firstPost.author_name}
                          height={50}
                          width={50}
                        />
                      </div>
                      <div className="content">
                        <h6 className="post-author-name">
                          <Link
                            href={`/author/${slugify(firstPost.author_name)}`}
                          >
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
                          <li>{firstPost.post_views}</li>
                        </ul>
                      </div>
                    </div>
                    <ul className="social-share-transparent justify-content-end">
                      {firstPost.author_social.map((data) => (
                        <li key={data.url}>
                          <a href={data.url}>
                            <i className={data.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-12 mt_md--30 mt_sm--30">
			{postData.slice(1, 5).map((data) => (
				<div className="content-block post-medium post-medium-border" key={data.slug}>
          {data.featureImg ? 
					<div className="post-thumbnail">
					<Link href={`/post/${data.slug}`}>
					<a>
						<Image
						src={data.featureImg}
						alt={data.title}
						height={100}
						width={100}
						priority={true}
						/>
					</a>
					</Link>
				</div>
        : ""}
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
					<h4 className="title">
						<Link href={`/post/${data.slug}`}>
						<a>{data.title}</a>
						</Link>
					</h4>
				</div>
				</div>
			))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionEight;
