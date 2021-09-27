import React from "react";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";
import { Container, Button, Img, Highlight } from "./elements";
import Progress from "./Progress";

const Quiz = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const quiz_list = useSelector((state) => state.quiz.quiz_list);
    const user_answer_list = useSelector((state) => state.quiz.user_answer_list);

    const setAnswer = (user_answer) => {
        dispatch(addAnswer(user_answer));
    };

    React.useEffect(() => {
        if(user_answer_list.length === quiz_list.length){
            history.push("/score");
            return;
        }
    }, [user_answer_list]);

    if(user_answer_list.length === quiz_list.length){
        return null;
    }

    return(
        <Container style={{ justifyContent: "center"}}>
            <div>
                <Progress/> 
                <p style={{ marginTop: "35px", marginBottom: "70px"}}>
                    <Highlight style={{ paddingLeft:"75px", paddingRight: "75px"}}>{user_answer_list.length +1}번 문제</Highlight>
                </p>
                <h3>{quiz_list[user_answer_list.length].question}</h3>
            </div>
            <div style={{ marginTop: "40px"}}>
                <Button onClick={()=>{
                    setAnswer(true);
                }}
                style = {{width: "50px", height: "50px", margin: "16px", paddingRight: "30px" }} >O</Button>
                <Button onClick={() => {
                setAnswer(false);
            }}
            style={{ width: "50px", height: "50px", margin: "16px", paddingRight: "30px" }} >
            X</Button>        
            </div>
        </Container>
        
        );
};
export default Quiz;