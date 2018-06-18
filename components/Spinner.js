import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Spinner = () => {
    return(
        <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="blue"/>
        </View>
    );
}

const styles = StyleSheet.create({
    spinnerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Spinner;