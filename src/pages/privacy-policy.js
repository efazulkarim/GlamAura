import FooterThree from "../common/elements/footer/FooterThree";
import HeaderOne from "../common/elements/header/HeaderOne";
import { getFileContentBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import HeadTitle from "../common/elements/head/HeadTitle";

const PrivacyPolicy = ({privacyData, allPosts}) => {
    
    return ( 
        <>
        <HeadTitle pageTitle="Privacy Policy"/>
        <HeaderOne postData={allPosts} pClass="header-light header-sticky header-with-shadow"/>
        <div className="axil-privacy-area axil-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="content">
                    <div className="inner">
                        <div className="section-title">
                        <h4 className="title">{privacyData.data.sTitle}</h4>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: privacyData.content}} />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <FooterThree bgColor="bg-color-black" darkLogo="/images/logo/logo-white2.webp"/>
        </>
    );
}
 
export default PrivacyPolicy;


export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'featureImg',
        'slug',
        'cate',
    ])
    const privacyData = getFileContentBySlug("PrivacyPolicy", "src/data/privacy");

    const content = await markdownToHtml(privacyData.content || "")

    return {
        props: {
            privacyData: {
                ...privacyData,
                content
            },
            allPosts
        }
    }
}
