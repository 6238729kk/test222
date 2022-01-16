import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
background-color: rgb(0,0,0);
color: white;
margin: 0;
font-size: 14px;
height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0px 10px 0px 10px;
  position: relative;
  border: 4px solid rgb(28,28,32);
  background: url(/idoo_mobile/assets/images/btn_drop_down_default.png) calc(100% ) center no-repeat;
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
display: flex;
align-items: center;
width: inherit;
height: inherit;
border: 0 none;
outline: 0 none;
padding-left: 15px;
background: transparent;
cursor: pointer;
color: rgb(99,134,241);
font-weight: bold;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;
const Wrapper = styled("div")`
  display : flex;
`
const DropDownList = styled("ul")`
background-color: rgb(90, 90, 105);
    border-radius: 1.65px;
    display: block;
    margin: 5px 0px 0px;
    overflow: auto;
    overflow-y: scroll;
    height: 240px;
    ::-webkit-scrollbar {width: 5px;}
    ::-webkit-scrollbar-thumb {background: rgb(99,134,241); border-radius: 45px;}
}
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  
`;
const DayContainer = styled("div")`
width: 60%;
    height: 100%;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;

`
const DayList = styled("ul")`
list-style-type: none;
color: #ffff;
display: inline-block;
text-align: center;
margin-block-start: 0;
margin-block-end: 0;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 0px;
margin: 10px;
padding: 10px;
`

const today = new Date()
const YEARS = 30
const yearList = [...Array(YEARS).keys()].map((idx) => idx + new Date().getFullYear() - parseInt(YEARS / 2))
const monthList = [...Array(12 + 1).keys()].splice(1)
// const dayLength =  new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
const _dayList = [...Array(31).keys()].map(
  (idx) => new Date(today.getFullYear(), today.getMonth(), idx + 1)
)
const dayList =  [...Array(31).keys()].map(
  (idx) => new Date(today.getFullYear(), today.getMonth(), idx + 1).getDate()
)

const week = ['일', '월', '화', '수', '목', '금', '토']
const weekList = [...Array(31).keys()].map(
  (idx) => new Date(today.getFullYear(), today.getMonth(), idx + 1).getDay())

export default function App() {
  console.log(week)
  console.log(weekList)
  console.log(week[weekList])
  const [isOpenY, setIsOpenY] = useState(false);
  const [isOpenM, setIsOpenM] = useState(false);
  const [selectedY, setSelectedY] = useState(new Date().getFullYear());
  const [selectedM, setSelectedM] = useState(new Date().getMonth()+1);

  const togglingY = () => setIsOpenY(!isOpenY);
  const togglingM = () => setIsOpenM(!isOpenM);

  const onClickedYear = value => () => {
    setSelectedY(value);
    setIsOpenY(false);
    console.log(selectedY);
  };

  const onClickedMonth = value => () => {
    setSelectedM(value);
    setIsOpenM(false);
    console.log(selectedM);
  };

  // const ReviewRef = useRef();
  // // const handleIndexClick = () =>
  // // ReviewRef.current.scrollIntoView({
  // //   behavior: 'smooth',
  // //   block: 'start',
  // // });
  return (
    <Main>
      <h1>Test</h1>
      <Wrapper>
      <DropDownContainer>
        <DropDownHeader onClick={togglingY}>
          {`${selectedY}년`}
        </DropDownHeader>
        {isOpenY && (
          <DropDownListContainer>
            <DropDownList>
              {yearList.map(year => (
                <ListItem onClick={onClickedYear(year)} key={Math.random()}
                value={year}>
                  {year}년
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      <DropDownContainer>
        <DropDownHeader onClick={togglingM}>
          {`${selectedM}월`}
        </DropDownHeader>
        {isOpenM && (
          <DropDownListContainer>
            <DropDownList>
              {monthList.map(option => (
                <ListItem onClick={onClickedMonth(option)} key={Math.random()}
                value={option}>
                  {option}월
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      </Wrapper>
      <DayContainer>
      {dayList.map(day => (
        <DayList>
          <li key={Math.random()}
          value={day}>
            {day}
          </li>
          </DayList>
              ))}

      </DayContainer>
    </Main>

  );
}