require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiroutes/apiRoutes");

const port = process.env.PORT || 4001;
const axios = require("axios");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));
app.use("/", apiRoutes);

// sockets test

const getApiAndEmit = async socket => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCeObZv89Stb2xLtjLJ0De3Q&key=${process.env.YOUTUBE_TOKEN}`
    ); // Getting the data
    socket.emit("FromAPI", res.data.items[0].statistics); // Emitting a new message. It will be consumed by the client
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};
let interval;
io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 20000); // interval 20 sec
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
