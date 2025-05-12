import React, { useEffect, useState, useRef } from "react";
import metaMaskLogo from "./MetaMask.png";
import hackatone from "./hackatone.png";
import "./App.css";
import Web3 from "web3";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // 웹캠 접근 요청
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("웹캠 접근 에러:", err);
      });
  }, []);
  // MetaMask와 연결하기
  const [account, setAccount] = useState<string>(""); // account 상태 초기화
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // 로그인 여부 상태 초기화
  const connectToMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // window.ethereum을 any 타입으로 처리
        const ethereum = window.ethereum as any;

        // MetaMask 계정 연결 요청
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        const w3 = new Web3(ethereum); // Web3 인스턴스 생성

        // 계정과 Web3 설정
        setAccount(accounts[0]);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("MetaMask 연결 실패:", error);
      }
    } else {
      alert("MetaMask가 설치되어 있지 않습니다.");
    }
  };
  return (
    <div className="App">
      <header className="header">
        {/* 왼쪽로고*/}
        <div className="logo-section1">
          <img src={metaMaskLogo} alt="MetaMask" className="logo-img" />
          <span className="logo-text">MetaMask</span>
        </div>

        {/* 중앙문구*/}
        <div className="center-text">
          <strong>RPPG with Blockchain</strong>
        </div>

        {/* 오른쪽로고 */}
        <div className="logo-section2">
          <img src={hackatone} alt="hackatone Logo" className="logo-img" />
          <div className="subtitle">Better Life with Smart media & things</div>
        </div>
      </header>
      {/* MetaMask 로그인 버튼 */}
      <div className="login-container">
        {!isLoggedIn ? (
          <button className="custom-button" onClick={connectToMetaMask}>
            Connect MetaMask
          </button>
        ) : (
          <div>
            <p>Logged in as: {account}</p>
          </div>
        )}
      </div>

      {/* 아래 본문 영역 */}
      <main>
        <div style={{ height: "2000px", background: "#f9f9f9" }}>
          <div className="full-center">
            <div className="video-wrapper">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="webcam-video"
              />
            </div>
            <div className="button-group">
              <button className="custom-button">test1</button>
              <button className="custom-button">test2</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
