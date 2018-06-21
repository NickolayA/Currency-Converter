import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    const {backgroundColor = "white"} = props;

    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderBottomWidth: 0}}>
            <View style={{ width: '33.33%', padding: 5, backgroundColor: backgroundColor }}>
                <Text style={{alignSelf: 'flex-start', color: props.fontColor || 'black'}}>{props.cn}</Text>
            </View>

            <View style={{ width: '33.33%', padding: 5, backgroundColor: backgroundColor }}>
                <Text style={{alignSelf: 'center', textAlign: 'center', color: props.fontColor || 'black'}}>{props.cs}</Text>
            </View>

            <View style={{ width: '33.33%', padding: 5, backgroundColor: backgroundColor }}>
                <Text style={{alignSelf: 'flex-end', color: props.fontColor || 'black'}}>{props.cor}</Text>
            </View>
        </View>
    );
}

export default Card;