import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setComment } from "./redux/modules/user";

import {Container, Button, Img, Highlight} from "./elements";
const Score = (props) => {
    const quiz_list = useSelector((state)=>state.quiz.quiz_list);
    const user_answer_list = useSelector((state)=>state.quiz.user_answer_list);
    const history = useHistory();
    const dispatch = useDispatch();
    const name_ref = React.useRef(null);

    const _score = 
    (100 / quiz_list.length) * 
    quiz_list.filter((q, idx) => {
        return q.answer === user_answer_list[idx];
    }).length;

    const score = Math.round(_score);

    return (
        <Container is_main>
        <h1><Highlight>{props.name}</Highlight>퀴즈에 대한 내 점수는?<br/>
            <Highlight>{score}</Highlight>점
        </h1>
        <p>나를 잘 아는 당신을 애정합니다!:)</p>
        <input ref={name_ref} style={{
                   border: "1px solid #dadafc",
                   borderRadius: "30px",
                   padding: "10px", 
                   width: "100%"
              }}/>
        <Button onClick = {() => {
                dispatch(setComment(name_ref.current.value));
                history.push("/");}}>{props.name}에게 한 마디</Button>
        </Container>
        );
};

export default Score;