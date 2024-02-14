import Image from 'next/image';
import Link from 'next/link';
import FooterOne from "../common/elements/footer/FooterOne";
import HeaderOne from "../common/elements/header/HeaderOne";
import { getAllPosts } from '../../lib/api';
import HeadTitle from "../common/elements/head/HeadTitle";

const Error404 = ({allPosts}) => {
    return (
        <>
            <HeadTitle pageTitle="404 Not Found" />
            <HeaderOne postData={allPosts} pClass="header-light header-sticky header-with-shadow" />
            <div className="error-area bg-color-grey" style={{backgroundImage: "url('/images/bg/bg-image-4.webp')"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <Image
                                    width={322}
                                    height={131}
                                    src="/images/others/404.webp"
                                    alt="Error Images"
                                />
                                <h1 className="title">Page not found!</h1>
                                <p>Sorry, but the page you were looking for could not be found.</p>
                                <div className="back-totop-button cerchio d-inline-block">
                                <Link href="/">
                                    <a className="axil-button button-rounded hover-flip-item-wrapper">
                                        <span className="hover-flip-item">
                                            <span data-text="Back to Homepage">Back to Homepage</span>
                                        </span>
                                    </a>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
        </>
    );
}

export default Error404;


export async function getStaticProps() {
    const allPosts = getAllPosts([
      'title',
      'featureImg',
      'slug',
      'cate',
    ])
  
    return {
      props: { allPosts }
    }
  }