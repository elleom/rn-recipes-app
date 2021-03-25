import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const CategoryGridTile = props => {
    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                    categoryId: itemData.item.id //pass on the id to select what to display
                }
            })
        }}>
            <View style={styles.gridItem}>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: Dimensions.get('window').height / 7, //window works better on android
    }
})

export default CategoryGridTile;