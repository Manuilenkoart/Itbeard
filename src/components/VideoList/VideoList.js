import React, { Component } from "react";
import { fetchList } from "../services/fetch";
import shortid from "shortid";
import CSS from "./VideoList.module.css";
export default class VideoList extends Component {
  state = {
    videos: []
  };

  componentDidMount() {
    this.fetchVideoListYoutube();
  }
  fetchVideoListYoutube = () => {
    fetchList().then(data => {
      this.setState({ videos: data });
    });
  };

  render() {
    const { videos } = this.state;
    return (
      <>
        {videos && (
          <ul className={CSS.videoList}>
            {videos.map(el => (
              <li className={CSS.videoListItem} key={shortid.generate()}>
                <figure>
                  <div className={CSS.videoListItemImgPlaceHolder}>
                    <img
                      className={CSS.videoListItemImg}
                      src={`${el.snippet.thumbnails.medium.url}`}
                      alt="playlist cover"
                    />
                  </div>
                  <figcaption className={CSS.figcaption}>
                    <h3 className={CSS.videoListItemTitle}>
                      {el.snippet.title}
                    </h3>
                    <p className={CSS.videoListItemDescription}>
                      {el.snippet.description}
                    </p>
                    <a href={`https://www.youtube.com/playlist?list=${el.id}`}>
                      PLAYLIST
                    </a>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
