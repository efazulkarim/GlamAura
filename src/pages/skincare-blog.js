import { getAllPosts } from '../../lib/api';
import { slugify, SortingByDate } from "../common/utils";
import dynamic from 'next/dynamic';

// Statically import essential components
import HeadTitle from "../common/elements/head/HeadTitle";
import HeaderThree from "../common/elements/header/HeaderThree";
import FooterTwo from "../common/elements/footer/FooterTwo";

// Dynamically import non-essential components
const PostSectionNine = dynamic(() => import('../common/components/post/PostSectionNine'), { ssr: false });
const CategoryListSlide = dynamic(() => import('../common/components/category/CategoryListSlide'), { ssr: false });
const PostSectionFour = dynamic(() => import('../common/components/post/PostSectionFour'), { ssr: false });
const PostSectionTen = dynamic(() => import('../common/components/post/PostSectionTen'), { ssr: false });
const PostSectionEleven = dynamic(() => import('../common/components/post/PostSectionEleven'), { ssr: false });

// ...rest of your component and getStaticProps


const Skincare = ({ allPosts }) => {

  const skincarePost = allPosts.filter(post => slugify(post.cate) === "skincare" || slugify(post.cate) === "skincare");
  /* const videoPost = allPosts.filter(post => post.postFormat === "video"); */

  return (
    <>
      <HeadTitle pageTitle="GlamAura - Skincare" />
      <HeaderThree postData={allPosts} />
      <PostSectionNine postData={skincarePost} />
      <CategoryListSlide cateData={allPosts} />
      <PostSectionTen postData={allPosts} />
      <PostSectionFour postData={skincarePost} /* adBanner={true}  */ />
      <PostSectionEleven postData={allPosts} />
      <FooterTwo />
    </>
  );
}

export default Skincare;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'postFormat',
    'title',
    'featureImg',
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

  SortingByDate(allPosts)
  return {
    props: { allPosts }
  }
}