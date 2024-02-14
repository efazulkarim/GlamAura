import Link from "next/link";
import Image from "next/image";
import SocialData from "../../../data/social/SocialData.json";

const FooterTwo = () => {
  return (
    <div className="axil-footer-area axil-footer-style-1 footer-variation-three bg-color-black">
      {/* Start Footer Top Area  */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo">
                <Link href="/">
                    <a>
                    <Image
                        src="/images/logo/logo-white2.webp"
                        alt="Logo Images"
                        height={35}
                        width={134}
                    />
                    </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              {/* Start Post List  */}
              <div className="d-flex justify-content-start mt_sm--15 justify-content-md-end align-items-center flex-wrap">
                <h5 className="follow-title mb--0 mr--20">Follow Us</h5>
                <ul className="social-icon color-tertiary md-size justify-content-start">
                  <li>
                    <a href={SocialData.fb.url}>
                      <i className={SocialData.fb.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialData.instagram.url}>
                      <i className={SocialData.instagram.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialData.twitter.url}>
                      <i className={SocialData.twitter.icon} />
                    </a>
                  </li>
                  <li>
                    <a href={SocialData.linked.url}>
                      <i className={SocialData.linked.icon} />
                    </a>
                  </li>
                </ul>
              </div>
              {/* End Post List  */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Top Area  */}
      {/* Start Copyright Area  */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-12">
              <div className="copyright-left">
                <ul className="mainmenu justify-content-start">
                  <li>
                  <Link href="/about">
                    <a className="hover-flip-item-wrapper">
                      <span className="hover-flip-item">
                        <span data-text="Contact Us">Contact Us</span>
                      </span>
                    </a>
                    </Link>
                  </li>
                  <li>
                  <Link href="/privacy-policy">
                    <a className="hover-flip-item-wrapper">
                      <span className="hover-flip-item">
                        <span data-text="Privacy Policy">Privacy Policy</span>
                      </span>
                    </a>
                    </Link>
                  </li>
                  <li>
                  <Link href="#">
                    <a className="hover-flip-item-wrapper">
                      <span className="hover-flip-item">
                        <span data-text="AdChoices">AdChoices</span>
                      </span>
                    </a>
                    </Link>
                  </li>
                  <li>
                  <Link href="#">
                    <a className="hover-flip-item-wrapper">
                      <span className="hover-flip-item">
                        <span data-text="Advertise with Us">
                          Advertise with Us
                        </span>
                      </span>
                    </a>
                    </Link>
                  </li>
                  <li>
                  <Link href="#">
                    <a className="hover-flip-item-wrapper">
                      <span className="hover-flip-item">
                        <span data-text="Blogar Store">Blogar Store</span>
                      </span>
                    </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="copyright-right text-start text-lg-end mt_md--20 mt_sm--20">
                <p className="b3">All Rights Reserved © {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Copyright Area  */}
    </div>
  );
};

export default FooterTwo;
