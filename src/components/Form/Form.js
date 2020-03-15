import React, { Component } from "react";
import axios from "axios";
export default class Form extends Component {
  state = {
    email: "",
    text: "",
    responseMail: null
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
      })
      .catch(error => console.log("error send mail", error));

    this.setState({ email: "", text: "" });
  };
  render() {
    const { email, text, responseMail } = this.state;

    return (
      <div>
        {responseMail ? (
          <p>{responseMail}</p>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="email"
              required
              onChange={this.handleChange}
            />

            <textarea
              rows="10"
              cols="45"
              name="text"
              value={text}
              required
              onChange={this.handleChange}
            >
              Доброго здоровья, тут просто немного текста внутри тега textarea
            </textarea>

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}
