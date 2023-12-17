import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const MiRecetario = () => {
  return (
    <View style={styles.miRecetario}>
      <View style={styles.splashScreen}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg2.png")}
        />
        <View style={styles.backdrop}>
          <Image
            style={styles.backdropBaseIcon}
            contentFit="cover"
            source={require("../assets/backdrop-base2.png")}
          />
          <Text style={styles.title}>MetaMeals</Text>
          <View style={[styles.buttontext, styles.buttontextPosition]}>
            <Text style={[styles.dismiss, styles.textTypo1]}>Registrarse</Text>
          </View>
          <View style={[styles.backdropChild, styles.buttontextPosition]} />
          <Text style={styles.miRecetario1}>Mi recetario</Text>
        </View>
        <Image
          style={styles.splashScreenChild}
          contentFit="cover"
          source={require("../assets/rectangle-6.png")}
        />
        <Image
          style={styles.splashScreenItem}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
        <Text style={[styles.text, styles.textTypo1]} />
      </View>
      <Image
        style={styles.miRecetarioChild}
        contentFit="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <View style={styles.miRecetarioItem} />
      <Image
        style={styles.miRecetarioInner}
        contentFit="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Text style={[styles.calorias, styles.caloriasTypo]}>Calorias</Text>
      <Text style={[styles.kcal, styles.kcalTypo]}>300kcal</Text>
      <Text style={[styles.ensaladaCesar, styles.papasAlHornoTypo]}>
        Ensalada Cesar
      </Text>
      <Text style={[styles.papasAlHorno, styles.papasAlHornoTypo]}>
        Papas al horno
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}></Text>
      <Text style={[styles.calorias1, styles.caloriasTypo]}>Calorias</Text>
      <Text style={[styles.kcal1, styles.kcalTypo]}>300kcal</Text>
      <Image
        style={[styles.miRecetarioChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}></Text>
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
  textTypo1: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  caloriasTypo: {
    height: 19,
    width: 57,
    display: "flex",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    left: 240,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  kcalTypo: {
    fontFamily: FontFamily.montserratRegular,
    left: 242,
    height: 19,
    width: 57,
    display: "flex",
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  papasAlHornoTypo: {
    width: 140,
    display: "flex",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    height: 21,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 27,
    width: 30,
    left: 314,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_xs,
    left: 323,
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
    left: 9,
    width: 1032,
    height: 976,
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
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 267,
    height: 108,
    justifyContent: "center",
    alignItems: "center",
    display: "none",
    textAlign: "center",
    color: Color.colorBlack,
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
  backdropChild: {
    top: 665,
    left: 185,
    width: 49,
    height: 85,
    overflow: "hidden",
  },
  miRecetario1: {
    top: 19,
    left: 114,
    fontSize: 20,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    textAlign: "center",
    lineHeight: 41,
    letterSpacing: 0,
    color: Color.colorBlack,
    position: "absolute",
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
    top: 108,
    left: 48,
    width: 318,
    height: 59,
    position: "absolute",
  },
  text: {
    top: 232,
    left: 139,
    color: Color.colorBlack,
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
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
  miRecetarioChild: {
    top: 570,
    left: 28,
    width: 339,
    height: 147,
    position: "absolute",
  },
  miRecetarioItem: {
    top: 192,
    backgroundColor: Color.colorGainsboro,
    width: 317,
    height: 53,
    left: 40,
    position: "absolute",
  },
  miRecetarioInner: {
    top: 608,
    left: 70,
    width: 92,
    height: 16,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleIcon: {
    top: 611,
    left: 125,
    width: 65,
    height: 21,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  calorias: {
    top: 120,
  },
  kcal: {
    top: 134,
  },
  ensaladaCesar: {
    top: 121,
    left: 40,
  },
  papasAlHorno: {
    top: 206,
    left: 39,
  },
  ellipseIcon: {
    top: 125,
  },
  text1: {
    top: 118,
  },
  calorias1: {
    top: 200,
  },
  kcal1: {
    top: 214,
  },
  miRecetarioChild1: {
    top: 205,
  },
  text2: {
    top: 198,
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
  miRecetario: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 835,
    overflow: "hidden",
  },
});

export default MiRecetario;
