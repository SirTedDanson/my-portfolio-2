import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "font-awesome/css/font-awesome.min.css";

function ContactForm() {
  return (
    <>
      <section className="section-row" id="contact-form">
        <div className="card">
          <div className="card-content">
            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your name"
                  defaultValue=""
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
                  placeholder="Enter your email"
                  defaultValue=""
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <p className="help is-danger"></p>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Message"></textarea>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
