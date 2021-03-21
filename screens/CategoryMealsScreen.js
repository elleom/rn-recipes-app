import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";


const CategoryMealsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>This is the Categories Meals Screen</Text>
            <Button title='details' onPress={() => {props.navigation.navigate("MealDetails")}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;