import React, { useState } from "react";

const IterationSample = () => {
    const [names,setNames] = useState([
        { id : 1, text : '눈사람'},
        { id : 2, text : '얼음'},
        { id : 3, text : '눈'},
        { id : 4, text : '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value); // input값 업데이트

    const onClick = () => {
        // push : 기존 배열 자체를 변경
        // concat : 새로운 배열을 만들어 줌
        // 리액트에서 상태를 업데이트 할 때는 기존상태를 그대로 두면서 새로운 값을 상태로 설정해야 함.
        // -> 불변성 유지
        const nextNames = names.concat({
            id: nextId, // nextId 값을 id 로 설정
            text : inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames); // names 값을 업데이트
        setInputText(''); // inputText를 비우기
    };

    const onRemove = id => {
        // filter : 배열읭 내장 함수, 불변성을 유지하면서 배열의 특정 항복을 지울 때 사용
        const nextNames = names.filter( name => name.id !== id);
        setNames(nextNames);
    };
    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={ () => onRemove(name.id)} >
                {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSample;



