import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import CategoryMealsScreen from "./CategoryMealsScreen";

import {CATEGORIES} from "../data/dummy-data";
import {TouchableOpacity} from "react-native";

const renderGridItem = itemData => {
    return (
        <TouchableOpacity>
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const CategoriesScreen = (props) => {
    return ( // latest rn does not need a keyExtractor on a FlatList component :)
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen;