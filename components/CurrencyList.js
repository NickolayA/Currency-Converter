import React from 'react';
import { View, FlatList, Button } from 'react-native';
import Card from './Card';

const CurrencyList = (props) => {
   return (
       <View style={{flex: 1}}>
            <Card cn="Наименование иностранной валюты" cs="Количество единиц иностранной валюты, буквенный код валюты" cor="Официальный курс" />
            <FlatList 
                data={props.result}
                renderItem={({item}) => <Card cn={item['Cur_Name']} cs={item['Cur_Scale']} cor={item['Cur_OfficialRate']} />}
                
                keyExtractor={item => item['Cur_ID'].toString()}
            />
        </View>
   );
}

export default CurrencyList;
