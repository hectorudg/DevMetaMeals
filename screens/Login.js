import React, { Component, useState } from "react";
import { Image } from "expo-image";
import md5 from 'md5';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { Link } from "@react-navigation/native";
import { Linking } from "react-native";


export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      input1:"",
      input2:"",
      value:"",
    };
  }

  render(){
    const registration = () => {
        this.props.navigation.navigate('Register');
    };
    const validation = () => {
      var xhttp = new XMLHttpRequest();
      let _this=this;
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          _this.setState({value:xhttp.responseText});
          if(_this.state.value=="X"){
            Alert.alert("Invalid data. Verify and try again or register.");
          }else if(_this.state.value=="R"){
            Alert.alert("Activate your account using the link sent during registration.");
          }else{
            _this.props.navigation.navigate('Inicio');
          }
        }
      };
      xhttp.open("GET", "https://metameals.000webhostapp.com/Login.php?email="+this.state.input1+"&password="+md5(this.state.input2),true);
      xhttp.send();
  };

  return (
    <View style={styles.login}>
      <View style={styles.splashScreen}>
        <Image
          style={[styles.bgIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        
        <View style={[styles.backdrop, styles.backdropPosition]}>
        <Image
            style={[styles.backdropBaseIcon, styles.backdropIconLayout]}
            contentFit="cover"
            source={require("../assets/backdrop-base.png")}
          />
          <Text
            style={styles.text}
          >{`When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
`}</Text>
          <Text style={styles.title}>Non-Contact Deliveries</Text>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <View style={styles.buttontext}>
            <Text style={[styles.dismiss, styles.dismissTypo]}>dismiss</Text>
          </View>
          <View style={[styles.buttonprimary, styles.buttonprimaryBg]}>
            <Text style={[styles.orderNow, styles.orderFlexBox]}>
              order now
            </Text>
          </View>
        </View>
        <View style={styles.backdrop1}>
        <Image
            style={[styles.backdropBaseIcon1, styles.backdropIconLayout]}
            contentFit="cover"
            source={require("../assets/backdrop-base1.png")}
          />
          <Text style={styles.title1}>MetaMeals</Text>
          <TouchableOpacity style={styles.buttontext1}>
            <Text style={[styles.dismiss1, styles.dismiss2Typo]} 
                  onPress={() => navigation.navigate('SignUp')} >
              Registrarse
            </Text>
          </TouchableOpacity>
          <Pressable style={[styles.buttonprimary1, styles.buttonprimaryBg]}>
            <Text style={[styles.orderNow1, styles.dismiss1Typo]}
                  onPress={validation}>
              Iniciar sesion
            </Text>
          </Pressable>
          <View style={styles.backdropChild} />
        </View>
        <Image
          style={[styles.pngwing1Icon, styles.backdropPosition]}
          contentFit="cover"
          source={require("../assets/pngwing-1.png")}
        />

      <TextInput placeholder="Correo" 
                  style={[styles.splashScreenChild, styles.splashLayout]} 
                  onChangeText={(input1) => this.setState({ input1 })} />
      <TextInput placeholder="Contraseña" secureTextEntry={true} 
                 style={[styles.splashScreenItem, styles.splashLayout]}
                 onChangeText={(input2) => this.setState({ input2 })} />
      
  <View>
    {/* Logo udg */}
  <Image
          style={[styles.logoIcon1, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/logo1.png")}
        />
  </View>
  

      </View>
      <View style={[styles.container]}>
        <ImageBackground
          style={[styles.logo1Icon, styles.iconLayout ] }
          resizeMode="contain"
          source={require("../assets/logo12.png")}
        />
      </View>

    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top: 155,
    width: 50,
    left: 100
  },
  iconPosition1: {
    left: 10,
    position: "absolute",
  },
  backdropPosition: {
    display: "none",
    position: "absolute",
  },
  backdropIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: "50%",
    left: "50%",
  },
  dismissTypo: {
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    position: "absolute",
  },
  buttonprimaryBg: {
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  orderFlexBox: {
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  dismiss1Typo: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  dismiss2Typo: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    width: 100,
  },
  splashLayout: {
    height: 38,
    width: 257,
    backgroundColor: Color.colorGainsboro,
    left: 77,
    position: "absolute",
  },
  correoTypo: {
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    fontSize: FontSize.size_xs,
    left: 85,
    color: Color.colorBlack,
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 183,
    position: "absolute",
  },
  bgIcon: {
    top: 22,
    width: 1032,
    height: 976,
  },
  logoIcon: {
    top: 55,
    width: 89,
    height: 97,
  },
  backdropBaseIcon: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    marginTop: 5.5,
    marginLeft: -186,
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    width: 374,
    height: 79,
    textAlign: "center",
    color: Color.textSecondary,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  title: {
    marginLeft: -163,
    bottom: 312,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.textPrimary,
    width: 326,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
    lineHeight: 41,
    fontSize: FontSize.size_15xl,
    textAlign: "center",
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  icon: {
    marginTop: -227.5,
    marginLeft: -50,
    width: 104,
    height: 104,
    left: "50%",
    position: "absolute",
  },
  dismiss: {
    left: "0%",
    top: "0%",
    color: Color.textSecondary,
  },
  buttontext: {
    marginLeft: -33,
    top: 512,
    width: 64,
    height: 18,
    left: "50%",
    position: "absolute",
  },
  orderNow: {
    height: "42.86%",
    width: "70.87%",
    top: "28.57%",
    left: "15.38%",
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    position: "absolute",
  },
  buttonprimary: {
    top: 424,
    right: 20,
    left: 20,
    height: 56,
  },
  backdrop: {
    top: 271,
    bottom: 41,
    left: 0,
    right: 0,
  },
  backdropBaseIcon1: {
    right: -4,
    bottom: -8,
    left: -4,
  },
  title1: {
    marginLeft: -131.2,
    bottom: 272,
    fontFamily: FontFamily.montserratBold,
    width: 273,
    height: 63,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    lineHeight: 41,
    fontSize: FontSize.size_15xl,
    textAlign: "center",
    letterSpacing: 0,
    left: "50%",
    display: "none",
    position: "absolute",
  },
  dismiss1: {
    left: "-38.32%",
    top: "0%",
    color: Color.textSecondary,
  },
  buttontext1: {
    marginLeft: -27.6,
    top: 405,
    width: 54,
    height: 14,
    left: "50%",
    position: "absolute",
  },
  orderNow1: {
    height: "42.89%",
    width: "69.74%",
    top: "28.67%",
    left: "15.13%",
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  buttonprimary1: {
    top: 336,
    right: 18,
    left: 16,
    height: 44,
  },
  backdropChild: {
    top: 392,
    left: 185,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  backdrop1: {
    top: 194,
    right: 31,
    bottom: 219,
    left: 31,
    position: "absolute",
  },
  pngwing1Icon: {
    top: 219,
    left: 152,
    width: 107,
    height: 93,
  },
  splashScreenChild: {
    top: 389,
    paddingStart: 5
  },
  splashScreenItem: {
    top: 449,
    paddingStart: 5
  },
  correo: {
    top: 389,
  },
  contrasea: {
    top: 446,
  },
  logoIcon1: {
    top: 44,
    width: 100,
    height: 113,
  },
  splashScreen: {
    top: -22,
    left: -10,
    backgroundColor: Color.colorYellowgreen,
    width: 408,
    height: 875,
    position: "absolute",
    overflow: "hidden",
  },
  baseIcon: {
    marginTop: 55.6,
    marginLeft: 81.4,
    width: 17,
    height: 13,
    left: "50%",
    position: "absolute",
  },
  logo1Icon: {
    width: 195,
    top: 0,
    height: 183,
    left: 0,
  },
  icon1: {
    marginTop: -250,
    marginLeft: -100,
    width: 197,
    left: "50%",
    top: "50%",
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});



