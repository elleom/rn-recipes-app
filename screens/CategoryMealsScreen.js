import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import Colors from '../constants/Colors'
import {FlatList} from "react-native-web";

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId') //extracts the parameters we pass from the call navigator
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return (
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>

            <Button title='details' onPress={() => {
                props.navigation.navigate("MealDetails")
            }}/>
        </View>
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    //console.log(navigationData)
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' //if none described then default
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
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