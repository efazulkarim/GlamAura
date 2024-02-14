import InstagramOne from "../common/components/instagram/InstagramOne";
import FooterThree from "../common/elements/footer/FooterThree";
import { getAllPosts } from '../../lib/api';
import HeaderThree from "../common/elements/header/HeaderThree";
import HeadTitle from "../common/elements/head/HeadTitle";
import { slugify, SortingByDate } from "../common/utils";
import PostSectionNine from '../common/components/post/PostSectionNine';
import CategoryListSlide from '../common/components/category/CategoryListSlide';
import PostSectionThree from '../common/components/post/PostSectionThree';
import PostSectionFour from '../common/components/post/PostSectionFour';
import PostSectionTen from '../common/components/post/PostSectionTen';
import PostSectionEleven from '../common/components/post/PostSectionEleven';

const TechBlog = ({allPosts}) => {

  const techPost = allPosts.filter(post => slugify(post.cate) === "technology" || slugify(post.cate) === "leadership");
  const videoPost = allPosts.filter(post => post.postFormat === "video");
  
    return ( 
        <>
        <HeadTitle pageTitle="Tech Blog"/>
        <HeaderThree postData={allPosts}/>
        <PostSectionNine postData={techPost}/>
        <CategoryListSlide cateData={allPosts} />
        <PostSectionTen postData={allPosts} />
        <PostSectionThree postData={videoPost} heading="Featured Video"/>
        <PostSectionFour postData={techPost} adBanner={true}/>
        <PostSectionEleven postData={allPosts}/>
        <InstagramOne parentClass="bg-color-grey"/>
        <FooterThree />
        </>
     );
}
 
export default TechBlog;  


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