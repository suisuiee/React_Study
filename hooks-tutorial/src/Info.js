import React, { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // 뒷정리하기 : 컴포넌트가 언마운트되기 전에나 업데이트되기 직전에 어떠한 작업을 수행하고 싶을때 clearup 함수 반환
     useEffect( () => {
        console.log('effect');
        console.log('effect : ' + name);

        return () => {
            console.log('cleanup');
            console.log('cleanup : ' + name);
        }
    }); // 마운트 될때만 실행하고 싶을 때, 두 번째 파라미터로 비어있는 배열을 넣어주면 된다.

    /**
    // 특정 값이 업데이트될 때만 실행하고 싶을 때
    useEffect( () => {
        console.log(name);
    }, [name]); // 마운트 될때만 실행하고 싶을 때, 두 번째 파라미터로 비어있는 배열을 넣어주면 된다.
     */


    /***
     * //마운트될 때만 실행하고 싶을 때
     *
    useEffect( () => {
        console.log('마운트될 때만 실행됩니다.');
    }, []); // 마운트 될때만 실행하고 싶을 때, 두 번째 파라미터로 비어있는 배열을 넣어주면 된다.
     */


    /**
     *  // 기본(렌더링 될때마다 실행됨)
     *
    useEffect( () => {
        console.log('랜더링이 완료되었습니다!');
        console.log({
            name,
            nickname
        });
    });
     */

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} /> <br />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b> 이름 :</b> {name}
                </div>
                <div>
                    <b> 닉네임 :</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;