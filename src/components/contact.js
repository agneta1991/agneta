import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-form">
      <div className="about-me">
        <h1 className="contact">Contact me</h1>
        <p className="about-p">
          If you have an application you are interested in developing, a feature
          that you need built, or a project that needs coding, I’d love to help
          with it!
        </p>
        <form
          id="form"
          onSubmit={handleSubmit}
          action="https://formspree.io/f/myyaqdnr"
          method="post"
        >
          <label htmlFor="name">
            <input
              id="input-text"
              type="text"
              name="name"
              placeholder="Enter your name"
              minLength="1"
              maxLength="30"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="message" className="message-label">
            <textarea
              id="textarea"
              name="message"
              placeholder="Write your message here..."
              maxLength="500"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          <div id="error"></div>
          <input id="submit" type="submit" value="Get in touch" required />
        </form>
      </div>
    </div>
  );
};

export default Contact;
