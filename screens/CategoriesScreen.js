import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, Platform} from "react-native";
import CategoryMealsScreen from "./CategoryMealsScreen";
import {Dimensions} from "react-native";

import {CATEGORIES} from "../data/dummy-data";
import {TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {

    const renderGridItem = itemData => {
        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: { categoryId: itemData.item.id //pass on the id to select what to display

                    }})
            }}>
                <View style={styles.gridItem}>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return ( // latest rn does not need a keyExtractor on a FlatList component :)
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: Dimensions.get('window').height / 7, //window works better on android


    }


})

export default CategoriesScreen;