import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.is_main? "center" : "space-between"};
  padding: 16px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 8px 24px;
  background: #dadafc;
  border: #dadafc;
  border-radius: 30px;
  margin: 36px 0px;
  width: 80vw;
`;

export const Img = styled.img`
  width: 60vw;
  margin: 16px;
`;

export const Highlight = styled.span`
  font-weight: bold;
  background: #fef5d4;
  padding: 5px 10px;
  border-radius: 30px;
`;


export const ProgressBar = styled.div`
    background: #eee;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

export const HighLighting = styled.div`
    background: orange;
    transition: 1s;
    width: ${(props) => props.width};
    height: 20px;
    border-radius: 10px;
`;

export const Dot = styled.div`
    width: 40px;
    height: 40px;
    background: #fff;
    border: 5px solid orange;
    border-radius: 50px;
    margin: 0px 0px 0px -20px;
`;