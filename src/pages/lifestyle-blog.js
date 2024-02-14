import { useRouter } from 'next/router'
import { getAllPosts } from '../../lib/api';
import { slugify, SortingByDate } from "../common/utils";
import InstagramOne from "../common/components/instagram/InstagramOne";
import PostSectionFour from "../common/components/post/PostSectionFour";
import SocialOne from "../common/components/social/SocialOne";
import FooterThree from "../common/elements/footer/FooterThree";
import HeadTitle from "../common/elements/head/HeadTitle";
import HeaderFour from "../common/elements/header/HeaderFour";
import CategoryListSlide from '../common/components/category/CategoryListSlide';
import PostSectionThree from '../common/components/post/PostSectionThree';
import PostSectionSeven from '../common/components/post/PostSectionSeven';
import PostSectionTen from '../common/components/post/PostSectionTen';
import PostSectionTwelve from '../common/components/post/PostSectionTwelve';

const LifestyleBlog = ({allPosts}) => {

    const router = useRouter();
    const PageSlug = router.pathname.replace("/", "");
  
    const lifestylePost = allPosts.filter(post => slugify(post.pCate) === PageSlug);
    const videoPost = allPosts.filter(post => post.postFormat === "video");
    return ( 
        <>
        <HeadTitle pageTitle="Lifestyle Blog" />
        <HeaderFour postData={allPosts} />
        <PostSectionTwelve postData={lifestylePost} />
        <PostSectionTen postData={allPosts} />
        <PostSectionSeven postData={allPosts} />
        <PostSectionThree postData={videoPost} heading="Featured Video"/>
        <CategoryListSlide cateData={allPosts} />
        <PostSectionFour postData={lifestylePost}/>
        <SocialOne />
        <InstagramOne parentClass="bg-color-grey" />
        <FooterThree />
        </>
    );
}
 
export default LifestyleBlog;


export async function getStaticProps() {
    const allPosts = getAllPosts([
      'id',
      'title',
      'featureImg',
      'postFormat',
      'featured',
      'date',
      'slug',
      'pCate',
      'cate',
      'cate_img',
      'author_img',
      'author_name',
      'post_views',
      'read_time',
      'author_social',
    ])
    SortingByDate(allPosts);
    return {
      props: { allPosts }
    }
  }