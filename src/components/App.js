import React from "react";
import { messages, contacts } from "../data";
import SideBar from "./SideBar";
import Messages from "./messages";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <SideBar/>
      <main>
        <h2>Messages</h2>
       <Messages/>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    </div>
  );
}

export default App;
