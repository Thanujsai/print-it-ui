import React, { useEffect, useRef } from "react";

const WebSocketPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.0.216:5555"); // Your WebSocket server

    ws.onmessage = (event) => {
      const videoBlob = new Blob([event.data], { type: "video/mp4" });
      const videoURL = URL.createObjectURL(videoBlob);
      videoRef.current.src = videoURL;
    };

    return () => ws.close();
  }, []);

  return <video ref={videoRef} controls autoPlay />;
};

export default WebSocketPlayer;
