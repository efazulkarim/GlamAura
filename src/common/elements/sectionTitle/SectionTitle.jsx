import Link from "next/link";

const SectionTitleOne = ({ title }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <h2 className="title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

const SectionTitleTwo = ({title, btnText, btnUrl}) => {
  return (
    <div className="row align-items-center mb--30">
      <div className="col-lg-6 col-md-8 col-sm-8 col-12">
        <div className="section-title">
          <h2 className="title">{title}</h2>
        </div>
      </div>
      <div className="col-lg-6 col-md-4 col-sm-4 col-12">
        <div className="see-all-topics text-start text-sm-end mt_mobile--20">
          <Link href={btnUrl || "#"}>
            <a className="axil-link-button">{btnText}</a>
          </Link>

        </div>
      </div>
    </div>
  );
};

export { SectionTitleOne, SectionTitleTwo };
