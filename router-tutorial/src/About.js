import React from "react";
import {useLocation, useSearchParams} from "react-router-dom";

const About = () => {
    // location 객체 반환, 현재 사용자가 보고 있는 페이지의 정보를 갖고있음.
    // const location = useLocation();
    // useSearchParams Hook을 통해 쿼리스트링을 쉽게 다룰 수 있다.
    // 배열 반환, 첫번째 원소 : 조회 or 수정 하는 메서드 담긴 객체 반환
    // 두번째 요소 : 겍체형태로 업데이트 할 수 있는 함수 반환
    const [searchParams, setSearchParams ] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({ mode, detail : detail === 'true' ? false : true });
    }

    const onIncreaseMode = () => {
        const nextMode = mode == null ? 1 : parseInt(mode) + 1;
        setSearchParams( { mode : nextMode, detail} );
    }

    return(
        <div>
            <h1>ABOUT</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
            <p>detail : {detail}</p>
            <p>mode : {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>

            {/* <p>쿼리스트링 : {location.search}</p> */}
        </div>
    );
};

export default About;