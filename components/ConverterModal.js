import React, { Component } from 'react';
import { Modal, View, Button } from 'react-native';
import ButtonDatePicker from './ButtonDatePicker';
import CurrencyExchange from './CurrencyExchange';

const ConverterModal = (props) => {

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.modalVisible}
                onRequestClose={() => props.setModalVisible(!props.modalVisible) }
            >
                <ButtonDatePicker date={props.date} selectNewDate={props.selectNewDate} />
                <CurrencyExchange result={props.result}/>

                <Button onPress={() => { props.setModalVisible(!props.modalVisible) }} title="К списку валют" />

            </Modal>
        </View>
    )
}
