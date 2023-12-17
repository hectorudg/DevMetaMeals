import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignUp = ({ navigation }) => {
  const [rectangleTextInput, setRectangleTextInput] = useState("");
  const [rectangleTextInput1, setRectangleTextInput1] = useState("");
  const [rectangleTextInput2, setRectangleTextInput2] = useState("");

  return (
    <View style={styles.signUp}>
  
      <View style={[styles.backdrop, styles.backdropPosition]}>
        <Text
          style={styles.text}
        >{`When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
`}</Text>
        <Text style={styles.title}>Non-Contact Deliveries</Text>
        <View style={[styles.buttontext, styles.iconPosition]}>
          <Text style={[styles.dismiss, styles.dismissTypo]}>dismiss</Text>
        </View>
        <View style={[styles.buttonprimary, styles.buttonprimaryBg]}>
          <Text style={[styles.orderNow, styles.orderFlexBox]}>order now</Text>
        </View>
      </View>
      <View style={styles.backdrop1}>
        {/* pop up */}
        <Image
          style={[styles.backdropBaseIcon1, styles.backdropIconLayout]}
          contentFit="cover"
          source={require("../assets/backdrop-base1.png")}
        />
        <Text style={[styles.title1, styles.logoLayout]}>MetaMeals</Text>
        <View style={[styles.buttonprimary1, styles.buttonprimaryBg]}>
          <Text style={[styles.orderNow1, styles.dismiss1Typo]}
                onPress={() => navigation.navigate('Bienvenido')} >
            Registrase
          </Text>
        </View>
        <View style={styles.backdropChild} />
      </View>
      
      <TextInput
        style={[styles.signUpChild, styles.signLayout]}
        value={rectangleTextInput}
        onChangeText={setRectangleTextInput}
        placeholder="Correo"
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.signUpItem, styles.signLayout]}
        value={rectangleTextInput1}
        onChangeText={setRectangleTextInput1}
        placeholder="Nombre"
      />
      <TextInput
        style={[styles.signUpInner, styles.signLayout]}
        value={rectangleTextInput2}
        onChangeText={setRectangleTextInput2}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={[styles.logo, styles.logoLayout]}>
        
        <ImageBackground
          style={[styles.lgLogoUdgEnJpgOrig1Icon, styles.logoIconPosition]}
          resizeMode="cover"
          source={require("../assets/lglogoudgenjpg-orig-1.png")}
        />
      </View>

      <View style={[styles.container]}>
        <ImageBackground
          style={[styles.logo1Icon, styles.iconLayout ] }
          resizeMode="cover"
          source={require("../assets/logo12.png")}
        />
      </View>
    </View>

  );
};

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
  logoIconPosition: {
    left: 1,
    position: "absolute",
  },
  backdropPosition: {
    right: 0,
    left: 0,
  },
  backdropIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
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
    backgroundColor: Color.primaryButton,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  orderFlexBox: {
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  logoLayout: {
    height: 63,
    position: "absolute",
  },
  dismiss1Typo: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textDecoration: "underline",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  signLayout: {
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
    color: Color.colorBlack,
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  bgIcon: {
    width: 1032,
    height: 976,
    left: 0,
    top: 0,
    position: "absolute",
  },
  logoIcon: {
    top: 55,
    width: 98,
    height: 97,
  },
  backdropBaseIcon: {
    bottom: 0,
    right: 0,
    left: 0,
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
    top: "50%",
    left: "50%",
  },
  dismiss: {
    left: "4.69%",
    top: "0%",
    color: Color.textSecondary,
  },
  buttontext: {
    marginLeft: -33,
    top: 512,
    width: 64,
    height: 18,
  },
  orderNow: {
    height: "42.86%",
    width: "69.73%",
    top: "28.57%",
    left: "15.14%",
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
    display: "none",
    position: "absolute",
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
    color: Color.colorBlack,
    height: 63,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    lineHeight: 41,
    fontSize: FontSize.size_15xl,
    textAlign: "center",
    letterSpacing: 0,
    left: "50%",
    display: "none",
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
    display: "none",
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
    top: 370,
    right: 18,
    left: 16,
    height: 44,
  },
  backdropChild: {
    top: 392,
    left: 185,
    width: 50,
    height: 50,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  backdrop1: {
    top: 194,
    right: 20,
    bottom: 219,
    left: 31,
    position: "absolute",
    height: 450,
  },
  pngwing1Icon: {
    top: 219,
    left: 152,
    width: 107,
    height: 93,
    display: "none",
    position: "absolute",
  },
  signUpChild: {
    top: 437,
    paddingStart: 5
  },
  signUpItem: {
    top: 383,
    paddingStart: 5
  },
  signUpInner: {
    top: 491,
    paddingStart: 5
  },
  correo: {
    top: 436,
    left: 84,
  },
  nombre: {
    top: 382,
    left: 81,
  },
  contrasea: {
    top: 489,
    left: 83,
  },
  baseIcon: {
    top: -21,
    left: -22,
    width: 110,
    height: 113,
    position: "absolute",
  },
  lgLogoUdgEnJpgOrig1Icon: {
    top: 1,
    borderRadius: Border.br_25xl,
    width: 62,
    height: 60,
  },
  logo: {
    top: 65,
    left: 22,
    width: 63,
  },
  icon1: {
    marginTop: -235.5,
    marginLeft: -95,
    width: 196,
    height: 172,
    top: "50%",
    left: "50%",
  },
  signUp: {
    backgroundColor: Color.colorYellowgreen,
    flex: 1,
    width: "100%",
    height: 875,
    overflow: "hidden",
  },
  logo1Icon: {
    width: 195,
    top: 0,
    height: 183,
    left: 0,
  },
  iconLayout: {
    height: 183,
    position: "absolute",
  },
});

export default SignUp;
