import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const VerReceta = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState("ingredientes");
  const [rectangleTextInput1, setRectangleTextInput1] = useState("macros ");
  const [rectangleTextInput2, setRectangleTextInput2] =
    useState("instrucciones");

  return (
    <View style={styles.verReceta}>
      <View style={styles.splashScreen}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg3.png")}
        />
        <View style={styles.backdrop}>
          <Image
            style={styles.backdropBaseIcon}
            contentFit="cover"
            source={require("../assets/backdrop-base2.png")}
          />
          <Text style={styles.title}>MetaMeals</Text>
          <View style={[styles.buttontext, styles.buttontextPosition]}>
            <Text style={[styles.dismiss, styles.textTypo]}>Registrarse</Text>
          </View>
          <Pressable style={styles.buttonprimary}>
            <Text style={styles.orderNow}>aGregar Al recetario</Text>
          </Pressable>
          <View style={[styles.backdropChild, styles.buttontextPosition]} />
          <Text style={styles.ensaladaCesar}>Ensalada Cesar</Text>
          <Text style={[styles.pastaSalsaDe, styles.pastaSalsaDeTypo]}>
            Pasta, salsa de tomate, pimienta....
          </Text>
          <Text style={[styles.hervirAguaPicar, styles.pastaSalsaDeTypo]}>
            Hervir agua, picar tomate, calentar....
          </Text>
          <Text
            style={[styles.carbs10gProteina, styles.pastaSalsaDeTypo]}
          >{`Carbs: 10g
Proteina: 15g
Grasas: 10g`}</Text>
        </View>
        <Image
          style={styles.splashScreenChild}
          contentFit="cover"
          source={require("../assets/rectangle-6.png")}
        />
        <View style={[styles.splashScreenItem, styles.splashLayout]} />
        <View style={[styles.splashScreenItem, styles.splashLayout]} />
        <View style={[styles.splashScreenItem, styles.splashLayout]} />
        <View style={[styles.splashScreenItem, styles.splashLayout]} />
        <TextInput
          style={[styles.splashScreenItem, styles.splashLayout]}
          value={rectangleTextInput}
          onChangeText={setRectangleTextInput}
        />
        <TextInput
          style={[styles.splashScreenChild2, styles.splashLayout]}
          value={rectangleTextInput1}
          onChangeText={setRectangleTextInput1}
        />
        <TextInput
          style={styles.splashScreenChild3}
          value={rectangleTextInput2}
          onChangeText={setRectangleTextInput2}
        />
        <Text style={[styles.text, styles.textTypo]} />
      </View>
      <Image
        style={styles.verRecetaChild}
        contentFit="cover"
        source={require("../assets/rectangle-131.png")}
      />
      <Image
        style={[styles.verRecetaItem, styles.verLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-151.png")}
      />
      <Text style={[styles.buscar, styles.buscarTypo]}>
        <Text style={styles.buscar1}>Buscar</Text>
        <Text style={styles.text1}>...</Text>
      </Text>
      <Text style={[styles.buscar2, styles.buscarTypo]}>
        <Text style={styles.buscar1}>Buscar</Text>
        <Text style={styles.text1}>...</Text>
      </Text>
      <Image
        style={[styles.verRecetaInner, styles.verLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-211.png")}
      />
      <Text style={[styles.ingredientes, styles.macrosTypo]}>Ingredientes</Text>
      <Text style={[styles.intrucciones, styles.macrosTypo]}>Intrucciones</Text>
      <Text style={[styles.macros, styles.macrosTypo]}>Macros</Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.logoIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/logo2.png")}
      />
      <View style={[styles.icon, styles.iconLayout]}>
        <Image
          style={[styles.baseIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/base2.png")}
        />
        <Image
          style={[styles.logo1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/logo-1.png")}
        />
      </View>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1887041-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttontextPosition: {
    display: "none",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  pastaSalsaDeTypo: {
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  splashLayout: {
    height: 76,
    width: 311,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 50,
    position: "absolute",
  },
  verLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  buscarTypo: {
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    left: 60,
    top: 87,
    textAlign: "center",
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  macrosTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    display: "flex",
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  iconPosition: {
    top: "50%",
    left: "50%",
  },
  iconLayout: {
    height: 63,
    width: 79,
    position: "absolute",
  },
  bgIcon: {
    top: 5,
    width: 1032,
    height: 976,
    left: 9,
    position: "absolute",
  },
  backdropBaseIcon: {
    right: -4,
    bottom: -8,
    left: -4,
    maxWidth: "100%",
    maxHeight: "100%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  title: {
    marginLeft: -135.2,
    bottom: 472,
    fontSize: FontSize.size_15xl,
    width: 267,
    height: 108,
    justifyContent: "center",
    alignItems: "center",
    display: "none",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 41,
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  dismiss: {
    top: "0%",
    left: "-39.05%",
    color: Color.textSecondary,
  },
  buttontext: {
    marginLeft: -33.6,
    top: 688,
    width: 53,
    height: 24,
    left: "50%",
    display: "none",
  },
  orderNow: {
    height: "42.86%",
    width: "69.72%",
    top: "28.57%",
    left: "15.12%",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  buttonprimary: {
    top: 648,
    right: 54,
    left: 54,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryButton,
    height: 35,
    position: "absolute",
  },
  backdropChild: {
    top: 665,
    left: 185,
    width: 49,
    height: 85,
    overflow: "hidden",
  },
  ensaladaCesar: {
    top: 19,
    left: 82,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 41,
    letterSpacing: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  pastaSalsaDe: {
    top: 103,
    left: 34,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    lineHeight: 41,
  },
  hervirAguaPicar: {
    top: 238,
    left: 34,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    lineHeight: 41,
  },
  carbs10gProteina: {
    top: 523,
    left: 35,
    lineHeight: 20,
    textAlign: "left",
  },
  backdrop: {
    top: 26,
    right: 24,
    bottom: 57,
    left: 24,
    position: "absolute",
  },
  splashScreenChild: {
    top: 352,
    left: 126,
    width: 179,
    height: 23,
    position: "absolute",
  },
  splashScreenItem: {
    top: 132,
  },
  splashScreenChild2: {
    top: 541,
  },
  splashScreenChild3: {
    top: 263,
    height: 236,
    width: 311,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 50,
    position: "absolute",
  },
  text: {
    top: 232,
    left: 139,
    color: Color.colorBlack,
  },
  splashScreen: {
    top: -5,
    left: -9,
    backgroundColor: Color.colorYellowgreen,
    width: 408,
    height: 875,
    position: "absolute",
    overflow: "hidden",
  },
  verRecetaChild: {
    top: 570,
    left: 28,
    width: 339,
    height: 147,
    position: "absolute",
  },
  verRecetaItem: {
    top: 608,
    left: 70,
    width: 92,
    height: 16,
  },
  buscar1: {
    fontSize: FontSize.size_smi,
  },
  text1: {
    fontSize: FontSize.size_mini,
  },
  buscar: {
    color: Color.colorBlack,
  },
  buscar2: {
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    left: 60,
    top: 87,
  },
  verRecetaInner: {
    top: 611,
    left: 125,
    width: 65,
    height: 21,
  },
  ingredientes: {
    top: 100,
    width: 162,
    height: 23,
    left: 9,
  },
  intrucciones: {
    top: 220,
    left: 23,
    width: 141,
    height: 31,
  },
  macros: {
    top: 509,
    left: 18,
    width: 112,
    height: 21,
  },
  image1Icon: {
    top: 754,
    left: 278,
    width: 50,
    height: 49,
    position: "absolute",
  },
  logoIcon: {
    marginTop: 329,
    marginLeft: -179,
    width: 358,
    height: 1,
    position: "absolute",
  },
  baseIcon: {
    marginTop: 19.05,
    marginLeft: 32.75,
    width: 7,
    height: 5,
    position: "absolute",
  },
  logo1Icon: {
    left: 0,
    top: 0,
  },
  icon: {
    marginTop: 316.5,
    marginLeft: -41,
    top: "50%",
    left: "50%",
  },
  icon1: {
    top: 747,
    left: 43,
    width: 64,
    height: 64,
    position: "absolute",
  },
  verReceta: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 835,
    overflow: "hidden",
  },
});

export default VerReceta;
