const socket = io();

socket.on("connect", () => {
  console.log("Socket bağlandı");
});

document.getElementById("btn")
.addEventListener("click", async () => {

  const response = await fetch("/order", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      name:"Big Mac Menü"
    })
  });

  const data = await response.json();

  console.log(data);
});
