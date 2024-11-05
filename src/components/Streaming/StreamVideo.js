import { useEffect, useState, useRef } from "react";
import {
    StreamCall,
    StreamTheme,
    StreamVideo,
    SpeakerLayout,
    StreamVideoClient
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import Header from '../Header';
import '../../css/StreamVideo.css';

const callId = "csb-" + Math.random().toString(16).substring(2);
const user_id = "csb-user";
const user = { id: user_id };

const apiKey = "mmhfdzb5evj2";
const tokenProvider = async () => {
    const { token } = await fetch(
        "https://pronto.getstream.io/api/auth/create-token?" +
        new URLSearchParams({
            api_key: apiKey,
            user_id: user_id
        })
    ).then((res) => res.json());
    return token;
};

export default function StreamingVideo() {
    const [client, setClient] = useState();
    const [call, setCall] = useState();
    const videoRef = useRef(null); // Ref for the webcam video

    useEffect(() => {
        // Access the webcam stream
        const getWebcamStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false // Mute audio if needed
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error('Error accessing webcam:', err);
            }
        };

        getWebcamStream();

        return () => {
            if (videoRef.current) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop()); // Stop the video tracks when unmounting
            }
        };
    }, []);

    useEffect(() => {
        const myClient = new StreamVideoClient({ apiKey, user, tokenProvider });
        setClient(myClient);
        return () => {
            myClient.disconnectUser();
            setClient(undefined);
        };
    }, []);

    useEffect(() => {
        if (!client) return;
        const myCall = client.call("default", callId);
        myCall.join({ create: true, audio: false }).catch((err) => {
            console.error(`Failed to join the call`, err);
        });

        setCall(myCall);

        return () => {
            setCall(undefined);
            myCall.leave().catch((err) => {
                console.error(`Failed to leave the call`, err);
            });
        };
    }, [client]);

    if (!client || !call) return null;

    return (
        <div className="streaming-video-container" style={{ position: 'relative', height: '100vh' }}>
            <video
                ref={videoRef}
                autoPlay
                muted
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1, // Set behind other content
                }}
            />
            {/* <StreamVideo client={client} className="stream-video" style={{ position: 'relative', zIndex: 1 }}>
                <StreamTheme className="my-theme-overrides">
                    <StreamCall call={call}>
                        <SpeakerLayout />
                    </StreamCall>
                </StreamTheme>
            </StreamVideo> */}
        </div>
    );
}
