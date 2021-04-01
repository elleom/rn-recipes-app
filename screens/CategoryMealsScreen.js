import React from 'react';
import {View, Text, StyleSheet, Button, Platform, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import Colors from '../constants/Colors'

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId') //extracts the parameters we pass from the call navigator
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = (itemData) => {
        return(
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} />
        </View>
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    //console.log(navigationData)
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;