import React from 'react';
import MealList from "../components/MealList";
import {useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {View, Text, StyleSheet} from "react-native";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if (favMeals.length === 0 || !favMeals){
        return (<View style={styles.text}>
            <DefaultText>Nothing to show!</DefaultText>
        </View>)
    }
    //const favMeals = availableMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2') //dummy logic
    return (
        <MealList displayedMeals={favMeals} navigation={props.navigation}/>
    )
};

FavoritesScreen.navigationOptions = navData => {
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

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default FavoritesScreen;