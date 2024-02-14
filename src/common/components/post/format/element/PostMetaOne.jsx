import Image from 'next/image';
import Link from "next/link";
import {slugify} from '../../../../utils';

const PostMetaOne = ({metaData}) => {

    return (
      <div className="banner banner-single-post post-formate post-standard alignwide">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Single Slide  */}
              <div className="content-block">
                {/* Start Post Thumbnail  */}
                <div className="post-thumbnail">
                <Image
                    src={metaData.featureImg}
                    alt={metaData.title}
                    height={720}
                    width={1440}
                  />
                </div>
                {/* End Post Thumbnail  */}
                {/* Start Post Content  */}
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
                  <h1 className="title">{metaData.title}</h1>
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
                          <li>{metaData.date}</li>
                          <li>{metaData.post_views}</li>
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
                {/* End Post Content  */}
              </div>
              {/* End Single Slide  */}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default PostMetaOne;