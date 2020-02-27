import React, { Component } from "react";
import Youtubestatistics from "./components/YoutubeStatistics/Youtubestatistics";
import ChanelDescription from "./components/ChanelDescription/ChanelDescription";
import VideoList from "./components/VideoList/VideoList";
import Footer from "./components/Footer/Footer";
import CSS from "./App.module.css";

export default class App extends Component {
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
