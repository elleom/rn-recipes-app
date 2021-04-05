import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.title}</Text>
            <Switch
                trackColor={{true: Colors.primaryColor}}
                value={props.state} onValueChange={props.onChange()}/>
        </View>
    )


}

const FilterScreen = props => {
    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isLactoseFree, setLactoseFree] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch title={'Gluten-Free'} state={isGlutenFree} onChange={newValue => setGlutenFree(newValue)} />
            <FilterSwitch title={'Vegetarian'} state={isVegetarian} onChange={newValue => setVegetarian(newValue)} />
            <FilterSwitch title={'Vegan'} state={isVegan} onChange={newValue => setVegan(newValue)} />
            <FilterSwitch title={'Lactose-Free'} state={isLactoseFree} onChange={newValue => setLactoseFree(newValue)} />
        </View>
    )
};

FilterScreen.navigationOptions = navData => {
    return ({
            headerTitle: 'Filters',
            headerLeft:
                () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='Menu'
                        iconName={'ios-menu'}
                        onPress={() => {
                            navData.navigation.toggleDrawer();
                        }}/>
                </HeaderButtons>
        }
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "80%"


    }
})

export default FilterScreen;