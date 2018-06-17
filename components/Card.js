import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderBottomWidth: 0}}>
            <View style={styles.cell}>
                <Text style={{alignSelf: 'flex-start'}}>{props.cn}</Text>
            </View>

            <View style={styles.cell}>
                <Text style={{alignSelf: 'center', textAlign: 'center'}}>{props.cs}</Text>
            </View>

            <View style={styles.cell}>
                <Text style={{alignSelf: 'flex-end'}}>{props.cor}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cell: {
        width: "33%",
        backgroundColor: "white",
        padding: 5,
    }
})

export default Card;