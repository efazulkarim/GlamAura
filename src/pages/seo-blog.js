import { useRouter } from 'next/router'
import InstagramOne from "../common/components/instagram/InstagramOne";
import SocialOne from "../common/components/social/SocialOne";
import FooterThree from "../common/elements/footer/FooterThree";
import HeaderTwo from "../common/elements/header/HeaderTwo";
import { getAllPosts } from '../../lib/api';
import PostSectionFour from "../common/components/post/PostSectionFour";
import PostSectionThree from "../common/components/post/PostSectionThree";
import CategoryListSlide from "../common/components/category/CategoryListSlide";
import PostSectionSeven from "../common/components/post/PostSectionSeven";
import PostSectionTwo from "../common/components/post/PostSectionTwo";
import PostSectionEight from "../common/components/post/PostSectionEight";
import HeadTitle from "../common/elements/head/HeadTitle";
import { slugify } from '../common/utils';

const SeoBlog = ({allPosts}) => {
  const router = useRouter();
  const PageSlug = router.pathname.replace("/", "");
  
  const seoPost = allPosts.filter(post => slugify(post.pCate) === PageSlug);
  const videoPost = allPosts.filter(post => post.postFormat === "video");


    return ( 
        <>
        <HeadTitle pageTitle="SEO Blog" />
			<HeaderTwo postData={allPosts}/>
			<PostSectionEight postData={seoPost} />
			<PostSectionTwo 
			postData={allPosts} 
			adBanner={true} 
			headingTitle="What's new at Bloger"
			/>
			<PostSectionSeven postData={allPosts} />
      <PostSectionThree postData={videoPost} heading="Featured Video"/>    
      <CategoryListSlide cateData={allPosts} />
      <PostSectionFour postData={seoPost} adBanner={true}/>
      <SocialOne />
      <InstagramOne parentClass="bg-color-grey"/>
			<FooterThree />
        </>
     );
}
 
export default SeoBlog;  


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
  
    return {
      props: { allPosts }
    }
  }