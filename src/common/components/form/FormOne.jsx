import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
            Your Message has been successfully sent.
        </Alert>
    )
}

const FormOne = () => {
    const form = useRef();

    const [ result, showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_g3aufzu', 'template_p9x0n54', form.current, '9L_sRsO66U253zcxC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
          showresult(true);
      };

        setTimeout(() => {
            showresult(false);
        }, 5000);

    return (
      <div className="axil-section-gapTop axil-contact-form-area">
        <h4 className="title mb--10">Send Us a Message</h4>
        <p className="b3 mb--30">
          Your email address will not be published. All the fields are required.
        </p>
        <form
        ref={form} onSubmit={sendEmail} className="axil-contact-form contact-form--1 row"
        >
          <div className="col-lg-4 col-md-4 col-12">
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input name="contact-name" id="contact-name" type="text" required/>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="form-group">
              <label htmlFor="contact-phone">Phone</label>
              <input type="text" name="contact-phone" id="contact-phone" required/>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                name="contact-email"
                id="contact-email"
                type="email"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                name="contact-message"
                id="contact-message"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-submit">
              <button
                name="submit"
                type="submit"
                id="submit"
                className="axil-button button-rounded btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
                {result ? <Result /> : null}
            </div>
          </div>
        </form>
      </div>
    );
}
 
export default FormOne;