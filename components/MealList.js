import React from 'react'
import {View, FlatList, StyleSheet, Text} from 'react-native'
import MealItem from "./MealItem";
import {useSelector} from "react-redux";

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id) //if some() item has the same Id
        // returns true
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetails',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title, //used to send data before the component loads
                            isFav: isFavorite,
                        }
                    });
                }}
            />
        );
    };
    return (
        <View style={styles.screen}>
            <FlatList
                data={props.displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
})

export default MealList