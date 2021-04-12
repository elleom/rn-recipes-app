import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font'; // npm install --save expo-font
import MealsNavigator from "./navigation/MealsNavigator";
import {enableScreens} from 'react-native-screens';
import { createStore, combineReducers } from "redux";
import mealsReducer from './store/reducers/meals';
import {Provider} from 'react-redux'

enableScreens();

const rootReducer = combineReducers({
    meals: mealsReducer
});
const store = createStore(rootReducer);

const fetchFonts = () => {
    return Font.loadAsync(
        {
            'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
        }
    )
}

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
        return (<AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
            onError={(error) => console.log(error)}/>)
    }

    return (
        <Provide store={store}>
        <MealsNavigator /></Provide>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
