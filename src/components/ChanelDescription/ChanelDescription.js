import React, { Component } from "react";
import CSS from "./ChanelDescription.module.css";
import chanelData from "../Data/ChanelDescription";
import { IconContext } from "react-icons";
import shortid from "shortid";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
const descriptionChanel = chanelData[0].descriptionChanel;
const linksArry = chanelData[2].links;

export default class ChanelDescription extends Component {
  state = {
    isModalOpen: false
  };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { isModalOpen } = this.state;

    return (
      <>
        <>
          {isModalOpen && (
            <Modal onClose={this.closeModal}>
              <Form onClose={this.closeModal} />
            </Modal>
          )}
        </>
        <article className={CSS.descriptionContainer}>
          <div className={CSS.bgImage}></div>
          <section className={CSS.bgText}>
            <h1 className={CSS.descriptionTitle}>#{descriptionChanel.title}</h1>
            <p className={CSS.descriptiontext}>{descriptionChanel.mainInfo2}</p>
            <button className={CSS.button} onClick={this.openModal}>
              <p>Отправить отзыв</p>
            </button>
          </section>

          <section className={CSS.socialLinksContainer}>
            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                className: "global-class-name"
              }}
            >
              <ul className={CSS.socialLinksList}>
                {linksArry.map(el => (
                  <li className={CSS.socialLinksItem} key={shortid.generate()}>
                    <a href={el.link}>
                      <el.icon />
                      {/* {el.label} */}
                    </a>
                  </li>
                ))}
              </ul>
            </IconContext.Provider>
          </section>
        </article>
      </>
    );
  }
}
