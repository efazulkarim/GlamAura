import dynamic from 'next/dynamic';
import { getAllPosts } from '../../lib/api';

// Dynamic imports
const InstagramOne = dynamic(() => import("../common/components/instagram/InstagramOne"));
import BreadcrumbTwo from "../common/elements/breadcrumb/breadcrumbTwo";
const FooterThree = dynamic(() => import("../common/elements/footer/FooterThree"));
const HeaderOne = dynamic(() => import("../common/elements/header/HeaderOne"));
const WidgetCategory = dynamic(() => import("../common/components/sidebar/WidgetCategory"));
const WidgetSearch = dynamic(() => import("../common/components/sidebar/WidgetSearch"));
const WidgetPostList = dynamic(() => import("../common/components/sidebar/WidgetPostList"));
const WidgetSocialShare = dynamic(() => import("../common/components/sidebar/WidgetSocialShare"));
const FormOne = dynamic(() => import("../common/components/form/FormOne"));
const HeadTitle = dynamic(() => import("../common/elements/head/HeadTitle"));


const ContactUs = ({ allPosts }) => {
    return (
        <>
            <HeadTitle pageTitle="Contact Us" />
            <HeaderOne postData={allPosts} pClass="header-light header-sticky header-with-shadow" />
            <BreadcrumbTwo
                title="Contact Us"
                paragraph="Wherever &amp; whenever you need us. We are here for you – contact us for all your support needs.<br /> be it technical, general queries or information support."
                bgImae="url('images/bg/bg-image-3.webp')"
            />
            <div className="axil-post-list-area axil-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-8">
                            {/* Start About Area  */}
                            <div className="axil-about-us">
                                <div className="inner">
                                    <h2>Say Hello! </h2>
                                    <p>Donec cursus dolor vitae congue consectetur. Morbi mattis viverra felis. Etiam dapibus id turpis at sagittis. Cras mollis mi vel ante ultricies, id ullamcorper mi pulvinar. Proin bibendum ornare risus, lacinia cursus quam condimentum id. Curabitur auctor massa eget porttitor molestie. Aliquam imperdiet dolor nec metus pulvinar sollicitudin. </p>
                                    <p><strong>Aliquam iaculis at odio ut tempus</strong>. Suspendisse blandit luctus dui, a consequat mauris mollis id. Sed in ante at tortor malesuada imperdiet. Vestibulum sed gravida nibh. Nulla suscipit congue lorem, id tempor ipsum molestie sit amet. Nulla ultricies vitae erat in tincidunt. Maecenas tempus quam et ipsum elementum, a efficitur lectus tincidunt. Praesent diam elit, tincidunt ac tempus vulputate, aliquet viverra mauris. Etiam eu nunc efficitur, sagittis est ut, fringilla neque. Ut interdum eget lorem eget congue. Ut nec arcu placerat, mattis urna vel, consequat diam. Sed in leo in dolor suscipit molestie. </p>
                                    <p className="primary-color">Email: <a href="mailto:mepress@gmail.com">mepress@gmail.com</a></p>
                                </div>
                                <FormOne />
                            </div>
                            {/* End About Area  */}
                        </div>
                        <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
                            <div className="sidebar-inner">
                                <WidgetCategory catData={allPosts} />
                                <WidgetSearch />
                                <WidgetPostList postData={allPosts} />
                                <WidgetSocialShare />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InstagramOne parentClass="bg-color-grey" />
            <FooterThree />
        </>
    );
}

export default ContactUs;


export async function getStaticProps() {
    const allPosts = getAllPosts([
        'id',
        'title',
        'featureImg',
        'featured',
        'date',
        'slug',
        'cate',
        'cate_img',
        'author_img',
        'author_name',
        'post_views',
    ])

    return {
        props: { allPosts }
    }
}

