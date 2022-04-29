import React, {useCallback} from "react";
import Todos from "../components/Todos";
import {connect, useDispatch, useSelector} from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/todos";
import useActions from "../lib/useAction";

/**
 * connect -> useSelector, useDispatch Hooks 를 사용하는 형태로 전환
 */
const TodosContainer = ( ) => {
    const { input, todos } = useSelector( ({ todos }) => ({
        input : todos.input,
        todos: todos.todos
    }));

    const [onChangeInput, onInsert, onToggle, onRemove ] = useActions(
        [changeInput, insert, toggle, remove],
        []
    );
    /*
    const dispatch = useDispatch();
    const onChangeInput = useCallback( input => dispatch(changeInput(input)), [
        dispatch
        ]);
    const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);
     */

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default TodosContainer;