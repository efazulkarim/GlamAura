import Link from "next/link";
import Image from 'next/image';

const PostAuthor = ({dataAuthor}) => {
  return (
    <div className="about-author">
      <div className="media">
        <div className="thumbnail">
            <Link href="#">
                <a>
                    <Image
                    src={dataAuthor.author_img}
                    alt={dataAuthor.author_name}
                    height={105}
                    width={105}
                  />
                </a>
            </Link>

        </div>
        <div className="media-body">
          <div className="author-info">
            <h5 className="title">
            <Link href="#">
                <a className="hover-flip-item-wrapper">
                    <span className="hover-flip-item">
                    <span data-text={dataAuthor.author_name}>{dataAuthor.author_name}</span>
                    </span>
                </a>
            </Link>
            </h5>
            <span className="b3 subtitle">{dataAuthor.author_designation}</span>
          </div>
          <div className="content">
            <p className="b1 description">
                {dataAuthor.author_bio}
            </p>
            <ul className="social-share-transparent size-md">
            { dataAuthor.author_social.map((social) => (
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

export default PostAuthor;
