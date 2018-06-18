import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Modal, DatePickerAndroid } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import CurrencyExchange from './components/CurrencyExchange';
import CurrencyList from './components/CurrencyList';
import ButtonDatePicker from './components/ButtonDatePicker';
import ConverterModal from './components/ConverterModal';

export default class App extends React.Component {

  state = {
    result: [],
    date: new Date(),
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  getLinkToApi = (date = new Date()) => {
    date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return `http://www.nbrb.by/API/ExRates/Rates?onDate=${date}&Periodicity=0`;
  }

  fetchData = () => {
    fetch(this.getLinkToApi(this.state.date))
      .then(response => response.json())
      .then(result => {
        this.setState({
          result
        });
        return result;
      })
      .catch(() => {
        alert("Fuck FUck Fuck");
      });
  }

  selectNewDate = () => {
    DatePickerAndroid.open({
        date: this.state.date,
        maxDate: (new Date).setDate((new Date).getDate() + 1)
    }).then(response => {
      if(response['action'] !== DatePickerAndroid.dismissedAction){
        this.setState({
          date: new Date(response['year'], response['month'], response['day'])
        });
        this.fetchData();
      }
    });
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    return (
        <View style={styles.container}>
          <Button title="К конвертеру валют" onPress={() => this.setModalVisible(true)}/>
          <ButtonDatePicker date={this.state.date} selectNewDate={this.selectNewDate} />


          <ConverterModal 
            setModalVisible={this.setModalVisible} 
            modalVisible={this.state.modalVisible}
            date={this.state.date}
            result={this.state.result}
            selectNewDate={this.selectNewDate}
          />

          <CurrencyList result={this.state.result}/>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    flex: 1,

  },
  modal: {
    display: 'flex',
    alignItems: 'center'
  }
});
