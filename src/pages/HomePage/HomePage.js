import React, { Component } from "react";
import Youtubestatistics from "../../components/YoutubeStatistics/Youtubestatistics";
import ChanelDescription from "../../components/ChanelDescription/ChanelDescription";
import VideoList from "../../components/VideoList/VideoList";
import Footer from "../../components/Footer/Footer";
import CSS from "./HomePage.module.css";

export default class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className={CSS.wrapper}>
        <div className={CSS.container}>
          <ChanelDescription />
          <Youtubestatistics />
          <VideoList />
        </div>
        <Footer />
      </div>
    );
  }
}
