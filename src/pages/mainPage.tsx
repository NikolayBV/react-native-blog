import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../store/hooks";
import {fetchFullPosts} from "../store/postsSlice";
import Navbar from "../components/navbar";
import {StyleSheet, View} from "react-native";
import AddPost from "../components/addPost";
import PostsList from "../components/postsList";

const MainPage = () => {
    const appTitle = 'Blog App';
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    function changePage(page: number){
        setPage(page)
    };

    const dispatch = useAppDispatch();
    useEffect(() => {
        const obj = {page, limit}
        dispatch(fetchFullPosts(obj));
    }, [page]);

    return (
        <View>
            <Navbar title={appTitle}/>
            <View style={styles.container}>
                <PostsList/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    }
});


export default MainPage;