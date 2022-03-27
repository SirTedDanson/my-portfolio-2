import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "font-awesome/css/font-awesome.min.css";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Please enter a vaild email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <>
      <form className="section-row" id="contact-form" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-content">
            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  defaultValue={name}
                  onBlur={handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <p className="help is-success"></p>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  defaultValue={email}
                  onBlur={handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Message"
                  defaultValue={message}
                  onBlur={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
            {errorMessage && (
                <p className="help is-danger">{errorMessage}</p>
              )}
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
