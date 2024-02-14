import markdownToHtml from '../../../lib/markdownToHtml';
import { getPostBySlug, getAllPosts } from '../../../lib/api';
import HeadTitle from '../../common/elements/head/HeadTitle';
import HeaderOne from '../../common/elements/header/HeaderOne';
import FooterOne from '../../common/elements/footer/FooterOne';
import PostFormatStandard from '../../common/components/post/format/PostFormatStandard';
import InstagramOne from '../../common/components/instagram/InstagramOne';
import PostFormatVideo from '../../common/components/post/format/PostFormatVideo';
import PostFormatGallery from '../../common/components/post/format/PostFormatGallery';
import PostFormatAudio from '../../common/components/post/format/PostFormatAudio';
import PostFormatQuote from '../../common/components/post/format/PostFormatQuote';

const PostDetails = ({ post, allPosts }) => {
	
	const PostFormatHandler = () => {
		if (post.postFormat === 'video') {
			return <PostFormatVideo postData={post} allData={allPosts}/>
		} else if (post.postFormat === 'gallery') {
			return <PostFormatGallery postData={post} allData={allPosts}/>
		}  else if (post.postFormat === 'audio') {
			return <PostFormatAudio postData={post} allData={allPosts}/>
		} else if (post.postFormat === 'quote') {
			return <PostFormatQuote postData={post} allData={allPosts}/>
		} else {
			return <PostFormatStandard postData={post} allData={allPosts}/>
		}
	}

	
	
	return (
		<>
			<HeaderOne postData={allPosts} pClass="header-light header-sticky header-with-shadow"/>
			<HeadTitle pageTitle={post.title} />
			<PostFormatHandler />
			<InstagramOne parentClass="bg-color-extra03"/>
			<FooterOne />
		</>
	);
}

export default PostDetails;

export async function getStaticProps({ params }) {

	const post = getPostBySlug(params.slug, [
		'title',
		'featureImg',
		'postFormat',
		'gallery',
		'videoLink',
		'audio',
		'date',
		'slug',
		'cate',
		'author_name',
		'author_img',
		'author_designation',
		'author_bio',
		'author_social',
		'post_views',
		'content',
		'tags'
	])
	const content = await markdownToHtml(post.content || '')

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
		props: {
			post: {
				...post,
				content,
			},
			allPosts
		},
	}
}


export async function getStaticPaths() {
	const posts = getAllPosts(['slug'])
	
	const paths = posts.map(post => ({
		params: {
			slug: post.slug
		}
	}))
	return {
		paths,
		fallback: false,
	}
}
