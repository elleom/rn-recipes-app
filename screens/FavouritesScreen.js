import React from 'react';
import MealList from "../components/MealList";
import {useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavouritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favouriteMeals)

    //const favMeals = availableMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2') //dummy logic
    return (
        <MealList displayedMeals={favMeals} navigation={props.navigation}/>
    )
};

FavouritesScreen.navigationOptions = navData => {
    return ({
        headerTitle: 'My Favourites',
        headerLeft:
            () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Menu'
                    iconName={'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}/>
            </HeaderButtons>
    })
}


export default FavouritesScreen;