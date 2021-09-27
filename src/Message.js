import React from 'react';
import img from './photo.jpg';
import styled from 'styled-components';

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { setMessage } from "./redux/modules/user";
import { Container, Button, Img, Highlight } from "./elements";
import { addRank, addRankFB } from "./redux/modules/rank";

const Message = (props) => {
    const message_ref = React.useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const user_name = useSelector((state) => state.user.user_name);
    const quiz_name = useSelector((state) => state.quiz.quiz_name);
    const quiz_list = useSelector((state)=>state.quiz.quiz_list);
    const user_answer_list = useSelector((state)=>state.quiz.user_answer_list);

    const _score = 
     (100 / quiz_list.length) * 
     quiz_list.filter((q, idx) => {
         return q.answer === user_answer_list[idx];
     }).length;

    const score = Math.round(_score);

    return (
        <Container style={{ justifyContent: "center" }}>
        <Img 
        src={img}
        style={{ 
            width: "30vw",
            margin: "16px",}} />
        <h3 style={{ marginBottom: "50px"}}>
          <Highlight style={{
            backgroundColor: "#fef5d4",
            padding: "5px 10px",
            borderRadius: "30px"}}>
            {quiz_name}</Highlight>에게 남기는 한 마디
              </h3> 
    <input ref={message_ref} style={{
        border: "1px solid #dadafc",
        borderRadius: "30px",
        padding: "10px", 
        width: "100%"
   }} 
   />
   <Button style={{marginTop:"20px"}} onClick={async()=>{
       dispatch(setMessage(message_ref.current.value));
       dispatch(addRankFB({
        score: score,
        user_name: user_name,
        message: message_ref.current.value,
       })
       );
    //    dispatch(addRank({
    //        score: score,
    //        user_name: user_name,
    //        message: message_ref.current.value,
    //    })
    //    );
       
       history.push("/ranking");
   }}>한마디 남기고 랭킹 보러 가기</Button>
</Container>
   );
};

export default Message;

