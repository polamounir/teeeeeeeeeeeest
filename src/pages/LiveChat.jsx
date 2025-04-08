import { useEffect, useState } from "react";
import {
  onMessageReceived,
  sendMessage,
  startConnection,
  stopConnection,
} from "../services/signalr";

export default function LiveChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const init = async () => {
      await startConnection();
      onMessageReceived((message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    };

    init();

    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxNmFmMWUyNy02MTJhLTQ3NzMtOWQzOS0wOGRkNmQwOWY2Y2MiLCJGdWxsTmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBncmFkZWNvbS5jb20iLCJVc2VyVHlwZSI6IkFkbWluIiwibmJmIjoxNzQ0MTIyOTcxLCJleHAiOjE4MDg5MjI5NzEsImlhdCI6MTc0NDEyMjk3MX0.KIAff3HOZrPQz3DgC1owUCN2Z4uFJtShZvbhVVsuXiw"
    );


    return () => {
      stopConnection();
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    await sendMessage(input);
    setInput("");
  };

  return (
    <div className="py-20 flex flex-col gap-10 items-center">
      <div className="chatBox flex flex-col gap-2 max-h-96 overflow-auto">
        {messages.map((message, i) => (
          <div key={i} className="rounded-md bg-gray-200 px-5 py-2 text-sm">
            {message}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-5 py-2 border border-gray-200 rounded-md"
        />
        <button
          className="px-10 py-2 bg-gray-400 rounded-md hover:bg-gray-500"
          onClick={handleSend}
        >
          SEND
        </button>
      </div>
    </div>
  );
}
