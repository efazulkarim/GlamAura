import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../utils";

const PostMetaThree = ({ metaData }) => {
  return (
    <div className="banner banner-single-post post-formate post-quote axil-section-gapBottom">
      <div className="content-block">
        <div className="post-content">
          <div className="post-cat">
            <div className="post-cat-list">
              <Link href={`/category/${slugify(metaData.cate)}`}>
                    <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                        	<span data-text={metaData.cate}>{metaData.cate}</span>
						</span>
                    </a>
                </Link>
            </div>
          </div>
          <blockquote>
            <h1 className="title">{metaData.title}</h1>
            <div className="author mt--20">
              <div className="info">
                <h6>{metaData.author_name}</h6>
              </div>
            </div>
          </blockquote>
          {/* Post Meta  */}
          <div className="post-meta-wrapper">
            <div className="post-meta">
              <div className="post-author-avatar border-rounded">
			  	<Image
					src={metaData.author_img}
					alt={metaData.author_name}
					height={50}
					width={50}
				/>
              </div>
              <div className="content">
                <h6 className="post-author-name">
					<Link href={`/author/${slugify(metaData.author_name)}`}>
						<a
							className="hover-flip-item-wrapper">
							<span className="hover-flip-item">
							<span data-text={metaData.author_name}>{metaData.author_name}</span>
							</span>
						</a>
					</Link>
                </h6>
                <ul className="post-meta-list">
                  <li className="post-meta-date">{metaData.date}</li>
                  <li className="post-meta-reading-time">{metaData.post_views}</li>
                </ul>
              </div>
            </div>
            <ul className="social-share-transparent justify-content-end">
				{ metaData.author_social.map((social) => (
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
  );
};

export default PostMetaThree;
