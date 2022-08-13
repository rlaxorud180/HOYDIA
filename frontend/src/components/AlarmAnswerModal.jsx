/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal, { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import exit from 'assets/exit.png';
import Toast from 'components/Toast';

const StyledModal = Modal.styled`
  width: 800px;
  height: 600px;
  background: #FFFFFF;
  box-shadow: 0rem 0.25rem 0.25rem  rgba(0, 0, 0, 0.25), 0rem 0.125rem 0.25rem  rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0.25rem );
  border-radius: 2.188rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around
  opacity: ${(props) => props.opacity};
  transition : all 0.05s ease-in-out;
  `;

const ExitDiv = styled.div`
  // display: flex;
  // justify-content: flex-end;
  width: 1.875rem;
  height: 1.875rem;
  // margin-left: 740px;
  // margin-top: 24px;
  margin: 24px 24px 0px 740px;
`;

const ExitBtn = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  color: #ff8960;
`;
const Question = styled.span`
  font-size: 20px;
  margin-top: 5px;
`;

const Answer = styled.div`
  width: 660px;
  height: 280px;
  border: 2px solid #dfba88;
  border-radius: 16px;
  margin-top: 20px;
`;

const Pair = styled.p`
  // margin-top: 240px;
  margin-bottom: 20px;
  font-size: 20px;
`;

const PairBtn = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;

const Yes = styled.button`
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: 176px;
  height: 60px;
  background: #ffdbac;
  border-radius: 15px;
  border: none;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  // text-shadow: -1px 0px #ff8960, 0px 1px #ff8960, 1px 0px #ff8960,
  //   0px -1px #ff8960;
  -webkit-text-stroke: 1px #ff8960;
  &:hover {
    cursor: pointer;
    background-color: #ff8960;
  }
`;

const No = styled.button`
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: 176px;
  height: 60px;
  background: #ff8988;
  border-radius: 15px;
  border: none;
  color: #ffffff;
  font-size: 30px;
  font-weight: 400;
  // text-shadow: -1px 0px #d43e3c, 0px 1px #d43e3c, 1px 0px #d43e3c,
  //   0px -1px #d43e3c;
  -webkit-text-stroke: 1px #d43e3c;
  &:hover {
    cursor: pointer;
    background: #d43e3c;
  }
`;

function FancyModalButton({
  toggleModal,
  afterOpen,
  beforeClose,
  isOpen,
  opacity,
  test,
}) {
  const [ToastStatus, setToastStatus] = useState(false);
  const handleToast = () => {
    setToastStatus(true);
    if (test) {
      console.log(test);
      axios({
        headers: {
          'access-token': `${localStorage.getItem('access-token')}`,
        },
        url: `http://localhost:8080/match/${test}`,
        method: 'PUT',
        data: {
          permit: true,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => setToastStatus(false), 2000);
    }
  }, [ToastStatus]);
  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      opacity={opacity}
      backgroundProps={{ opacity }}
    >
      <ExitDiv onClick={toggleModal}>
        <ExitBtn src={exit} />
      </ExitDiv>
      <Title>Q&A</Title>
      <Question>오늘의 질문: 최애 여행지는 어디인가요?</Question>
      <Answer>대답 어쩌구저쩌구</Answer>
      <Pair>페어가 되길 원하시나요?</Pair>
      <PairBtn>
        <Yes onClick={handleToast}>네</Yes>
        <No onClick={toggleModal}>아니오</No>
      </PairBtn>
      {ToastStatus && (
        <Toast msg="감성 페어와 매칭이 완료될 때까지 기다려주세요! ⏳" />
      )}
    </StyledModal>
  );
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

function AlarmAnswerModal(props) {
  return (
    <div className="Modal">
      <ModalProvider backgroundComponent={FadingBackground}>
        <FancyModalButton {...props} />
      </ModalProvider>
    </div>
  );
}

export default AlarmAnswerModal;
