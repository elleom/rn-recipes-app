import React, {useCallback, useEffect} from 'react';
import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';

import {useSelector, useDispatch} from "react-redux";
import HeaderButton from "../components/HeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import MealDetails from "../components/MealDetails";
import {toggleFavorite} from "../store/actions/meals";

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const availableMeals = useSelector(state=> state.meals.meals)

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const dispatch = useDispatch();
    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);


    useEffect(() => { //prevents the infinite loop
        //props.navigation.setParams({mealTitle: selectedMeal.title}) //sends the title to the header when rendered
        props.navigation.setParams({toggleFav: toggleFavouriteHandler})
    }, [toggleFavouriteHandler()]) //when selectedMeals changes then info gets forwarded

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
    //const mealId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')

    //const selectedMeal = MEALS.find(meal => meal.id === mealId); //replaced with mealTitle
    return {
        headerTitle: mealTitle,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favourite' iconName='ios-star' onPress={toggleFavorite}/>
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
