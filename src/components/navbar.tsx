import React from 'react';
import {View, Text, StyleSheet} from "react-native";

interface NavbarParam {
    title: string,
}

const Navbar = (props: NavbarParam) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
   navbar: {
       alignItems: "center",
       justifyContent: 'flex-end',
       paddingBottom: 15,
       height: 90,
       backgroundColor: '#3e41c4'
   },
    text: {
        fontSize: 20,
        color: '#000',
    }
});

export default Navbar;