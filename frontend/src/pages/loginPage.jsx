/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';
import kakaoLogin from 'assets/kakaoLogin.png';
import naverLogin from 'assets/naverLogin.png';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Hoydia = styled.h1`
  margin: 0px;
  // font-family: 'SeoulNamsan';
  font-style: normal;
  font-weight: 400;
  font-size: 96px;
  color: #ff8960;
`;

const Slogan = styled.p`
  margin: 0px;
  // font-family: 'SeoulNamsan';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #000000;
`;

const Diary = styled.img`
  max-width: 100%;
  height: auto;
`;

const KakaoBtn = styled.img`
  width: 312px;
  height: 75px;
  border-radius: 100px;
`;

const NaverBtn = styled.img`
  width: 312px;
  height: 75px;
  border-radius: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

function loginPage() {
  const navigate = useNavigate();
  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/kakaoLogin';
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div className="login">
      <Container>
        <Hoydia>HOYDIA</Hoydia>
        <Slogan>감성 페어와 공유하는 당신의 요즈음</Slogan>
        <Logo />
        <BtnContainer>
<<<<<<< HEAD
<<<<<<< HEAD
          <GoogleOAuthProvider clientId="742116060530-q5b2iggpf11hqohctu3olf2vf829i9o7.apps.googleusercontent.com">
=======
          <GoogleOAuthProvider
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          >
>>>>>>> feature-front/login
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                navigate('/mainPage');
                console.log(credentialResponse.credential);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
          <a href={KAKAO_AUTH_URI}>
            <KakaoBtn src={kakaoLogin} />
          </a>
          <NaverBtn src={naverLogin} />
=======
          <Link to="/mainPage">
            <KakaoBtn src={kakaoLogin} />
          </Link>
          <Link to="/mainPage">
            <NaverBtn src={naverLogin} />
          </Link>
>>>>>>> 2350d2451dc4b843084cd04e524d5d735bc7cd68
        </BtnContainer>
      </Container>
    </div>
  );
}

export default loginPage;
