import React from "react";
import Sample from "../components/Sample";
import { connect } from "react-redux";
import { getPost, getUsers } from "../lib/api";

const { useEffect } = React;
const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    useEffect( () => {
        const fn = async () => {
            try{
                await getPost(1);
                await getUsers(1);
            }catch (e){
                console.log(e);
            }
        };
        fn();
    }, [getPost, getUsers]);
    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ( { sample, loading} ) => ({
        post:sample.post,
        users:sample.users,
        loadingPost : ['sample/GET_POST'],
        loadingUsers : ['sample/GET_USERS']
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);