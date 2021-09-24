const SET_NAME = "user/SET_NAME";
const SET_COMMENT = "user/SET_COMMENT";

export const setName = (name) => {
    return {type: SET_NAME, name};
}
export const setComment = (comment) => {
    return {type: SET_COMMENT, comment};
}

const initialState = {
    user_name: "",
    user_comment: "",
}

export default function reducer(state = initialState, action={})
{
    switch(action.type) {
        case "user/SET_NAME": {
            console.log(action);
            return {...state, user_name: action.name};
        }
        case "user/SET_COMMENT": {
            console.log(action);
            return {...state, user_comment:action.comment};
        }
        default: return state;
    }
}