import { getAllPosts } from '../../lib/api';
import HeaderThree from "../common/elements/header/HeaderThree";
import HeadTitle from "../common/elements/head/HeadTitle";
import { slugify, SortingByDate } from "../common/utils";
import PostSectionNine from '../common/components/post/PostSectionNine';
import CategoryListSlide from '../common/components/category/CategoryListSlide';
import PostSectionFour from '../common/components/post/PostSectionFour';
import PostSectionTen from '../common/components/post/PostSectionTen';
import PostSectionEleven from '../common/components/post/PostSectionEleven';
import FooterTwo from "../common/elements/footer/FooterTwo";

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
    'author_social',
  ])

  SortingByDate(allPosts)
  return {
    props: { allPosts }
  }
}