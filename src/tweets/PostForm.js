import React, { Component } from "react";
import { connect } from "react-redux";
class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const foto = this.getImg.value;
    // const select = this.getSelect.value;
    const data = {
      id: new Date(),
      title,
      message,
      foto,
    };
    this.props.dispatch({
      type: "ADD_POST",
      data,
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
    this.getImg.value = "";
    // this.getSelect.value = "";
  };
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <select className="input" ref={(input) => (this.getTitle = input)}>
            <option disabled selected>Виберіть персонажа</option>
            <option value="Ярина">Ярина</option>
            <option value="Влад">Влад</option>
            <option value="Бодя">Бодя</option>
            <option value="Дарт">Дарт</option>
          </select>
          {/* <input
            required
            type="text"
            ref={(input) => (this.getTitle = input)}
            placeholder="Введіть Ім'я"
          /> */}
          <br />
          <input
            required
            type="text"
            ref={(input) => (this.getImg = input)}
            placeholder="Вставти сюди посилання на картинку"
          />
          <br />
          <textarea
            required
            rows="5"
            ref={(input) => (this.getMessage = input)}
            cols="28"
            placeholder="Розкажіть щось"
          />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
