import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../utils";

const PostComment = () => {
  return (
    <div className="axil-comment-area">
      <div className="axil-total-comment-post">
        <div className="title">
          <h4 className="mb--0">30+ Comments</h4>
        </div>
        <div className="add-comment-button cerchio">
            <Link href="#">
                <a className="axil-button button-rounded">
                    <span>Add Your Comment</span>
                </a>
            </Link>
        </div>
      </div>
      {/* Start Comment Respond  */}
      <div className="comment-respond">
        <h4 className="title">Post a comment</h4>
        <form action="#">
          <p className="comment-notes">
            <span id="email-notes">
              Your email address will not be published.
            </span>
            Required fields are marked <span className="required">*</span>
          </p>
          <div className="row row--10">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="form-group">
                <label htmlFor="website">Your Website</label>
                <input id="website" type="text" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="message">Leave a Reply</label>
                <textarea id="message" name="message" />
              </div>
            </div>
            <div className="col-lg-12">
              <p className="comment-form-cookies-consent">
                <input
                  id="wp-comment-cookies-consent"
                  name="wp-comment-cookies-consent"
                  type="checkbox"
                />
                <label htmlFor="wp-comment-cookies-consent">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </p>
            </div>
            <div className="col-lg-12">
              <div className="form-submit cerchio">
                <input
                  name="submit"
                  type="submit"
                  id="submit"
                  className="axil-button button-rounded"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* End Comment Respond  */}
      {/* Start Comment Area  */}
      <div className="axil-comment-area">
        <h4 className="title">2 comments</h4>
        <ul className="comment-list">
          {/* Start Single Comment  */}
          <li className="comment">
            <div className="comment-body">
              <div className="single-comment">
                <div className="comment-img">
                <Image
                    src="/images/posts/author/author-b4.webp"
                    alt="Rahabi Khan"
                    height={60}
                    width={60}
                  />
                </div>
                <div className="comment-inner">
                  <h6 className="commenter">
                    <Link href={`/author/${slugify("Jone Doe")}`}>
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Jone Doe">
                          Jone Doe
                          </span>
                        </span>
                      </a>
                    </Link>
                  </h6>
                  <div className="comment-meta">
                    <div className="time-spent">Nov 23, 2018 at 12:23 pm</div>
                    <div className="reply-edit">
                      <div className="reply">
                        <a
                          className="comment-reply-link hover-flip-item-wrapper"
                          href="#"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Reply">Reply</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-text">
                    <p className="b2">
                      Duis hendrerit velit scelerisque felis tempus, id porta
                      libero venenatis. Nulla facilisi. Phasellus viverra magna
                      commodo dui lacinia tempus. Donec malesuada nunc non dui
                      posuere, fringilla vestibulum urna mollis. Integer
                      condimentum ac sapien quis maximus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="children">
              {/* Start Single Comment  */}
              <li className="comment">
              <div className="comment-body">
              <div className="single-comment">
                <div className="comment-img">
                <Image
                    src="/images/posts/author/author-b5.webp"
                    alt="Rahabi Khan"
                    height={60}
                    width={60}
                  />
                </div>
                <div className="comment-inner">
                  <h6 className="commenter">
                    <Link href={`/author/${slugify("Fatima Jane")}`}>
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Fatima Jane">
                          Fatima Jane
                          </span>
                        </span>
                      </a>
                    </Link>
                  </h6>
                  <div className="comment-meta">
                    <div className="time-spent">Nov 23, 2018 at 12:23 pm</div>
                    <div className="reply-edit">
                      <div className="reply">
                        <a
                          className="comment-reply-link hover-flip-item-wrapper"
                          href="#"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Reply">Reply</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-text">
                    <p className="b2">
                      Duis hendrerit velit scelerisque felis tempus, id porta
                      libero venenatis. Nulla facilisi. Phasellus viverra magna
                      commodo dui lacinia tempus. Donec malesuada nunc non dui
                      posuere, fringilla vestibulum urna mollis. Integer
                      condimentum ac sapien quis maximus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
              </li>
              {/* End Single Comment  */}
            </ul>
          </li>
          {/* End Single Comment  */}
          {/* Start Single Comment  */}
          <li className="comment">
            <div className="comment-body">
              <div className="single-comment">
                <div className="comment-img">
                <Image
                    src="/images/posts/author/author-b4.webp"
                    alt="Rahabi Khan"
                    height={60}
                    width={60}
                  />
                </div>
                <div className="comment-inner">
                  <h6 className="commenter">
                    <Link href={`/author/${slugify("Jone Doe")}`}>
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text="Jone Doe">
                          Jone Doe
                          </span>
                        </span>
                      </a>
                    </Link>
                  </h6>
                  <div className="comment-meta">
                    <div className="time-spent">Nov 23, 2018 at 12:23 pm</div>
                    <div className="reply-edit">
                      <div className="reply">
                        <a
                          className="comment-reply-link hover-flip-item-wrapper"
                          href="#"
                        >
                          <span className="hover-flip-item">
                            <span data-text="Reply">Reply</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-text">
                    <p className="b2">
                      Duis hendrerit velit scelerisque felis tempus, id porta
                      libero venenatis. Nulla facilisi. Phasellus viverra magna
                      commodo dui lacinia tempus. Donec malesuada nunc non dui
                      posuere, fringilla vestibulum urna mollis. Integer
                      condimentum ac sapien quis maximus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* End Single Comment  */}
        </ul>
      </div>
      {/* End Comment Area  */}
    </div>
  );
};

export default PostComment;
