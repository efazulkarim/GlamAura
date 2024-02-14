import SocialData from '../../../data/social/SocialData.json';

const SocialOne = () => {
  return (
    <div className="bg-color-grey axil-section-gapTop">
      <div className="container">
        <div className="axil-social-wrapper bg-color-white radius">
          <ul className="social-with-text">
            <li className="twitter">
              <a href={SocialData.twitter.url}>
                <i className={SocialData.twitter.icon} />
                <span>Twitter</span>
              </a>
            </li>
            <li className="facebook">
              <a href={SocialData.fb.url}>
                <i className={SocialData.fb.icon} />
                <span>Facebook</span>
              </a>
            </li>
            <li className="instagram">
              <a href={SocialData.instagram.url}>
                <i className={SocialData.instagram.icon} />
                <span>Instagram</span>
              </a>
            </li>
            <li className="youtube">
              <a href={SocialData.yt.url}>
                <i className={SocialData.yt.icon} />
                <span>Youtube</span>
              </a>
            </li>
            <li className="pinterest">
              <a href={SocialData.pinterest.url}>
                <i className={SocialData.pinterest.icon} />
                <span>Pinterest</span>
              </a>
            </li>
            <li className="discord">
              <a href={SocialData.discord.url}>
                <i className={SocialData.discord.icon} />
                <span>Discord</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialOne;
