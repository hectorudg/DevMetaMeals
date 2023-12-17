import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GenerarReceta = () => {
  return (
    <View style={styles.generarReceta}>
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
          <View style={[styles.buttontext, styles.buttontextLayout]}>
            <Text style={[styles.dismiss, styles.text1Typo]}>Registrarse</Text>
          </View>
          <View style={styles.buttonprimary}>
            <Text style={[styles.orderNow, styles.orderNowFlexBox]}>
              Generar receta
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
        <View style={[styles.splashScreenItem, styles.itemLayout]} />
        <Text style={[styles.text1, styles.text1Position]} />
      </View>
      <Image
        style={styles.generarRecetaChild}
        contentFit="cover"
        source={require("../assets/rectangle-131.png")}
      />
      <View style={[styles.generarRecetaItem, styles.itemLayout]} />
      <View style={[styles.generarRecetaInner, styles.itemLayout]} />
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
      <View style={[styles.generarRecetaChild1, styles.generarChildLayout3]} />
      <Image
        style={[styles.generarRecetaChild2, styles.generarChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-211.png")}
      />
      <Image
        style={[styles.generarRecetaChild3, styles.generarChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Image
        style={[styles.generarRecetaChild4, styles.generarChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-24.png")}
      />
      <Image
        style={styles.generarRecetaChild5}
        contentFit="cover"
        source={require("../assets/rectangle-25.png")}
      />
      <Image
        style={[styles.generarRecetaChild6, styles.generarChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={[styles.generarRecetaChild7, styles.generarChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={[styles.generarRecetaChild8, styles.generarChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-28.png")}
      />
      <Image
        style={[styles.generarRecetaChild9, styles.verdurasPosition]}
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
        style={[styles.ellipseIcon, styles.generarChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.generarRecetaChild10, styles.generarChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.generarRecetaChild11, styles.generarChildLayout]}
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
  itemLayout: {
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
  generarChildLayout3: {
    height: 21,
    position: "absolute",
  },
  generarChildLayout1: {
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
  generarChildLayout: {
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
    width: "69.72%",
    top: "28.54%",
    left: "15.11%",
    color: Color.colorWhite,
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    position: "absolute",
  },
  buttonprimary: {
    top: 641,
    right: 96,
    left: 88,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryButton,
    height: 41,
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
  generarRecetaChild: {
    top: 570,
    left: 28,
    width: 339,
    height: 147,
    position: "absolute",
  },
  generarRecetaItem: {
    top: 270,
    left: 40,
  },
  generarRecetaInner: {
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
  generarRecetaChild1: {
    top: 580,
    left: 47,
    width: 65,
    height: 21,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  generarRecetaChild2: {
    top: 611,
    left: 125,
    width: 65,
    height: 21,
    borderRadius: Border.br_3xs,
  },
  generarRecetaChild3: {
    width: 37,
    top: 139,
    borderRadius: Border.br_3xs,
    left: 40,
  },
  generarRecetaChild4: {
    left: 91,
    width: 43,
    top: 139,
    borderRadius: Border.br_3xs,
  },
  generarRecetaChild5: {
    left: 214,
    width: 61,
    height: 20,
    top: 139,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  generarRecetaChild6: {
    width: 56,
    height: 19,
    top: 173,
    left: 60,
  },
  generarRecetaChild7: {
    left: 127,
    width: 56,
    height: 19,
    top: 173,
  },
  generarRecetaChild8: {
    left: 284,
    width: 66,
    top: 140,
  },
  generarRecetaChild9: {
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
  generarRecetaChild10: {
    top: 273,
  },
  generarRecetaChild11: {
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
  generarReceta: {
    flex: 1,
    width: "100%",
    height: 835,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default GenerarReceta;
