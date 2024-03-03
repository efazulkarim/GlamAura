import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { getAllPosts } from '../../lib/api';
import { slugify, SortingByDate } from "../common/utils";

const HeadTitle = dynamic(() => import("../common/elements/head/HeadTitle"));
const HeaderFour = dynamic(() => import("../common/elements/header/HeaderFour"));
const PostSectionFour = dynamic(() => import("../common/components/post/PostSectionFour"));
const SocialOne = dynamic(() => import("../common/components/social/SocialOne"));
const FooterThree = dynamic(() => import("../common/elements/footer/FooterThree"));
const CategoryListSlide = dynamic(() => import('../common/components/category/CategoryListSlide'));
const PostSectionThree = dynamic(() => import('../common/components/post/PostSectionThree'));
const PostSectionSeven = dynamic(() => import('../common/components/post/PostSectionSeven'));
const PostSectionTen = dynamic(() => import('../common/components/post/PostSectionTen'));
const PostSectionTwelve = dynamic(() => import('../common/components/post/PostSectionTwelve'));


const PetsBlog = ({ allPosts }) => {

  const router = useRouter();
  const PageSlug = router.pathname.replace("/", "");

  const lifestylePost = allPosts.filter(post => slugify(post.pCate) === PageSlug);
  const videoPost = allPosts.filter(post => post.postFormat === "video");
  return (
    <>
      <HeadTitle pageTitle="GlaumAura - Pets Blog" />
      <HeaderFour postData={allPosts} />
      <PostSectionTwelve postData={lifestylePost} />
      <PostSectionTen postData={allPosts} />
      <PostSectionSeven postData={allPosts} />
      <PostSectionThree postData={videoPost} heading="Featured Video" />
      <CategoryListSlide cateData={allPosts} />
      <PostSectionFour postData={lifestylePost} />
      <SocialOne />
      <FooterThree />
    </>
  );
}

export default PetsBlog;


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
  ])
  SortingByDate(allPosts);
  return {
    props: { allPosts }
  }
}