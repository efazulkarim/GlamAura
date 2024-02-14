const BreadcrumbTwo = ({bgImae, title, paragraph}) => {

  return (
    <div className="axil-banner banner-style-1 bg_image" style={{backgroundImage: bgImae}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner">
              <h1 className="title">{title || "Title"}</h1>
              <p className="description" dangerouslySetInnerHTML={{__html: paragraph}}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbTwo;
