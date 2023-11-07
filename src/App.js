import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import { setCurrentUser,addMessage } from "./Action/action";
const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("HR");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);

      setShowChat(true);
    }else{
      alert('Please fill the feilds')
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Group</h3>
          <input
            type="text"
            placeholder="John..."
            style={{height:"40px",width:"230px",borderRadius:"5px"}}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
            <select value={room} style={{height:"40px",width:"250px",borderRadius:"5px"}}  type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}>
        <option value="HR">HR</option>
        <option value="Sales">Sales</option>
        <option value="IT">IT</option>
      </select>
          
          <button onClick={joinRoom}>Join A Team</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
