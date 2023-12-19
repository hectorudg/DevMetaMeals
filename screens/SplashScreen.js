import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ImageBackground,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.splashScreen1}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
        <View style={styles.backdrop}>
          <Image
            style={[styles.backdropBaseIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/backdrop-base.png")}
          />
          <Text
            style={styles.text}
          >{`When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
`}</Text>
          <Text style={[styles.title, styles.titleFlexBox]}>
            Non-Contact Deliveries
          </Text>
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
            style={[styles.backdropBaseIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/backdrop-base1.png")}
          />
          <Text style={styles.title1}>MetaMeals</Text>
          <View style={styles.buttontext1}>
            <Text style={[styles.dismiss1, styles.dismiss1Typo]}>
              Registrarse
            </Text>
          </View>
          <Pressable style={[styles.buttonprimary1, styles.buttonprimaryBg]}>
            <Text style={[styles.orderNow1, styles.dismiss1Typo]}>
              Iniciar sesion
            </Text>
          </Pressable>
          <View style={styles.backdropChild} />
        </View>
        <Image
          style={styles.pngwing1Icon}
          contentFit="cover"
          source={require("../assets/pngwing-1.png")}
        />
        <TextInput style={[styles.splashScreenChild, styles.splashLayout]} />
        <TextInput style={[styles.splashScreenItem, styles.splashLayout]} />
        <Text style={[styles.correo, styles.correoTypo]}>Correo</Text>
        <Text style={[styles.createdBy, styles.correoTypo]}>Created By</Text>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo1.png")}
        />
      </View>
      <View style={[styles.icon1, styles.iconLayout]}>
        <Image
          style={[styles.baseIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/base1.png")}
        />
        <ImageBackground
          style={[styles.logo1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/logo11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition1: {
    top: 0,
    left: 0,
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
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
  dismiss1Typo: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  splashLayout: {
    height: 38,
    width: 257,
    backgroundColor: Color.colorGainsboro,
    left: 77,
    display: "none",
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
  iconLayout: {
    height: 293,
    width: 287,
    position: "absolute",
  },
  bgIcon: {
    top: 15,
    left: 18,
    width: 1032,
    height: 976,
    position: "absolute",
  },
  backdropBaseIcon: {
    bottom: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
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
    fontWeight: "700",
    lineHeight: 41,
    fontSize: FontSize.size_15xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
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
    left: "4.69%",
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
    left: 0,
    right: 0,
    position: "absolute",
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
    display: "none",
    position: "absolute",
  },
  pngwing1Icon: {
    top: 219,
    left: 152,
    width: 107,
    height: 93,
    display: "none",
    position: "absolute",
  },
  splashScreenChild: {
    top: 389,
  },
  splashScreenItem: {
    top: 449,
  },
  correo: {
    left: 85,
    top: 389,
    display: "none",
  },
  createdBy: {
    top: 665,
    left: 155,
    width: 98,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  logoIcon: {
    top: 692,
    left: 149,
    width: 113,
    height: 113,
    position: "absolute",
  },
  splashScreen1: {
    top: -15,
    left: -18,
    backgroundColor: Color.colorYellowgreen,
    width: 408,
    height: 875,
    position: "absolute",
    overflow: "hidden",
  },
  baseIcon: {
    marginTop: 78.4,
    marginLeft: 45.4,
    width: 22,
    height: 19,
    left: "50%",
    position: "absolute",
  },
  logo1Icon: {
    top: 0,
    left: 0,
  },
  icon1: {
    marginTop: -246,
    marginLeft: -143,
    left: "50%",
    top: "50%",
  },
  splashScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SplashScreen;
