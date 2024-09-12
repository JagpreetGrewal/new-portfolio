import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Game.css"

function GodotGame() {
    // const [gameHTML, setGameHTML] = useState("");
    const [loading, setLoading] = useState(true); // New state for loading
  
    useEffect(() => {
      // Fetch the game index.html file from your server
      axios
        .get("http://localhost:8080/game/index.html", {
          responseType: 'arraybuffer',
          // headers: {
          //   'Cross-Origin-Opener-Policy': 'same-origin',
          //   'Cross-Origin-Embedder-Policy': 'require-corp',
          //   'Cross-Origin-Resource-Policy': 'cross-origin',
          //   'Access-Control-Allow-Origin': '*',
          // }
        })
        .then((response) => {
          console.log('Game HTML received')
          // setGameHTML(response.data);
          setLoading(false); // Stop loading when data is fetched
        })
        .catch((error) => {
          console.error("Error fetching game HTML:", error);
          setLoading(false);
        });
    }, []);
  
    const iframeRef = useRef(null);
  
    const handleFullscreen = () => {
      const iframe = iframeRef.current;
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        // Firefox
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        // Chrome, Safari, and Opera
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        // IE/Edge
        iframe.msRequestFullscreen();
      }
    };
  
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                {/* Simple loading bar */}
                <div style={{
                  width: '200px',
                  height: '20px',
                  backgroundColor: '#f3f3f3',
                  margin: '0 auto',
                  borderRadius: '5px',
                  overflow: 'hidden',
                  border: '1px solid #ccc'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#4caf50',
                    animation: 'loadingBar 1s infinite'
                  }}></div>
                </div>
                <p>Loading game...</p>
              </div>
            ) : (
              <div className="game-container">
                <iframe
                  ref={iframeRef}
                  src="http://localhost:8080/game/index.html"
                  title="Godot Game"
                  className="game-iframe"
                  allowFullScreen
                ></iframe>
                {/* Fullscreen Button */}
                <button
                  className="fullscreen-button"
                  onClick={handleFullscreen}
                >
                  ⛶ Fullscreen
                </button>
              </div>
            )}
  
            <style>
              {`
                @keyframes loadingBar {
                  0% { width: 0; }
                  100% { width: 100%; }
                }
              `}
            </style>
          </div>     
        </div>
      );
  }

export default function MyGame () {
    return (
        <section className="PlayMyGame">
            <GodotGame />
        </section>
    );
}