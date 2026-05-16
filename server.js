const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Delivery Backend Çalışıyor 🚀");
});

// socket
io.on("connection", (socket) => {
  console.log("Yeni kullanıcı bağlandı");

  socket.on("disconnect", () => {
    console.log("Kullanıcı ayrıldı");
  });
});

server.listen(3000, () => {
  console.log("Server çalışıyor");
});
