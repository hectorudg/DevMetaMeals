import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Inventario = () => {
  return (
    <View style={styles.inventario}>
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
          <View style={[styles.buttontext, styles.buttontextLayout]}>
            <Text style={[styles.dismiss, styles.text1Typo]}>Registrarse</Text>
          </View>
          <View style={styles.buttonprimary}>
            <Text style={[styles.orderNow, styles.orderNowFlexBox]}>
              Guardar
            </Text>
          </View>
          <View style={styles.backdropChild} />
          <Text style={[styles.inventarioEnLaContainer, styles.textFlexBox]}>
            <Text style={styles.inventarioEnLa}>Inventario en la cocina</Text>
            <Text style={styles.textTypo1}>{`  `}</Text>
          </Text>
        </View>
        <Image
          style={styles.splashScreenChild}
          contentFit="cover"
          source={require("../assets/rectangle-6.png")}
        />
        <View style={[styles.splashScreenItem, styles.inventarioItemLayout]} />
        <Text style={[styles.text1, styles.text1Position]} />
      </View>
      <Image
        style={styles.inventarioChild}
        contentFit="cover"
        source={require("../assets/rectangle-131.png")}
      />
      <View style={[styles.inventarioItem, styles.inventarioItemLayout]} />
      <View style={[styles.inventarioInner, styles.inventarioItemLayout]} />
      <View style={[styles.rectangleView, styles.buttontextLayout]} />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-151.png")}
      />
      <Text style={[styles.buscar, styles.buscarPosition]}>
        <Text style={styles.buscar1}>Buscar</Text>
        <Text style={styles.text2}>...</Text>
      </Text>
      <Text style={[styles.buscar2, styles.buscarPosition]}>
        <Text style={styles.buscar1}>Buscar</Text>
        <Text style={styles.text2}>...</Text>
      </Text>
      <Image
        style={[styles.inventarioChild1, styles.inventarioChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-211.png")}
      />
      <Image
        style={[styles.inventarioChild2, styles.inventarioChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Image
        style={[styles.inventarioChild3, styles.inventarioChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-24.png")}
      />
      <Image
        style={styles.inventarioChild4}
        contentFit="cover"
        source={require("../assets/rectangle-25.png")}
      />
      <Image
        style={[styles.inventarioChild5, styles.inventarioChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={[styles.inventarioChild6, styles.inventarioChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={[styles.inventarioChild7, styles.inventarioChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-28.png")}
      />
      <Image
        style={[styles.inventarioChild8, styles.verdurasPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-26.png")}
      />
      <Text style={[styles.todo, styles.otrosLayout]}>Todo</Text>
      <Text style={[styles.todo, styles.otrosLayout]}>Todo</Text>
      <Text style={[styles.frutas, styles.otrosLayout]}>Frutas</Text>
      <Text style={[styles.otros, styles.otrosLayout]}>Otros</Text>
      <Text style={[styles.verduras, styles.otrosLayout]}>Verduras</Text>
      <Text style={[styles.cereales, styles.otrosLayout]}>Cereales</Text>
      <Text style={[styles.carnes, styles.otrosLayout]}>Carnes</Text>
      <Text style={[styles.lacteos, styles.otrosLayout]}>Lacteos</Text>
      <Text style={[styles.categoria, styles.cantidadTypo]}>Categoria</Text>
      <Text style={[styles.cantidad, styles.cantidadLayout]}>Cantidad</Text>
      <Text style={[styles.cantidad1, styles.cantidad1Typo]}>Cantidad</Text>
      <Text style={[styles.categoria1, styles.frutas1Layout]}>Categoria</Text>
      <Text style={[styles.cantidad2, styles.cantidadTypo]}>Cantidad</Text>
      <Text style={[styles.categoria2, styles.cantidadTypo]}>Categoria</Text>
      <Text style={[styles.piezas, styles.otrosLayout]}>8 piezas</Text>
      <Text style={[styles.litros, styles.litrosTypo]}>2 litros</Text>
      <Text style={[styles.frutas1, styles.frutas1Layout]}>Frutas</Text>
      <Text style={[styles.piezas1, styles.otrosLayout]}>2 piezas</Text>
      <Text style={[styles.otros1, styles.otrosLayout]}>Otros</Text>
      <Text style={[styles.lacteos1, styles.litrosTypo]}>Lacteos</Text>
      <Text style={[styles.manzana, styles.lecheTypo]}>Manzana</Text>
      <Text style={[styles.manzana, styles.lecheTypo]}>Manzana</Text>
      <Text style={[styles.leche, styles.lecheTypo]}>Leche</Text>
      <Text style={[styles.mantequilla, styles.cantidadTypo]}>Mantequilla</Text>
      <Image
        style={[styles.ellipseIcon, styles.inventarioChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.inventarioChild9, styles.inventarioChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.inventarioChild10, styles.inventarioChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Text style={[styles.text4, styles.textFlexBox]}>
        <Text style={styles.text5}>
          <Text style={styles.text6}>+</Text>
        </Text>
        <Text style={styles.text7}>
          <Text style={styles.text5}>++</Text>
          <Text style={styles.text9}>+++</Text>
        </Text>
      </Text>
      <Text style={[styles.text10, styles.textTypo]}></Text>
      <Text style={[styles.text11, styles.textTypo]}></Text>
      <Text style={[styles.text12, styles.textTypo]}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttontextLayout: {
    height: 24,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    position: "absolute",
  },
  orderNowFlexBox: {
    display: "flex",
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0,
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  inventarioItemLayout: {
    height: 35,
    width: 307,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  text1Position: {
    top: 232,
    color: Color.colorBlack,
  },
  buscarPosition: {
    top: 87,
    left: 60,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    textAlign: "center",
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  inventarioChildLayout3: {
    height: 21,
    position: "absolute",
  },
  inventarioChildLayout1: {
    height: 19,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  verdurasPosition: {
    left: 147,
    top: 139,
  },
  otrosLayout: {
    width: 57,
    fontSize: FontSize.size_3xs,
    height: 19,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  cantidadTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  cantidadLayout: {
    left: 162,
    width: 57,
    fontSize: FontSize.size_3xs,
    height: 19,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  cantidad1Typo: {
    top: 267,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  frutas1Layout: {
    left: 238,
    width: 57,
    fontSize: FontSize.size_3xs,
    height: 19,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  litrosTypo: {
    top: 281,
    fontFamily: FontFamily.montserratRegular,
    width: 57,
    fontSize: FontSize.size_3xs,
    height: 19,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  lecheTypo: {
    width: 86,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    height: 21,
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
  inventarioChildLayout: {
    height: 27,
    width: 30,
    left: 310,
    position: "absolute",
  },
  textTypo: {
    left: 320,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.fontAwesome6Free,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
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
    top: 0,
    right: -4,
    bottom: -8,
    left: -4,
    maxWidth: "100%",
    maxHeight: "100%",
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
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
  },
  buttontext: {
    marginLeft: -33.6,
    top: 688,
    width: 53,
    display: "none",
    left: "50%",
    height: 24,
  },
  orderNow: {
    height: "42.93%",
    width: "69.78%",
    top: "28.53%",
    left: "15.11%",
    color: Color.colorWhite,
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    position: "absolute",
  },
  buttonprimary: {
    top: 725,
    right: 18,
    left: 198,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryButton,
    height: 39,
    position: "absolute",
  },
  backdropChild: {
    top: 665,
    left: 185,
    width: 49,
    height: 85,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  inventarioEnLa: {
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
  },
  textTypo1: {
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
  },
  inventarioEnLaContainer: {
    top: 19,
    left: 78,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    lineHeight: 41,
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
    width: 179,
    height: 23,
    left: 126,
    position: "absolute",
  },
  splashScreenItem: {
    top: 226,
    left: 48,
  },
  text1: {
    left: 139,
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    position: "absolute",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
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
  inventarioChild: {
    top: 570,
    left: 28,
    width: 339,
    height: 147,
    position: "absolute",
  },
  inventarioItem: {
    top: 270,
    left: 40,
  },
  inventarioInner: {
    left: 39,
    top: 323,
  },
  rectangleView: {
    top: 96,
    left: 50,
    backgroundColor: Color.colorBlack,
    width: 303,
    borderRadius: Border.br_3xs,
  },
  rectangleIcon: {
    top: 608,
    left: 70,
    width: 92,
    height: 16,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  buscar1: {
    fontSize: FontSize.size_smi,
  },
  text2: {
    fontSize: FontSize.size_mini,
  },
  buscar: {
    left: 60,
    color: Color.colorBlack,
  },
  buscar2: {
    left: 60,
    color: Color.colorWhite,
  },
  inventarioChild1: {
    top: 611,
    left: 125,
    width: 65,
    borderRadius: Border.br_3xs,
  },
  inventarioChild2: {
    width: 37,
    top: 139,
    borderRadius: Border.br_3xs,
    left: 40,
  },
  inventarioChild3: {
    left: 91,
    width: 43,
    top: 139,
    borderRadius: Border.br_3xs,
  },
  inventarioChild4: {
    left: 214,
    width: 61,
    height: 20,
    top: 139,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  inventarioChild5: {
    width: 56,
    height: 19,
    top: 173,
    left: 60,
  },
  inventarioChild6: {
    left: 127,
    width: 56,
    height: 19,
    top: 173,
  },
  inventarioChild7: {
    left: 284,
    width: 66,
    top: 140,
  },
  inventarioChild8: {
    width: 59,
    height: 19,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  todo: {
    left: 30,
    top: 139,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    color: Color.colorWhite,
  },
  frutas: {
    left: 84,
    top: 140,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    color: Color.colorWhite,
  },
  otros: {
    top: 173,
    fontSize: FontSize.size_3xs,
    left: 126,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    color: Color.colorWhite,
  },
  verduras: {
    left: 147,
    top: 139,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    color: Color.colorWhite,
  },
  cereales: {
    left: 216,
    top: 139,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    color: Color.colorWhite,
  },
  carnes: {
    left: 288,
    top: 139,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    color: Color.colorWhite,
  },
  lacteos: {
    top: 172,
    left: 59,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    color: Color.colorWhite,
  },
  categoria: {
    left: 236,
    top: 219,
    fontWeight: "600",
    width: 57,
    fontSize: FontSize.size_3xs,
    height: 19,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
    color: Color.colorBlack,
  },
  cantidad: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    top: 219,
  },
  cantidad1: {
    left: 162,
    width: 57,
    fontSize: FontSize.size_3xs,
    height: 19,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  categoria1: {
    top: 267,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  cantidad2: {
    left: 163,
    width: 57,
    fontSize: FontSize.size_3xs,
    height: 19,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
    top: 323,
    color: Color.colorBlack,
  },
  categoria2: {
    left: 239,
    width: 57,
    fontSize: FontSize.size_3xs,
    height: 19,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
    top: 323,
    color: Color.colorBlack,
  },
  piezas: {
    fontFamily: FontFamily.montserratRegular,
    left: 163,
    top: 232,
    color: Color.colorBlack,
  },
  litros: {
    left: 163,
  },
  frutas1: {
    top: 233,
    fontFamily: FontFamily.montserratRegular,
  },
  piezas1: {
    top: 339,
    left: 164,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
  },
  otros1: {
    top: 340,
    fontFamily: FontFamily.montserratRegular,
    left: 239,
    color: Color.colorBlack,
  },
  lacteos1: {
    left: 239,
  },
  manzana: {
    top: 228,
    left: 40,
  },
  leche: {
    top: 276,
    left: 30,
  },
  mantequilla: {
    top: 329,
    width: 112,
    height: 21,
    position: "absolute",
    left: 40,
    display: "flex",
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
    lineHeight: 41,
  },
  ellipseIcon: {
    top: 224,
  },
  inventarioChild9: {
    top: 273,
  },
  inventarioChild10: {
    top: 326,
  },
  text6: {
    fontFamily: FontFamily.montserratRegular,
  },
  text5: {
    fontSize: FontSize.size_17xl,
  },
  text9: {
    fontSize: FontSize.size_xs,
  },
  text7: {
    fontFamily: FontFamily.fontAwesome6Free,
  },
  text4: {
    top: 40,
    left: 327,
    color: Color.colorBlack,
    lineHeight: 41,
    position: "absolute",
  },
  text10: {
    top: 265,
  },
  text11: {
    top: 217,
  },
  text12: {
    top: 318,
  },
  inventario: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 835,
    overflow: "hidden",
  },
});

export default Inventario;
