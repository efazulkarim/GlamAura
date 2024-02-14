import WidgetAd from "./WidgetAd";
import WidgetCategory from "./WidgetCategory";
import WidgetInstagramPost from "./WidgetInstagramPost";
import WidgetNewsletter from "./WidgetNewsletter";
import WidgetPostList from "./WidgetPostList";
import WidgetSearch from "./WidgetSearch";
import WidgetSocialShare from "./WidgetSocialShare";
import WidgetTags from "./WidgetTags";

const SidebarTwo = ({ dataPost, tagData }) => {
  return (
    <div className="sidebar-inner">
      <WidgetCategory catData={dataPost} />
      <WidgetSearch />
      <WidgetPostList postData={dataPost} />
      <WidgetNewsletter />
      <WidgetAd
        url="https://example.com/"
        image="/images/post-single/ads-01.webp"
        height={236}
        width={390}
      />
      <WidgetSocialShare />
      <WidgetInstagramPost />
      <WidgetTags postTag={tagData}/>
      <WidgetAd
        url="https://example.com/"
        image="/images/add-banner/banner-02.webp"
        height={778}
        width={390}
      />
    </div>
  );
};

export default SidebarTwo;
