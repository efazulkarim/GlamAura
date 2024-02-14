import { getAllPosts } from '../../../lib/api';
import InstagramOne from '../../common/components/instagram/InstagramOne';
import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';
import BreadcrumbOne from '../../common/elements/breadcrumb/breadcrumbOne';
import FooterOne from '../../common/elements/footer/FooterOne';
import HeadTitle from "../../common/elements/head/HeadTitle";
import HeaderOne from '../../common/elements/header/HeaderOne';
import SidebarOne from "../../common/components/sidebar/SidebarOne";
import { slugify } from '../../common/utils';


const PostCategory = ({ postData, allPosts }) => {
	
	return (
		<>
		<HeadTitle pageTitle="Category Archive"/>
		<HeaderOne postData={allPosts} />
		<BreadcrumbOne title={postData[0].cate} />
		<div className="axil-post-list-area axil-section-gap bg-color-white">
			<div className="container">
				<div className="row">
				<div className="col-lg-8 col-xl-8">
					<PostLayoutTwo dataPost={postData} show="5"/>
				</div>
				<div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
					<SidebarOne dataPost={allPosts}/>
				</div>
				</div>
			</div>
		</div>
		<InstagramOne parentClass="bg-color-grey" />
		<FooterOne />

		</>
	);
}

export default PostCategory;


export async function getStaticProps({ params }) {

	const postParams = params.slug;

	const allPosts = getAllPosts([
		'slug',
		'cate',
		'cate_img',
		'title',
		'featureImg',
		'date',
		'post_views',
		'read_time',
		'author_name',
		'author_social'
	]);
	
	const getCategoryData = allPosts.filter(post => slugify(post.cate) === postParams);
	const postData = getCategoryData;
	
	return {
		props: {
			postData,
			allPosts
		}
	}
}


export async function getStaticPaths() {
	const posts = getAllPosts(['cate']);

	const paths = posts.map(post => ({
		params: {
			slug: slugify(post.cate)
		}
	}))

	return {
		paths,
		fallback: false,
	}
}
