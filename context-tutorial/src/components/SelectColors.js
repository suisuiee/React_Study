import React, {useContext, useState} from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo','violet'];

const SelectColors = () => {
    const { actions } = useContext(ColorContext);
    return (
        <div>
            <h2>색상을 선택하세요</h2>
            <div style={{display: "flex"}}>
                {colors.map(color => (
                    <div
                        key={color}
                        style={{
                            background: color, width: '24px',
                            height: '24px', cursor: 'pointer'
                        }}
                        onClick={ () => actions.setColor(color)} // 왼쪽 마우스 클릭
                        onContextMenu={ e => {
                            e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                            actions.setSubcolor(color);
                        }}
                    />
                ))}
            </div>
            <hr />
        </div>
    )};

export default SelectColors;