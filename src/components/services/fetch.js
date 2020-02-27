const key = process.env.REACT_APP_USER_TOKEN;
const fetchStatistics = () => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCeObZv89Stb2xLtjLJ0De3Q&key=${key}`
  )
    .then(res => res.json())
    .then(data => data.items[0].statistics);
};

const fetcChanelDescription = () => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCeObZv89Stb2xLtjLJ0De3Q&key=${key}`
  )
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      // data.items[0].snippet;
    });
};

const fetchList = () => {
  // const itemsPerPage = 20;

  return fetch(
    `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCeObZv89Stb2xLtjLJ0De3Q&maxResults=20&key=${key}`
  )
    .then(res => res.json())
    .then(data => data.items);
};

export { fetchStatistics, fetcChanelDescription, fetchList };
