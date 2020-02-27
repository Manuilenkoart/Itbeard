const path = require("path");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 4001;
const axios = require("axios");

app.use(express.static(path.join(__dirname, "../../build")));

app.get("/", (req, res, next) => res.sendFile(__dirname + "./index.html"));

// sockets test

const getApiAndEmit = async socket => {
  try {
    const res = await axios.get(
      //   "https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558"
      "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCeObZv89Stb2xLtjLJ0De3Q&key=AIzaSyAn54kr7v1bHUkHJW1moCBK4DYs3Am-POo"
    ); // Getting the data from DarkSky
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
  interval = setInterval(() => getApiAndEmit(socket), 10000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
