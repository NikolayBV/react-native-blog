import React from 'react';
import {View, Text} from "react-native";
import {useAppSelector} from "../store/hooks";

const PostsList = () => {
    const posts = useAppSelector(state => state.posts.posts);
    return (
        <View>
            {posts.map(post =>
            <View key={post.id}>
                <Text>{post.title}</Text>
                <Text>{post.body}</Text>
                <Text>{post.userName || post.author}</Text>
            </View>
            )};
        </View>
    );
};

export default PostsList;