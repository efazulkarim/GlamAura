import Link from "next/link";
import { slugify } from "../../../../utils";

const PostTagShare = ({postTags}) => {
  return (
    <>
      <div className="tagcloud">
        {postTags.tags.map((data, index) => (
          <Link href={`/tag/${slugify(data)}`} key={index}>
            <a>{data}</a>
          </Link>
        ))}
      </div>
      <div className="social-share-block">
        <div className="post-like">
          <link href="#" />
          <a>
            <i className="fal fa-thumbs-up" />
            <span>2.2k Like</span>
          </a>
        </div>
        <ul className="social-icon icon-rounded-transparent md-size">
          <li>
            <a href="https://facebook.com/">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PostTagShare;
