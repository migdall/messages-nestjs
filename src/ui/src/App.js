import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .then(() => setLoading(false))
      .catch((error) => console.error('Error:', error));
  }, [loading]);

  function sendMessage() {
    fetch('http://localhost:3001/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newMessage }),
    })
      .then((response) => response.json())
      .then((data) => setMessages([...messages, data]))
      .catch((error) => console.error('Error:', error));
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>React Messages App</h1>
      <input
        type="text"
        placeholder="Enter your message"
        onChange={setNewMessage}
      />
      <button onClick={sendMessage}>Send</button>
      <div>{messages.length}</div>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <p>{message.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
