import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to the backend WebSocket

const ThrottleControl = () => {
  const [throttle, setThrottle] = useState(1520); // Default to Stop position

  useEffect(() => {
    // Listen for real-time throttle updates
    socket.on("throttle_update", (data) => {
      setThrottle(data.throttle);
    });

    return () => {
      socket.off("throttle_update");
    };
  }, []);

  const sendThrottle = (value) => {
    socket.emit("set_throttle", { throttle: value });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Motor Throttle Control</h2>
      <p>Current Throttle: <strong>{throttle} µs</strong></p>

      <button onClick={() => sendThrottle(1000)} style={buttonStyle}>
        Reverse
      </button>
      <button onClick={() => sendThrottle(1520)} style={buttonStyle}>
        Stop
      </button>
      <button onClick={() => sendThrottle(2000)} style={buttonStyle}>
        Accelerate
      </button>
    </div>
  );
};

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "18px",
  cursor: "pointer",
};

export default ThrottleControl;
