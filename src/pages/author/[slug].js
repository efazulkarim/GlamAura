import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from '../../../lib/api';
import InstagramOne from '../../common/components/instagram/InstagramOne';
import FooterOne from '../../common/elements/footer/FooterOne';
import HeaderOne from '../../common/elements/header/HeaderOne';
import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';
import SidebarOne from "../../common/components/sidebar/SidebarOne";
import { slugify } from '../../common/utils';
import HeadTitle from "../../common/elements/head/HeadTitle";


const AuthorArchive = ({ authorData, allPosts }) => {
  
    return (
        <>
        <HeadTitle pageTitle="Author Archive" />
            <HeaderOne postData={allPosts} />
            <div className="axil-author-area axil-author-banner bg-color-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-author">
                                <div className="media">
                                    <div className="thumbnail">
                                        <Link href="#">
                                            <a>
                                                <Image
                                                    src={authorData[0].author_img}
                                                    alt={authorData[0].author_name}
                                                    height={105}
                                                    width={105}
                                                    priority={true}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="media-body">
                                        <div className="author-info">
                                            <h1 className="title">{authorData[0].author_name}</h1>
                                            <span className="b3 subtitle">{authorData[0].author_designation}</span>
                                        </div>
                                        <div className="content">
                                            <p className="b1 description">{authorData[0].author_bio}</p>
                                            <ul className="social-share-transparent size-md">
                                                {authorData[0].author_social.map((social) => (
                                                    <li key={social.url}><a href={social.url}><i className={social.icon} /></a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="axil-post-list-area axil-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title">
                                <h2 className="title mb--40">Articles By This Author</h2>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-8">
                            <PostLayoutTwo dataPost={authorData} show="5"/>
                        </div>
                        <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
                            <SidebarOne dataPost={allPosts}/>
                        </div>
                    </div>
                </div>
            </div>
            <InstagramOne parentClass="bg-color-grey" />
            <FooterOne />
        </>
    );
}

export default AuthorArchive;


export async function getStaticProps({ params }) {

    const postParams = params.slug;

    const allPosts = getAllPosts([
        'slug',
        'cate',
        'cate_img',
        'title',
        'featureImg',
        'date',
        'read_time',
        'author_name',
        'author_img',
        'author_designation',
        'author_bio',
        'author_social'
    ]);

    const getCategoryData = allPosts.filter(post => slugify(post.author_name) === postParams);
    const authorData = getCategoryData;

    return {
        props: {
            authorData,
            allPosts
        }
    }
}


export async function getStaticPaths() {
    const posts = getAllPosts(['author_name']);

    const paths = posts.map(post => ({
        params: {
            slug: slugify(post.author_name)
        }
    }))

    return {
        paths,
        fallback: false,
    }
}