import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const ConverterWindow = (props) => {

    return (
        <View>
            <TextInput 
                keyboardType="numeric" 
                textAlign="center" 
                placeholder={props.placeholder}
                value={props.numCurrency} 
                onChangeText={props.onChangeCurrency} 
            />
        </View>
    );
}


export default ConverterWindow;