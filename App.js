import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,Modal,TouchableHighlight,Alert} from 'react-native';
import {homeStyle} from './style/home';
import {fontsStyle} from "./style/fonts";
import {globalStyle} from "./style/global";
import AppHeader from "./components/AppHeader";
import ScanButton from "./components/ScanButton";
import ProductItem from "./components/ProductItem";
import { RNCamera } from 'react-native-camera';


export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      modalVisible: false
    }

    this.products = [
      {id: 1, name : 'Coca', date: new Date()},
      {id: 2, name : 'Orangina', date: new Date()},
      {id: 3, name : 'Nestea', date: new Date()},
      {id: 4, name : 'Bière sans alcool', date: new Date()}
    ];

    this.title = "Yiko"
  }


  handleScanPress = () => {
    this.setModalVisible(true)
    // alert('Je scan un produit')
  };

  setModalVisible = (bool) => {
    this.setState({modalVisible: bool});
  }

  handleProductPress = (id) => {
    alert('Je clique sur un produit avec l\'id : ' + id)
  };

  render() {
    return (
      <View style={globalStyle.container}>
        <AppHeader title={this.title}/>

        <ScanButton handlePress={this.handleScanPress}/>

        <ScrollView style={homeStyle.scrollProductView}>
          {
           this.products.map(
               (produit) => {
                 return (
                     <ProductItem product={produit} key={produit.id} onPressItem={this.handleProductPress}/>
                 )
               }
           )
          }
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{flex : 1}}>
            <AppHeader title="Scanner"/>
            <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{flex:1}}
          type={RNCamera.Constants.Type.back}
          
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          
          
        />

            
            <Text>Hello World!</Text>

            <TouchableHighlight
             style={{
              position: "absolute", 
              backgroundColor: "lightblue", 
              width: "100%",
              height: 70,
              left: 0, 
              bottom: 0}}
                >
                <Button 
                title="closeModal"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                
                >Hide Modal</Button>
              </TouchableHighlight>
            
          </View>
        </Modal>
      </View>
    );
  }
}
