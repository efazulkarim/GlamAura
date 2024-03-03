import InstagramOne from "../common/components/instagram/InstagramOne";
import BreadcrumbTwo from "../common/elements/breadcrumb/breadcrumbTwo";
import FooterThree from "../common/elements/footer/FooterThree";
import HeaderOne from "../common/elements/header/HeaderOne";
import { getAllPosts } from '../../lib/api';
import WidgetCategory from "../common/components/sidebar/WidgetCategory";
import WidgetSearch from "../common/components/sidebar/WidgetSearch";
import WidgetPostList from "../common/components/sidebar/WidgetPostList";
import WidgetSocialShare from "../common/components/sidebar/WidgetSocialShare";
import HeadTitle from "../common/elements/head/HeadTitle";

const AboutUs = ({ allPosts }) => {
    return (
        <>
            <HeadTitle pageTitle="About Us" />
            <HeaderOne postData={allPosts} />
            <BreadcrumbTwo
                title="About Us"
                paragraph="Wherever &amp; whenever you need us. We are here for you – contact us for all your support needs. <br />
            be it technical, general queries or information support."
                bgImae="url('images/bg/bg-image-1.webp')"
            />
            <div className="axil-post-list-area axil-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-8">

                            <div className="axil-about-us">
                                <div className="inner">
                                    <h3>Welcome to GlamAura - Your Ultimate Guide to Beauty and Fashion</h3>
                                    <p>Welcome to <strong>GlamAura</strong>, the premier online destination where elegance meets the everyday woman. We are dedicated to providing you with the latest insights into women&quot;s skincare, fashion trends, comprehensive shopping guides, and beauty and makeup tutorials. Our mission is to empower women by offering expert advice and tips to enhance your natural beauty and showcase your personal style.</p>
                                    <p>At <strong>GlamAura</strong>, we believe that beauty is a form of self-expression and should be accessible to everyone. Whether you&quot;re looking for the perfect skincare routine to suit your skin type, the latest fashion trends to update your wardrobe, or makeup tips to highlight your features, our team of experienced writers and beauty enthusiasts has you covered.</p>
                                    <p>Our content spans a wide range of categories, including detailed beauty and makeup guides, innovative gift ideas, and practical pet care tips for the animal lovers among us. We strive to bring you the most reliable and up-to-date information to make informed choices about the products and practices that fit your lifestyle and preferences.</p>
                                    <h3>Empowering Your Beauty Journey</h3>
                                    <p>With <strong>GlamAura</strong>, embark on a journey to discover and embrace your unique beauty and style. Our comprehensive guides and reviews are crafted with care to ensure you have access to everything you need to feel confident and glamorous, no matter the occasion. From everyday beauty hacks to sophisticated fashion advice, our platform is designed to inspire and assist you in curating a lifestyle filled with elegance and charm.</p>
                                    <p>Our growing community is at the heart of everything we do. We encourage our readers to share their experiences, tips, and questions to foster a supportive and inclusive environment where everyone can learn and grow. Join us at <strong>GlamAura</strong> and be part of a network that celebrates diversity, creativity, and the timeless beauty of being you.</p>
                                    <h3>Join Our Glamorous Journey</h3>
                                    <p>Thank you for choosing <strong>GlamAura</strong> as your go-to source for beauty, fashion, and lifestyle inspiration. We are constantly updating our content to bring you the freshest ideas, trends, and products that the beauty and fashion world has to offer. Stay tuned for more beauty secrets, fashion tips, and lifestyle guides that will help you live your most glamorous life.</p>
                                    <p>Explore <strong>GlamAura</strong> today and take the first step towards enhancing your natural beauty, discovering your personal style, and living your best life. Welcome to the GlamAura family, where beauty and elegance are always in style.</p>
                                </div>
                            </div>


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


            <FooterThree />
        </>
    );
}

export default AboutUs;

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