import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>HOME</h1>
            <p>홈, 이 페이지는 가장 먼저 보여지는 페이지</p>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profile/macBook">macBook 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/gram">gram 프로필</Link>
                </li>
                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
            </ul>

        </div>
    );
};

export default Home;