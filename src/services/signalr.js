import * as signalR from "@microsoft/signalr";

localStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxNmFmMWUyNy02MTJhLTQ3NzMtOWQzOS0wOGRkNmQwOWY2Y2MiLCJGdWxsTmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBncmFkZWNvbS5jb20iLCJVc2VyVHlwZSI6IkFkbWluIiwibmJmIjoxNzQ0MTIyOTcxLCJleHAiOjE4MDg5MjI5NzEsImlhdCI6MTc0NDEyMjk3MX0.KIAff3HOZrPQz3DgC1owUCN2Z4uFJtShZvbhVVsuXiw"
);
const token = localStorage.getItem("token");


let connection = null;
localStorage;
export const startConnection = () => {
  if (connection && connection.state === signalR.HubConnectionState.Connected) {
    return Promise.resolve(connection);
  }

  
  connection = new signalR.HubConnectionBuilder()
    .withUrl("https://zerobyte.localto.net/hubs/chat", {
      accessTokenFactory: () => token,
    })
    .withAutomaticReconnect()
    .build();

  return connection
    .start()
    .then(() => {
      console.log("SignalR Connected");
      return connection;
    })
    .catch((err) => {
      console.error("SignalR Connection Error:", err);
    });
};

export const onMessageReceived = (callback) => {
  if (!connection) {
    console.warn("SignalR not connected yet");
    return;
  }

  connection.on("ReceiveMessage", callback);
};

export const sendMessage = (message) => {
  if (!connection) {
    console.warn("Cannot send message. SignalR not connected.");
    return;
  }

  return connection.invoke("SendMessage", message).catch((err) => {
    console.error("SendMessage Error:", err);
  });
};

export const stopConnection = () => {
  if (connection) {
    connection
      .stop()
      .then(() => {
        console.log("SignalR Disconnected");
      })
      .catch((err) => {
        console.error("Error stopping SignalR:", err);
      });
  }
};
