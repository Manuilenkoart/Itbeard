import React, { Component } from "react";
import { fetchStatistics } from "../services/fetch";
import Timer from "../Timer/Timer";
import CSS from "./Youtubestatistics.module.css";
import socketIOClient from "socket.io-client";
const endpoint = "/";

export default class YoutubeStatistics extends Component {
  state = {
    statistics: null
  };
  componentDidMount() {
    this.fetchStatisticsYoutube();
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ statistics: data }));
  }

  fetchStatisticsYoutube = () => {
    fetchStatistics().then(data => {
      this.setState({ statistics: data });
    });
  };

  render() {
    const { statistics } = this.state;

    return (
      <>
        <Timer />

        {statistics && (
          <div className={CSS.statisticsContainer}>
            <div>
              <p className={CSS.statisticsN}>{statistics.subscriberCount}</p>
              <p>subscribers</p>
            </div>
            <div>
              <p className={CSS.statisticsN}>{statistics.viewCount}</p>
              <p>views</p>
            </div>

            <div>
              <p className={CSS.statisticsN}>{statistics.videoCount}</p>
              <p>video</p>
            </div>
          </div>
        )}
      </>
    );
  }
}
