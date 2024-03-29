// 시작 페이지 로그인 화면 뜸
// 로그인시 메인 페이지로 가도록 해야함.
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";


import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
const style = {
  position: "absolute",

  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "rgba(255, 255, 255, 0.5)",
  borderRadius: "8px",
  boxShadow: 24,
  px: 0,
  // pb: 5,
};

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("loginUser")) {
      navigate("/main/new/0");
    }
  });
  const MyBtn = styled(Button)`
    display: flex;
    margin: auto;
  `;

  const state = 1;
  const CLIENT_ID = "1cdhp17WpXR_m9BDcOcE"; // 호성이 새로운거
  // const redirectURI = "http://localhost:3000/naver";
  const redirectURI = "https://i8a502.p.ssafy.io/naver";
  const naverLogin = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${redirectURI}&state=${state}`;
  // console.log(process.env.PUBLIC_URL + `assets/naverLogin.png`);
  return (
    <div className="main" style={{ height: "100vh", paddingTop: "15%" }}>
      <div style={{ display: "flex" }}>
        <img
          className="logo"
          src={process.env.PUBLIC_URL + `assets/logo2.png`}
          alt="logo"
        ></img>
        <Box sx={{ ...style }}>
          <div className="arrow-icon">
            <div style={{ fontSize: "40px", textAlign: "center" }}>
              click !
            </div>
            <i className="fas fa-arrow-right">
              <KeyboardDoubleArrowDownRoundedIcon
                sx={{ fontSize: "100px", color: "grey", width: "80vw" }}
              />
            </i>
          </div>
          <img
            className="postClosed"
            src={process.env.PUBLIC_URL + `assets/post.png`}
            alt="img가 없습니다."
            onClick={() => {
              navigate("/logbox");
            }}
          ></img>
          <h2
            style={{
              textAlign: "center",
              wordBreak: "keep-all",
              paddingTop: "5%",
            }}
          >
            "소중한 추억을 특별하게 기록하는 방법 알아보기"
          </h2>
          <MyBtn
        sx={{
          position: "flex",
          // left: "50%",
          // top: "80%",
          // transform: "translate(-50%, -50%)",
          width: "80%",
          margin:'auto'
        }}
        onClick={() => {}}
      >
        <a href={naverLogin}>
          <img
            src={process.env.PUBLIC_URL + `/assets/naverLogin.png`}
            alt="naver"
            style={{
              height: "6vh",
              display: "flex",
              objectFit: "cover",
            }}
          ></img>
        </a>
      </MyBtn>
        </Box>
      </div>
      
    </div>
  );
};

export default Home;
