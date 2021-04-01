import React from 'react';
import {View, Text, StyleSheet, Button, Platform, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import Colors from '../constants/Colors'
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId') //extracts the parameters we pass from the call navigator
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = (itemData) => {
        return(
            <MealItem
                title={itemData.item.title}
                onSelectMeal={() => {}}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity.toUpperCase()}
                affordability={itemData.item.affordability.toUpperCase()}
                image={itemData.item.imageUrl}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList style={styles.flatList} data={displayedMeals} renderItem={renderMealItem} />
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
    },
    flatList: {
        width: '100%'
    }
})

export default CategoryMealsScreen;