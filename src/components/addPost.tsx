import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native'

const AddPost = () => {
    return (
        <View style={styles.addPostBlock}>
            <TextInput style={styles.input} placeholder='Title'/>
            <TextInput style={styles.input} placeholder='Body'/>
            <Button title='Add post'/>
        </View>
    );
};

const styles = StyleSheet.create({
    addPostBlock: {
        marginTop: 20,
        flexDirection: "column",
        alignItems: 'center',
    },
    input: {
        width: '70%',
        height: 30,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: '#3e41c4',
        borderRadius: 5,
        margin: 5,
        padding: 5,
    }
})

export default AddPost;