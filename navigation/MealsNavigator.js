import React from "react";
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";
import FavouritesScreen from "../screens/FavouritesScreen";
import {Ionicons} from "@expo/vector-icons";


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen, // short form, no option specifications
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' //if none described then default
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

const MealsFavTabNavigator = createBottomTabNavigator ({ // need specification over the
    //set identifier + object
    Meals : {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return ( <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />)
        }
        }},
    Favourites: FavouritesScreen

}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,

    }
})

export default createAppContainer(MealsFavTabNavigator); //important pattern



