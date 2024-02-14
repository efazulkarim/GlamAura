const WidgetSearch = () => {
  return (
    <div className="axil-single-widget widget widget_search mb--30">
      <h5 className="widget-title">Search</h5>
      <form action="#">
        <div className="axil-search form-group">
          <button type="submit" className="search-button">
            <i className="fal fa-search" />
          </button>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </form>
    </div>
  );
};

export default WidgetSearch;
