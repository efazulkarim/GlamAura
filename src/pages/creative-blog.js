import CategoryList from "../common/components/category/CategoryList";
import FooterTwo from "../common/elements/footer/FooterTwo";
import HeaderOne from "../common/elements/header/HeaderOne";
import { getAllPosts } from '../../lib/api';
import PostSectionTwo from "../common/components/post/PostSectionTwo";
import PostSectionThree from "../common/components/post/PostSectionThree";
import PostSectionFour from "../common/components/post/PostSectionFour";
import InstagramOne from "../common/components/instagram/InstagramOne";
import SliderTwo from "../common/components/slider/SliderTwo";
import HeadTitle from "../common/elements/head/HeadTitle";

const CreativeBlog = ({allPosts}) => {
    return ( 
        <>
        <HeadTitle pageTitle="Creative Blog" />
        <HeaderOne postData={allPosts} pClass="header-dark" darkLogo="/images/logo/logo-white.webp" lightLogo="/images/logo/logo-white2.webp" />
        <SliderTwo postData={allPosts} />
        <CategoryList cateData={allPosts}/>
        <PostSectionTwo postData={allPosts} />
        <PostSectionThree postData={allPosts} adBanner={true} bgColor="bg-color-grey" heading="Most Popular"/>
        <PostSectionFour postData={allPosts}/>
        <InstagramOne parentClass="bg-color-grey" />
        <FooterTwo />
        </>
    );
}
 
export default CreativeBlog;


export async function getStaticProps() {
    const allPosts = getAllPosts([
      'id',
      'title',
      'featureImg',
      'postFormat',
      'featured',
      'date',
      'slug',
      'cate',
      'cate_img',
      'author_img',
      'author_name',
      'post_views',
      'read_time',
      'author_social',
    ])
  
    return {
      props: { allPosts }
    }
  }