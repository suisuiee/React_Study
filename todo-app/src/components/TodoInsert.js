import React, {useCallback, useState} from "react";
import {MdAdd} from "react-icons/md";
import './TodoInsert.scss';

const TodoInsert = ( { onInsert }) => {
    // value : input의 입력값
    const [value, setValue] = useState('');

    // 한 번 함수를 만들고 재사용 할 수 있도록 useCallback Hook 사용
    const onChange = useCallback( e => {
        setValue(e.target.value);
        // console.log(`setValue ${e.target.value}`);
    },[]);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            // submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
            e.preventDefault();
        },[onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;