import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../../utils";
const PostLayoutTwo = ({ dataPost, postStart, show, bgColor }) => { 
  return (
    <>
      {dataPost.slice(postStart || 0, show).map((data) => (
        <div
          className={`content-block post-list-view axil-control mt--30 ${bgColor || ""} ${data.sticky === true ? "sticky": ""} ${data.postFormat === 'quote' ? "format-quote" : ""}`}
          key={data.slug}
        >
			{data.featureImg ? 
			<div className="post-thumbnail">
				<Link href={`/post/${data.slug}`}>
				<a>
					<Image
					src={data.featureImg}
					alt={data.title}
					height={250}
					width={295}
					priority={true}
					/>
				</a>
				</Link>
				{data.playBtn === true ? 
				<Link href={`/post/${data.slug}`}>
					<a className="video-popup size-medium position-top-center icon-color-secondary"><span className="play-icon"></span></a>
				</Link>
				: ""}
			</div>
			: "" }

          <div className="post-content">
            <div className="post-cat">
              <div className="post-cat-list">
                <Link href={`/category/${slugify(data.cate)}`}>
                  <a className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                      <span data-text={data.cate}>{data.cate}</span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
			{data.postFormat === 'quote' ? 
			<blockquote>
				<h4 className="title">
				<Link href={`/post/${data.slug}`}>
					<a>{data.title}</a>
				</Link>
				</h4>
			</blockquote> : 
			<h4 className="title">
              <Link href={`/post/${data.slug}`}>
                <a>{data.title}</a>
              </Link>
            </h4>}
            <div className="post-meta-wrapper">
              <div className="post-meta">
                <div className="content">
                  <h6 className="post-author-name">
                    <Link href={`/author/${slugify(data.author_name)}`}>
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text={data.author_name}>
                            {data.author_name}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </h6>
                  <ul className="post-meta-list">
                    <li>{data.date}</li>
                    <li>{data.read_time}</li>
                  </ul>
                </div>
              </div>
              <ul className="social-share-transparent justify-content-end">
                {data.author_social.map((social) => (
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
      ))}
    </>
  );
};

export default PostLayoutTwo;
