import React from 'react';
import {View, ScrollView, Button} from 'react-native';

const CurrencyScrollView = (props) => {
    if(props.result.length > 0){
        return(
            <View>
                <ScrollView horizontal={true} >
                    {props.result.map((currency, index) => <View  key={"top" + index} style={{width: props.width, margin: 10}}><Button  onPress={() => props.handleButtonTop(index)}  title={currency['Cur_Name']}/></View>)}
                </ScrollView>
            </View>
        );
    }
    return null;
}

export default CurrencyScrollView;
