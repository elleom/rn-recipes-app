import React from 'react';
import {View , Text, StyleSheet} from 'react-native';

const MealDetails = props => {
    return(
        <View style={styles.container}>
            <Text>{props.children}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
    }
})

export default MealDetails;