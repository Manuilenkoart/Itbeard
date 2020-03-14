import React, { Component } from "react";
import axios from "axios";
export default class Form extends Component {
  state = {
    email: "",
    text: ""
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const formData = { ...this.state };
    axios({ method: "post", url: "/registration", data: formData })
      .then(response => {
        console.log("response from server", response.data);
      })
      .catch(error => console.log(error));

    this.setState({ email: "", text: "" });
  };
  render() {
    const { email, text } = this.state;

    return (
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
    );
  }
}
