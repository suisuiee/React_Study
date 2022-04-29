// import { createAction } from 'redux-actions';

// action type 정의하기
import {createAction, handleAction, handleActions} from "redux-actions";

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
/*
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
*/
// redux-action 사용하기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
    number :0
};

// handleActions(액션 업데이트 함수, 파라미터 초기상태)
const counter = handleActions(
    {
        [INCREASE] : (state, action) => ({ number: state.number + 1 }),
        [DECREASE] : (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
)

/*
function counter( state = initialState, action ){
    switch (action.type){
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}*/

export default counter;

