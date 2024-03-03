
import HeadTitle from '../common/elements/head/HeadTitle';
import HeaderOne from '../common/elements/header/HeaderOne';
import { getAllPosts } from '../../lib/api';
import PostSectionOne from '../common/components/post/PostSectionOne';
import PostSectionTwo from '../common/components/post/PostSectionTwo';
import PostSectionThree from '../common/components/post/PostSectionThree';
import CategoryList from '../common/components/category/CategoryList';
import PostSectionFour from '../common/components/post/PostSectionFour';
import PostSectionFive from '../common/components/post/PostSectionFive';

import SliderOne from '../common/components/slider/SliderOne';
import FooterTwo from './../common/elements/footer/FooterTwo';


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



