
const ADD_ANSWER = "quiz/ADD_ANSWER";

export function addAnswer(user_answer) {
    console.log("액션을 생성할거야");
    return {type: ADD_ANSWER, user_answer };
};

const initialState = {
    quiz_name: "아롱이",
    quiz_list : [
        {question : "나는 A형이다.", answer: false },
        {question : "나는 경제학과 전공이다.", answer: false},
        {question : "나는 기숙사 생활을 한적이 있다.", answer: true},
        {question : "나는 오이를 싫어한다.", answer: true},
        {question : "나는 빵을 좋아한다.", answer: true},
        {question : "나는 놀이기구를 좋아한다.", answer: false},
        {question : "나는 물에 빠진적이 있다.", answer: true},
        {question : "나는 한번 전학갔다.", answer: false},
        {question : "나는 어렸을때 잡지 편집장이 꿈이었다.", answer: true},
        {question : "나는 피구를 잘한다.", answer: false},
    ], user_answer_list: [],
};

export default function reducer(state = initialState, action={}){
    switch (action.type) {
        case "quiz/ADD_ANSWER": {
            console.log(action);
            const new_user_answer_list = [...state.user_answer_list, action.user_answer];

            console.log(new_user_answer_list);
            return {...state, user_answer_list: new_user_answer_list};
        }
        default:
            return state;       
    }
}