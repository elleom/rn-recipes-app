import React from "react";
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";
import FavouritesScreen from "../screens/FavouritesScreen";
import {Ionicons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import FilterScreen from "../screens/FilterScreen";

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' //if none described then default
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen, // short form, no option specifications
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions

});

const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetails: MealDetailsScreen
}, {defaultNavigationOptions: defaultStackNavOptions})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>)
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favourites: {
        screen: FavNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>)
            },
            tabBarColor: Colors.accentColor
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true
        }
    )
    : createBottomTabNavigator(
        { // need specification over the
            //set identifier + object
            tabScreenConfig
        }, {
            tabBarOptions: {
                activeTintColor: Colors.accentColor,

            }
        }
    )

const filterStackNavigator = createStackNavigator({
    Filters: FilterScreen
}, {
    navigationOptions: {
        drawerLabel: 'Filter Meals'
    }, defaultNavigationOptions: defaultStackNavOptions
})

const MainDrawerNavigator = createDrawerNavigator({
    MealFavs: {
        screen: MealsFavTabNavigator, navigationOptions: {
            drawerLabel: 'All Meals'
        }
    },
    Filters: filterStackNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})


export default createAppContainer(MainDrawerNavigator); //important pattern



