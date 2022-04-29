import React, {useCallback} from "react";
import {connect, useDispatch, useSelector} from 'react-redux';
import Counter from "../components/Counter";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import { increase, decrease} from "../modules/counter";
import {bindActionCreators} from "redux";

const CounterContainer = ( ) => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback( () => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback( () => dispatch(decrease()), [dispatch]);
    return (
        <Counter number={number} onIncrease={ onIncrease } onDecrease={ onDecrease }/>
    );
};
// 리덕스 스토어 안의 상태 -> 컴포넌트 props로 전달하기 위한 함수
/*
const mapStateToProps = state => ({
    number : state.counter.number,
});

// 액션 생성 함수 -> 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
const mapDispatchToProps = dispatch => ({
    increase : () => {
        dispatch(increase());
    },
    decrease : () => {
        dispatch(decrease());
    },
});
*/
// 컴포넌트를 리덕스와 연동 -> connect() 함수 사용해야 한다.

export default connect(
    state => ({
        number: state.counter.number,
    }),{
        // 액션 생성 함수로 이루어지 객체 형태로 넣어줌.
        increase,
        decrease
    }
    /*
    // bindActionCreators 유틸 함수 이
    dispatch =>
        bindActionCreators(
            {
                increase,
                decrease,
            },
            dispatch,
        ),

     */
    /*
    // connect 내부의 익명 함수 형태로 선언
    dispatch => ({
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease()),
    }),*/

//    mapStateToProps,
//    mapDispatchToProps,
) (CounterContainer);