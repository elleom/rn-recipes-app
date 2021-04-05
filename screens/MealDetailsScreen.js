import React from 'react';
import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';

import {MEALS} from '../data/dummy-data';
import HeaderButton from "../components/HeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.textTitle}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient =>
                <MealDetails key={ingredient}>{ingredient}</MealDetails>
            )}
            <Text style={styles.textTitle}>Steps</Text>
            {selectedMeal.steps.map(step => <MealDetails key={step}>{step}</MealDetails>)}
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favourite' iconName='ios-star' onPress={() => {
                    console.log('marked as favourite')
                }}/>
            </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,

    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'


    },
    textTitle: {
        fontFamily: 'open-sans',
        fontSize: 18,
        textAlign: 'center',

    }


});

export default MealDetailScreen;
