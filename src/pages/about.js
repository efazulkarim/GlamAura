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

const AboutUs = ({allPosts}) => {
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
                            {/* Start About Area  */}
                            <div className="axil-about-us">
                                <div className="inner">
                                    <h3>The Professional Publishing Platform</h3>
                                    <p>Aenean consectetur massa quis sem volutpat, a condimentum tortor pretium. Cras id ligula consequat, sagittis nulla at, sollicitudin lorem. Orci varius natoque penatibus et magnis dis parturient montes.</p>
                                    <p> Cras id ligula consequat, sagittis nulla at, sollicitudin lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eleifend, dolor vel condimentum imperdiet.</p>
                                    <p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that’s filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.</p>
                                    <h3>Our Growing News Network</h3>
                                    <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that madness of yours mock us?)</p>
                                    <p>Most text editors like MS Word or Lotus Notes generate random lorem text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence don’t necessarily match the original, which is intended to add variety. </p>
                                    <h3>The Professional Publishing Platform</h3>
                                    <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens: Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet? (How long, O Catiline, will you abuse our patience? And for how long will that madness of yours mock us?)</p>
                                    <p>Most text editors like MS Word or Lotus Notes generate random lorem text when needed, either as pre-installed module or plug-in to be added. Word selection or sequence don’t necessarily match the original, which is intended to add variety.</p>
                                </div>
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