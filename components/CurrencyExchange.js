import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Button, StyleSheet, TextInput } from 'react-native';
import ConverterWindow from './ConverterWindow';
import ResultOfConvertation from './ResultOfConvertation';
import SelectedCurrency from './SelectedCurrency';
import CurrencyScrollView from './CurrencyScrollView';

export default class CurrencyExchange extends Component {

    state = {
        topCurrencyIndex: 0,
        bottomCurrencyIndex: 0,
        numOfTopCurrency: 0,
        numOfBottomCurrency: 0
    }

    handleButtonTop = (index) => {
        this.setState({
            topCurrencyIndex: index
        });
    }   

    handleButtonBottom = (index) => {
        this.setState({
            bottomCurrencyIndex: index
        });
    }

    onChangeTopNumOfCurrency = val => {
        this.setState({
            numOfTopCurrency: val
        });
    }

    // onChangeBottomNumOfCurrency = val => {
    //     this.setState({
    //         numOfBottomCurrency: val
    //     });
    // }

    render(){
        const { height, width } = Dimensions.get('window');
        return (
            <View style={{justifyContent: 'space-between', flex: 1}}>

                <CurrencyScrollView result={this.props.result} width={width} handleButtonTop={this.handleButtonTop} />

                <SelectedCurrency pretext="из" selectedCurrencyIndex={this.state.topCurrencyIndex} result={this.props.result}/>

                <ConverterWindow placeholder="Введите число единиц валюты для конвертации" numCurrency={this.state.numOfTopCurrency} onChangeCurrency={this.onChangeTopNumOfCurrency} />

                <ResultOfConvertation numOfCurrencyConvertFrom={this.state.numOfTopCurrency} topCurrencyIndex={this.state.topCurrencyIndex} bottomCurrencyIndex={this.state.bottomCurrencyIndex} result={this.props.result}/>

                <SelectedCurrency pretext="в" selectedCurrencyIndex={this.state.bottomCurrencyIndex} result={this.props.result}/>

                <CurrencyScrollView result={this.props.result} width={width} handleButtonTop={this.handleButtonBottom} />
            </View>
        );
    }
}
