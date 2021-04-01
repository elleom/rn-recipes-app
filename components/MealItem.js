import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from "react-native";
import {ImageBackground} from "react-native";

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>

                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>

                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetails}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordability}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'

    },
    mealHeader: {
        height: '90%'

    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bgImage: {
        width: '100%', //important to set on an image
        height: '100%', //important to set on an image
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',

    }
});

export default MealItem;