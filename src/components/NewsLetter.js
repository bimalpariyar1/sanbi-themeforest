import React, { useState } from "react";

const Newsletter = () => {
  const [newsLetterFromData, setNewsLetterFromData] = useState({
    emailAddress: "",
  });

  const handleChange = (e) => {
    setNewsLetterFromData((preValues) => {
      return {
        ...preValues,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newsLetterFromData);
  };
  return (
    <div className="newsletter">
      <div className="newsletter-heading">
        <h5>Subscribe for Newsletter</h5>
        <p>Join our newsletter to stay up to date on features and releases.</p>
      </div>
      <div className="newsletter-form mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email Address"
              name="emailAddress"
              onChange={handleChange}
              value={newsLetterFromData.emailAddress}
            />
          </div>
          <div>
            <button type="submit" className="button button-lg">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
