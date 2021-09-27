import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { ProgressBar, HighLighting, Dot } from "./elements";

const Progress = (props) => {
    const quiz_list = useSelector((state) => state.quiz.quiz_list);
    const user_answer_list = useSelector((state) => state.quiz.user_answer_list);

    return(
    <ProgressBar>
        <HighLighting width={(user_answer_list.length/quiz_list.length)*100 +"%"}/>
        <Dot/>
    </ProgressBar>
    );
};

export default Progress;