import { createStore } from "redux";

// DOM reference
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// Action type
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// Action creator ( 액션 객체는 반드시 type 이 있어야 함)
const toggleSwitch = () => ({ type : TOGGLE_SWITCH});
const increase = difference => ( { type:INCREASE, difference});
const decrease = () => ( { type:DECREASE } );

// 초기값 설정
const initialState = {
    toggle : false,
    counter:0
};

// 리듀서 함수 정의
// state 가 undefined 일 때는 initialState를 기본겂으로 사용
function reducer( state = initialState, action) {
    // action.type 에 따라 다른 작업을 처리함
    switch (action.type){
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지
                toggle : !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return{
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

// 스토어 만들기
const store = createStore(reducer);

// render 함수 만들기
// 이미 html 을 사용하여 만들어진 UI 의 속성을 상태에 따라 변경해
const render = () => {
    const state = store.getState(); // 현재 상태를 불러 온다.

    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
}; // render

render();
store.subscribe(render);

divToggle.onClick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onClick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onClick = () => {
    store.dispatch(decrease());
};


