import React from 'react';
import {Text, View} from 'react-native';


const SelectedCurrency = (props) => {
    if(props.result.length > 0){
        return (
            <View style={{alignSelf: 'center'}}>
                <Text>Выбранная валюта {props.pretext}: {props.result[props.selectedCurrencyIndex]['Cur_Name']}</Text>
            </View>
        );
    }
    return null;
}

export default SelectedCurrency;