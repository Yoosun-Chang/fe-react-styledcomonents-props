import React from "react";
import Box from "./components/box";
import Circle from "./components/circle";
import Picture from "./components/picture";


const Main = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <>
      <Box boxColor= "red" text="빨강"/>
      <Box boxColor = "blue" text="파랑"/>
      <Box boxColor = "green" text="초록"/>
      <Box boxColor = "pink" text="분홍"/>

      <Circle circleColor = "pink"/>
      <Circle circleColor = "red"/>
      <Circle circleColor = "black"/>
      <Circle circleColor = "gray"/>
      <Circle circleColor = "green"/>
      <Circle circleColor = "blue"/>
      <Circle circleColor = "orange"/>

      <br></br>

    <Picture
      text1="그 해 우리는"
      text2="내가 버릴 수 있는 건 너 밖에 없어"
      buttoncolor = "#fefeab"
      url="그해우리는.jpg"
      />  

    <Picture
      text1="작은 아씨들"
      text2="가장 밑바닥에 있던 사람이 어디까지 올라갈 수 있을까?"
      buttoncolor = "#5bb376"
      url="작은아씨들.jpg"
      />  
    
    <Picture
      text1="스물다섯 스물하나"
      text2="우리 힘들 때는 마음껏 좌절하자. 실컷 슬퍼하자!"
      buttoncolor = "#92c0f1"
      url="2521.jpg"
      />  

    <Picture
      text1="도깨비"
      text2="너와 함께 한 시간 모두 눈부셨다."
      buttoncolor = "#ffaeed"
      url="도깨비.jpg"
      />  

    

    </>
  );
};

export default Main;
