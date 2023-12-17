import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AgregarIngrediente = () => {
  return (
    <View style={styles.agregarIngrediente}>
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
            source={require("../assets/backdrop-base4.png")}
          />
          <Text style={styles.title}>MetaMeals</Text>
          <View style={[styles.buttontext, styles.lineIconPosition]}>
            <Text style={[styles.dismiss, styles.textTypo]}>Registrarse</Text>
          </View>
          <View style={styles.buttonprimary}>
            <Text style={[styles.orderNow, styles.todoFlexBox]}>Guardar</Text>
          </View>
          <View style={[styles.backdropChild, styles.lineIconPosition]} />
          <Text style={[styles.agregarIngrediente1, styles.todoFlexBox]}>
            Agregar Ingrediente
          </Text>
        </View>
        <Image
          style={styles.splashScreenChild}
          contentFit="cover"
          source={require("../assets/rectangle-6.png")}
        />
        <TextInput style={[styles.splashScreenItem, styles.rectangleLayout]} />
        <TextInput style={[styles.splashScreenInner, styles.rectangleLayout]} />
        <TextInput
          style={[styles.rectangleTextinput, styles.rectangleLayout]}
        />
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.text, styles.textTypo]} />
        <Image
          style={[styles.lineIcon, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
      </View>
      <Image
        style={styles.agregarIngredienteChild}
        contentFit="cover"
        source={require("../assets/rectangle-131.png")}
      />
      <Image
        style={styles.agregarIngredienteItem}
        contentFit="cover"
        source={require("../assets/rectangle-151.png")}
      />
      <Image
        style={styles.agregarIngredienteInner}
        contentFit="cover"
        source={require("../assets/rectangle-211.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.todoLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <Text style={[styles.todo, styles.todoLayout]}>Todo</Text>
      <Text style={[styles.cantidad, styles.cantidadTypo]}>Cantidad</Text>
      <Text style={[styles.unidadDeMedida, styles.categoriaTypo]}>
        Unidad de medida
      </Text>
      <Text style={[styles.categoria, styles.categoriaTypo]}>Categoria</Text>
      <Text style={[styles.nombreDelArticulo, styles.cantidadTypo]}>
        Nombre del articulo
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.text1Position]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Text style={[styles.text1, styles.text1Position]}>{`  `}</Text>
      <Text style={[styles.text2, styles.textLayout]}></Text>
      <Text style={[styles.text3, styles.textLayout]}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconPosition: {
    display: "none",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  todoFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0,
  },
  rectangleLayout: {
    height: 35,
    width: 307,
    backgroundColor: Color.colorGainsboro,
    left: 51,
    position: "absolute",
  },
  todoLayout: {
    height: 19,
    position: "absolute",
  },
  cantidadTypo: {
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
  categoriaTypo: {
    height: 18,
    width: 171,
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
  text1Position: {
    top: 47,
    position: "absolute",
  },
  textLayout: {
    height: 60,
    width: 74,
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_5xl,
    left: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    maxWidth: "100%",
    maxHeight: "100%",
    left: -4,
    position: "absolute",
    overflow: "hidden",
  },
  title: {
    marginLeft: -135.7,
    bottom: 208,
    fontSize: FontSize.size_15xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 267,
    height: 107,
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
    textAlign: "center",
    letterSpacing: 0,
  },
  buttontext: {
    marginLeft: -34.1,
    top: 684,
    width: 53,
    height: 24,
    left: "50%",
    display: "none",
  },
  orderNow: {
    height: "43.01%",
    width: "69.78%",
    top: "28.5%",
    left: "15.11%",
    color: Color.colorWhite,
    display: "flex",
    fontFamily: FontFamily.aBeeZeeRegular,
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  buttonprimary: {
    top: 470,
    right: 20,
    left: 197,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryButton,
    height: 39,
    position: "absolute",
  },
  backdropChild: {
    top: 661,
    left: 185,
    width: 49,
    height: 84,
    overflow: "hidden",
  },
  agregarIngrediente1: {
    top: 19,
    left: 87,
    fontSize: FontSize.size_base,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtraBold,
    width: 182,
    height: 41,
    color: Color.colorBlack,
    lineHeight: 41,
    position: "absolute",
  },
  backdrop: {
    top: 26,
    right: 23,
    bottom: 322,
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
    top: 142,
  },
  splashScreenInner: {
    top: 224,
  },
  rectangleTextinput: {
    top: 307,
  },
  rectangleView: {
    top: 388,
  },
  text: {
    top: 232,
    left: 139,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
  },
  lineIcon: {
    top: 96,
    width: 361,
    height: 0,
    left: 24,
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
  agregarIngredienteChild: {
    top: 570,
    left: 28,
    width: 339,
    height: 147,
    position: "absolute",
  },
  agregarIngredienteItem: {
    top: 608,
    left: 70,
    width: 92,
    height: 16,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  agregarIngredienteInner: {
    top: 611,
    left: 125,
    width: 65,
    height: 21,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleIcon: {
    top: 160,
    left: 242,
    width: 56,
    borderRadius: Border.br_3xs,
  },
  todo: {
    top: 139,
    left: 30,
    fontSize: FontSize.size_3xs,
    fontWeight: "100",
    fontFamily: FontFamily.montserratThin,
    width: 57,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorWhite,
    lineHeight: 41,
  },
  cantidad: {
    top: 189,
    left: 36,
    width: 86,
    height: 21,
  },
  unidadDeMedida: {
    top: 276,
    left: 32,
  },
  categoria: {
    top: 358,
    left: -4,
  },
  nombreDelArticulo: {
    top: 100,
    left: 33,
    width: 177,
    height: 30,
  },
  ellipseIcon: {
    left: 323,
    width: 30,
    height: 27,
  },
  text1: {
    left: 324,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.montserratRegular,
    transform: [
      {
        rotate: "-46.94deg",
      },
    ],
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
    lineHeight: 41,
  },
  text2: {
    top: 290,
  },
  text3: {
    top: 367,
  },
  agregarIngrediente: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 835,
    overflow: "hidden",
  },
});

export default AgregarIngrediente;
