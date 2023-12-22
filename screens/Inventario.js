import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import SelectBox from 'react-native-multi-selectbox';
import DropDownPicker from "react-native-dropdown-picker";
import { xorBy } from 'lodash';
import { color } from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';



const Inventario = () => {

  const [myIngredients, setMyIngredients]= useState("")
  const [myIngredientsArray, setMyIngredientsArray]= useState([])

 
  const onSubmitAddToList = () =>{
    var myIngredientsData = {
      id:new Date(),
      title: myIngredients,
    }

    setMyIngredientsArray([...myIngredientsArray,myIngredientsData])

    setMyIngredients('');
  };

  const renderItemList = ({item}) => {

    const onDeleteItem = (title) =>{
      const filterData = myIngredientsArray.filter(item => item.title !== title)
      setMyIngredientsArray(filterData)
    };
  
    return(
      <TouchableOpacity
       onPress={() => {

       }}>
      <View style={styles.buttonprimary2}>
        
        <View>
        <Text style={styles.item}> {item.title}</Text>
        </View>

        <View>
        <TouchableOpacity onPress={() => {
            onDeleteItem(item.title)
        }}
                          style={styles.circle_basura}>
          <Icon name="trash" size={20} color="white" />
        </TouchableOpacity>
        </View>
      </View>

    </TouchableOpacity>
    );
  }
  
  return (
    
     
    <View style={styles.inventario}>
      <View style={styles.splashScreen}>

        <View style={styles.backdrop}>
          <Image
            style={styles.backdropBaseIcon}
            contentFit="cover"
            source={require("../assets/backdrop-base2.png")}
          />

          <View style={styles.buttonprimary}>
            <Text style={[styles.orderNow, styles.orderNowFlexBox]}>
              Guardar
            </Text>
          </View>

          
            <TextInput
              value={myIngredients}
              keyboardType="default"
              placeholder="Ingresa un ingrediente..."
              placeholderTextColor={ Color.colorGray }
              style={[styles.rectangleView, styles.buttontextLayout]}
              onChangeText={value=>{
                setMyIngredients(value)
              }}
            />
          

          <TouchableOpacity 
            onPress={() => onSubmitAddToList()}>
            <View style={[styles.circulo ]} onPress={() => onSubmitAddToList()}>
             <Icon onPress={() => onSubmitAddToList()} name="arrow-right" size={20} color="white"/>
             </View>
          </TouchableOpacity>

          <FlatList 
            style={[styles.lista ]}
            data={myIngredientsArray}
            renderItem={renderItemList}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listaContainer}
          />

          <View style={styles.backdropChild} />
          <Text style={[styles.inventarioEnLaContainer, styles.textFlexBox]}>
            <Text style={styles.inventarioEnLa}>Inventario en la cocina</Text>
          </Text>
        </View>



      </View>
      {/* barra negra */}
      

    </View>
  );
          
};

const styles = StyleSheet.create({
  buttontextLayout: {
    height: 40,
    right:200,
    position: "absolute",
  },
  circle_basura: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item:{
    fontSize: 20, 
    color:"white", 
    marginRight: 30,
  },
  item2:{
    fontSize: 20, 
    color:"white", 
    marginLeft: 15,
  },
  lista: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    top: 180,
    width: 352,
    height: 500,
    position: "absolute",
  },
  listaContainer: {
    alignItems: 'center', // Esto alineará los elementos al centro horizontalmente
    justifyContent: 'center', // Esto alineará los elementos al centro verticalmente
    // Puedes ajustar otras propiedades de estilo según tus necesidades
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
  circulo: {
    width: 31,
    height: 31,
    left: 285,
    top: 80,
    borderRadius: 50,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    zIndex: 3
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
  buttonprimary2: {
    flexDirection: 'row',
    margin: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorBlack, 
    width: 340,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between', // Ajusta según tus necesidades
    alignItems: 'center',
    padding: 16,
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
    top: 40,
    right: 24,
    bottom: 57,
    left: 24,
    position: "absolute",
    height: 780,
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
    top: 75,
    left: 28,
    backgroundColor: Color.colorBlack,
    color: Color.colorWhite,
    paddingStart: 5,
    width: 303,
    height: 70,
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
