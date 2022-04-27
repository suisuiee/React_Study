import React from "react";
import {Link, useParams} from "react-router-dom";

const data = {
    macBook: {
        name : '맥북',
        description : '애플 os 노트북'
    },
    gram: {
        name : '그램',
        description : 'LG window 노트북'
    }
}

// match : url 파라미터
const Profile = ( { match }) => {
    const params = useParams();
    const profile = data[params.username];

    return(
         <div>
            <h1>사용자 프로필</h1>
            { profile ? (
                <div>
                    <h3>{profile.name}</h3>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;