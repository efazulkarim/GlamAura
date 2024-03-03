import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { getAllPosts } from '../../lib/api';
import { slugify } from '../common/utils';

// Static imports for essential components
import HeaderTwo from "../common/elements/header/HeaderTwo";
import HeadTitle from "../common/elements/head/HeadTitle";
import FooterThree from "../common/elements/footer/FooterThree";

// Dynamic imports for non-essential components
const InstagramOne = dynamic(() => import("../common/components/instagram/InstagramOne"));
const SocialOne = dynamic(() => import("../common/components/social/SocialOne"));
const PostSectionFour = dynamic(() => import("../common/components/post/PostSectionFour"));
const PostSectionThree = dynamic(() => import("../common/components/post/PostSectionThree"));
const CategoryListSlide = dynamic(() => import("../common/components/category/CategoryListSlide"));
const PostSectionSeven = dynamic(() => import("../common/components/post/PostSectionSeven"));
const PostSectionTwo = dynamic(() => import("../common/components/post/PostSectionTwo"));
const PostSectionEight = dynamic(() => import("../common/components/post/PostSectionEight"));

// ...rest of your component and page logic


const ApparelBlog = ({ allPosts }) => {
  const router = useRouter();
  const PageSlug = router.pathname.replace("/", "");

  const seoPost = allPosts.filter(post => slugify(post.pCate) === PageSlug);
  const videoPost = allPosts.filter(post => post.postFormat === "video");


  return (
    <>
      <HeadTitle pageTitle="GlamAura - Apparel " />
      <HeaderTwo postData={allPosts} />
      <PostSectionEight postData={seoPost} />
      <PostSectionTwo
        postData={allPosts}
        /* adBanner={true} */
        headingTitle="What's new at GlamAura"
      />
      <PostSectionSeven postData={allPosts} />
      <PostSectionThree postData={videoPost} heading="Featured Video" />
      <CategoryListSlide cateData={allPosts} />
      <PostSectionFour postData={seoPost} /* adBanner={true} */ />
      <SocialOne />
      <InstagramOne parentClass="bg-color-grey" />
      <FooterThree />
    </>
  );
}

export default ApparelBlog;


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