import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import { slugify } from "../../utils";
import PostLayoutTwo from "./layout/PostLayoutTwo";
import WidgetCategory from "../sidebar/WidgetCategory";
import WidgetVideoPost from "../sidebar/WidgetVideoPost";
import AddBanner from "../ad-banner/AddBanner";

const filters = [
  {
    id: 1,
    cate: "Design",
  },
  {
    id: 2,
    cate: "Branding",
  },
  {
    id: 3,
    cate: "SEO",
  },
  {
    id: 4,
    cate: "Research",
  },
];

const defaultActiveCat = slugify(filters[0].cate);

const PostSectionEleven = ({ postData }) => {
  const defaultData = postData.filter(
    (post) => slugify(post.cate) === defaultActiveCat
  );

  const [activeNav, setActiveNav] = useState(defaultActiveCat);
  const [tabPostData, setTabPostData] = useState(defaultData);

  const handleChange = (e) => {
    let filterText = slugify(e.target.textContent);
    setActiveNav(filterText);

    let tempData = [];

    for (let i = 0; i < postData.length; i++) {
      const element = postData[i];
      let categories = element["cate"];

      if (slugify(categories).includes(filterText)) {
        tempData.push(element);
      }
    }

    setTabPostData(tempData);
  };

  const firstPost = tabPostData[0];

  return (
    <div className="axil-post-grid-area axil-section-gapTop bg-color-grey">
      <div className="container">
        <SectionTitleOne title="Reviews" />
        <div className="row">
          <div className="col-lg-12">
            <Tab.Container id="axilTab" defaultActiveKey={activeNav}>
              <Nav className="axil-tab-button nav nav-tabs mt--20">
                {filters.map((data) => (
                  <Nav.Item key={data.id}>
                    <Nav.Link
                      onClick={handleChange}
                      eventKey={slugify(data.cate)}
                    >
                      {data.cate}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey={activeNav}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        {tabPostData.slice(0, 2).map((data) => (
                          <div className="col-lg-6" key={data.slug}>
                            <div className="featured-post mt--30">
                              <div className="content-block">
                                <div className="post-content">
                                  <div className="post-cat">
                                    <div className="post-cat-list">
                                      <Link
                                        href={`/category/${slugify(data.cate)}`}
                                      >
                                        <a className="hover-flip-item-wrapper">
                                          <span className="hover-flip-item">
                                            <span data-text={data.cate}>
                                              {data.cate}
                                            </span>
                                          </span>
                                        </a>
                                      </Link>
                                    </div>
                                  </div>
                                  <h4 className="title">
                                    <Link href={`/post/${data.slug}`}>
                                      <a>{data.title}</a>
                                    </Link>
                                  </h4>
                                </div>
                                <div className="post-thumbnail">
                                  <Link href={`/post/${data.slug}`}>
                                    <a>
                                      <Image
                                        src={data.featureImg}
                                        alt={data.title}
                                        height={338}
                                        width={600}
                                        priority={true}
                                      />
                                      <div className="review-count">
                                        <span>8.1</span>
                                      </div>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-8 col-xl-8 mt--30">
						<PostLayoutTwo dataPost={tabPostData} postStart="2" show="6" bgColor="with-bg-solid"/>
                    </div>
					<div className="col-lg-4 col-xl-4 mt--30 mt_md--40 mt_sm--40">
						<div className="sidebar-inner">
							<WidgetCategory catData={postData}/>
							<WidgetVideoPost postData={postData}/>
						</div>
					</div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
		<div className="row">
			<div className="col-lg-12">
				<AddBanner img="/images/add-banner/banner-03.webp" height="200" width="1230" pClass="mt--30"/>
			</div>
		</div>
      </div>
    </div>
  );
};

export default PostSectionEleven;
