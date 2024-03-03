
import dynamic from 'next/dynamic';
import HeadTitle from '../common/elements/head/HeadTitle';
import { getAllPosts } from '../../lib/api';
import HeaderOne from "../common/elements/header/HeaderOne";
const PostSectionOne = dynamic(() => import('../common/components/post/PostSectionOne'));
const PostSectionTwo = dynamic(() => import('../common/components/post/PostSectionTwo'));
const PostSectionThree = dynamic(() => import('../common/components/post/PostSectionThree'));
const CategoryList = dynamic(() => import('../common/components/category/CategoryList'));
const PostSectionFour = dynamic(() => import('../common/components/post/PostSectionFour'));
const PostSectionFive = dynamic(() => import('../common/components/post/PostSectionFive'));
const SliderOne = dynamic(() => import('../common/components/slider/SliderOne'));
import FooterTwo from "../common/elements/footer/FooterTwo";


const HomeDefault = ({ allPosts }) => {

  const videoPost = allPosts.filter(post => post.postFormat === "video");

  return (
    <>
      <HeadTitle pageTitle="GlamAura" />
      <HeaderOne postData={allPosts} />
      <SliderOne postData={allPosts} />
      <PostSectionOne postData={allPosts} />
      <PostSectionTwo postData={allPosts} /* adBanner={true} */ />
      <PostSectionFive postData={allPosts} />
      <CategoryList cateData={allPosts} />
      <PostSectionFour postData={allPosts} /* adBanner={true}  */ />
      <PostSectionThree postData={videoPost} heading="Featured Video" />
      <FooterTwo />

    </>
  );
}

export default HomeDefault;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'id',
    'title',
    'featureImg',
    'postFormat',
    'featured',
    'slidePost',
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



