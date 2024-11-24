import React, { useState } from 'react'

function ChatBot() {
const [showChatbot, setShowChatbot] = useState(false);
  return (
    <div>
        {/* Styles */}
      <style>
        {`
          .chatbot-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            background-color: white;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }

          .chatbot-container.collapsed {
            max-height: 0;
            visibility: hidden;
          }

          .chatbot-container.expanded {
            max-height: 500px;
            visibility: visible;
          }

          .chatbot-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1100;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 50%;
            padding: 10px 15px;
            cursor: pointer;
            font-size: 16px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }

          .chatbot-toggle:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      {/* Chatbot Toggle Button */}
      <button
        className="chatbot-toggle"
        onClick={() => setShowChatbot(!showChatbot)}
        style={{
          width: showChatbot ? "40px" : "120px", // Dynamic width
          transition: "width 0.3s ease",
        }}
      >
        {showChatbot ? (
          "−"
        ) : (
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/685/685887.png"
              alt="Chat Icon"
              style={{ width: "22px", height: "32px", marginBottom: "4px" }}
            />
            Chat with us
          </span>
        )}
      </button>

      {/* Chatbot Container */}
      <div className={`chatbot-container ${showChatbot ? "expanded" : "collapsed"}`}>
        <iframe
          width="350"
          height="400"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/74a4beaa-b90d-4583-b003-a95cbabf0bdf"
          title="ChatBot"
        >
          ChatBot
        </iframe>
      </div>
    </div>
  )
}

export default ChatBot