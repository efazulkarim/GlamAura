const WidgetNewsletter = () => {
  return (
    <div className="axil-single-widget widget widget_newsletter mb--30">
      <div className="newsletter-inner text-center">
        <h4 className="title mb--15">Never Miss A Post!</h4>
        <p className="b2 mb--30">
          Sign up for free and be the first to <br /> get notified about
          updates.
        </p>
        <form action="#">
          <div className="form-group">
            <input type="text" placeholder="Enter Your Email " />
          </div>
          <div className="form-submit">
            <button className="cerchio axil-button button-rounded">
              <span>Subscribe</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WidgetNewsletter;
