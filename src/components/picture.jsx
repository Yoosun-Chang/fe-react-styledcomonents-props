import React from "react";
import styled from "styled-components";

const PicBackground = styled.div`
  text-align: center;
  width: 300px;
  height: 380px;
  margin: 20px;
  border-radius: 20px;
  background-color: #c8c8c8;
  display: inline-block;
`;

const PictureText1 = styled.p`
  font-size: 25px;
  padding-left: 20px;
  font-weight: bold;
  height:auto;
  text-align: left;
  text1: ${(props) => (props.text1 ? props.text1 : "nothing")};
`;

const PictureText2 = styled.p`
  font-size: 10px;
  text-align: left;
  padding-left: 20px;
  padding-bottom: 10px;
  padding-right: 20px;
  margin-top:10px;
  text2: ${(props) => (props.text2 ? props.text2 : "nothing")};
`;

const Pictureimg = styled.img`
  width: 260px;
  height: 100px;
  margin: 20px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  background-size : cover ;
  content: url(${(props) => (props.url ? props.url: "none")});
`;

const Button = styled.div`
  height: 40px;
  width: 280px;
  background: ${(props) => (props.buttoncolor ? props.buttoncolor : "black")};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: black;
  border: none;
  font-size: 20px;
  border-radius: 18px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
  padding-top: 10px;
`;

const Picture = (props) => {
  return (
    <PicBackground>
      <Pictureimg url={props.url}/>
      <PictureText1>{props.text1}</PictureText1>
      <PictureText2>{props.text2}</PictureText2>
      <Button buttoncolor={props.buttoncolor}>Aiction</Button>
    </PicBackground>
  );
};

export default Picture;
