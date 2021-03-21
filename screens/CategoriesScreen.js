import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import CategoryMealsScreen from "./CategoryMealsScreen";

const CategoriesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Button title="Go to meals" onPress={() => {props.navigation.navigate('CategoryMeals')}}/>
            <Text>This is the Categories Screen</Text>
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

export default CategoriesScreen;