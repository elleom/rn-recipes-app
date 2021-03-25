import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";

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

export default createAppContainer(MealsNavigator); //important pattern



