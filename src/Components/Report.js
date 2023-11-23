import React from "react";
import styled from "styled-components";

const Report = () => {
  return (
    <ContactUsStyle>
      <div className="container py-4">
        <div className="my-4">
          <h1 className="main-heading">Report An Issue</h1>
        </div>
        <div className="row sec_sp">
          <div lg="5" className="col-12 col-md-6">
            <h1 className="sub-heading py-4">We are here to help you</h1>
            <p>
              We've dedicated ourselves to creating a user-friendly website,
              ensuring accuracy in every detail. However, if you encounter any
              issues or have suggestions or queries related to our site, please
              feel free to reach out to us. Your feedback is valuable, and we're
              here to assist you.
            </p>
          </div>
          <div lg="7" className="col-12 col-md-6 d-flex align-items-center">
            <form
              className="contact__form w-100"
              action="https://formspree.io/f/mvojnnaj"
              method="POST"
            >
              <div className="row">
                <div lg="6" className="col form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </div>
                <div lg="6" className="col form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <div className="row">
                <div lg="12" className="col form-group">
                  <button className="btn btn-primary" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactUsStyle>
  );
};

const ContactUsStyle = styled.section`
  p {
    font-size: 1.1rem;
    letter-spacing: 0.9px;
    line-height: 1.5rem;
  }

  .main-heading {
    display: inline-block !important;
    margin-top: 2rem !important;
    font-size: 2rem;
    font-weight: 400 !important;
    border-bottom: 3px solid #0d6efd !important;
  }

  .sub-heading {
    font-size: 1.5rem;
    font-weight: 400 !important;
  }

  .contact__form .form-control {
    padding: 1.375rem 0.75rem;
    line-height: 1.5;
    background-color: inherit;
    border-radius: 0 !important;
    border: 1px solid #0c0c0c;
  }

  .contact__form input.form-control {
    margin-bottom: 2em;
    height: calc(2.5em + 0.75rem + 2px);
  }
`;

export default Report;
