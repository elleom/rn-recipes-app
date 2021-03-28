import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";

const CategoryGridTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View style={{backgroundColor: props.color}}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: Dimensions.get('window').height / 7, //window works better on androidw
    }
})

export default CategoryGridTile;