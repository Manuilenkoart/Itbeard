import React, { Component } from "react";
import axios from "axios";
import CSS from "./Form.module.css";

export default class Form extends Component {
  state = {
    email: "",
    text: "",
    responseMail: null,
    responseError: null
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    const { email, text } = this.state;
    e.preventDefault();

    const formData = { email, text };
    axios({ method: "post", url: "/registration", data: formData })
      .then(response => {
        this.setState({ responseMail: response.data });
        this.setState({ email: "", text: "" });
      })
      .catch(error => {
        if (error.response.status === 404 || 403 || 402 || 401)
          this.setState({
            responseError: "Что-то пошло не так, увы письмо не отправилось :("
          });
      });
  };

  render() {
    const { email, text, responseMail, responseError } = this.state;

    return (
      <>
        <div className={CSS.revervePlaceText}>
          <button className={CSS.closeModalButton} onClick={this.props.onClose}>
            X
          </button>

          {responseError && <p>{responseError}</p>}
        </div>

        {responseMail ? (
          <p className={CSS.successMail}>{responseMail}</p>
        ) : (
          <form onSubmit={this.handleSubmit} className={CSS.from}>
            <input
              className={CSS.formGroup}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              required
              onChange={this.handleChange}
            />
            <textarea
              className={`${CSS.formGroup} ${CSS.textarea}`}
              name="text"
              value={text}
              placeholder="Message..."
              required
              onChange={this.handleChange}
            ></textarea>

            <button className={`${CSS.formGroup} ${CSS.button}`} type="submit">
              Send message
            </button>
          </form>
        )}
      </>
    );
  }
}
