import { useRouter } from 'next/router'
import { getAllPosts } from '../../../lib/api';
import InstagramOne from '../../common/components/instagram/InstagramOne';
import FooterOne from '../../common/elements/footer/FooterOne';
import HeaderOne from '../../common/elements/header/HeaderOne';
import PostLayoutTwo from '../../common/components/post/layout/PostLayoutTwo';
import SidebarOne from "../../common/components/sidebar/SidebarOne";
import BreadcrumbOne from '../../common/elements/breadcrumb/breadcrumbOne';
import { slugify } from '../../common/utils';


const TagsArchive = ({ tagsData, allPosts }) => {

    const router = useRouter()

    const BreadCrumbTitle = (router.query.slug);

    return (
        <>
            <HeaderOne postData={allPosts}/>
            <BreadcrumbOne title={BreadCrumbTitle.replace('-', ' ')} />
            <div className="axil-post-list-area axil-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-xl-8">
                        <PostLayoutTwo dataPost={tagsData} show="5"/>
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

export default TagsArchive;


export async function getStaticProps({params}) {
    
    const pageParams = params.slug;

    const allPosts = getAllPosts([
        'slug',
		'cate',
		'cate_img',
		'title',
		'featureImg',
		'date',
		'read_time',
		'author_name',
		'author_social',
        'tags'
    ]);

    let tagsData = [];

    for (let i = 0; i < allPosts.length; i++) {
        const element = allPosts[i];
        
        element.tags.map((data) => {
            var tagsList = (slugify(data));
            if (tagsList.includes(pageParams)) {
                tagsData.push(element);
            }
        })    
    }

    return {
        props: {
            tagsData,
            allPosts
        }
    }

  }

  export async function getStaticPaths() {
    const postData = getAllPosts(['tags']);

    let tags = [];
    
    for (let i = 0; i < postData.length; i++) {
        let singleData = postData[i];

        singleData.tags.map((data) => {
            tags.push(slugify(data));
        }) 
    }

    const uniqTags = [...new Set(tags)];

    const paths = uniqTags.map(data => ({
        params: {
            slug: data
        }
    }))

    return {
      paths,
      fallback: false,
    }
  }


