import React, { useEffect, useState } from "react";
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
import { color, cos } from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';


const GenerarReceta = ( { navigation, route }) => {
  const userId = route.params?.userId || 0;

  const [myIngredients, setMyIngredients]= useState("")
  const [myIngredientsArray, setMyIngredientsArray]= useState([])


  useEffect(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var response = this.responseText;
        const jsonObject = JSON.parse(response);
        const jsoningre = JSON.parse(jsonObject.ingredients);
        setMyIngredientsArray(jsoningre)
    }
  };
    
    xhttp.open("GET", "https://metameals.000webhostapp.com/GetIngredients.php?userId=" + userId, true);
    xhttp.send();
  },[]);


  const onSubmitAddToList = () =>{

    var myIngredientsData = {
      id:new Date(),
      title: myIngredients,
    }

    setMyIngredientsArray([...myIngredientsArray,myIngredientsData]);
    setMyIngredients('');

    var myIngredientsData = {
      id:new Date(),
      title: myIngredients,
    }

    setMyIngredientsArray([...myIngredientsArray,myIngredientsData]);
    setMyIngredients('');

    myIngredientsArray.push(myIngredientsData);
    
    const cadenaIngredientes = JSON.stringify(myIngredientsArray);

    if(cadenaIngredientes == ""){
      Alert.alert("Ingresa al menos un ingrediente");
    }
    else{
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "https://metameals.000webhostapp.com/UpdateIngredients.php?&ingredients="+cadenaIngredientes+"&user_id="+userId,true);
      xhttp.send();
    }
  };


  const renderItemList = ({item}) => {
    
    const onDeleteItem = (title) =>{
      const filterData = myIngredientsArray.filter(item => item.title !== title)
      setMyIngredientsArray(filterData)

      const cadenaIngredientes = JSON.stringify(myIngredientsArray);

      if(cadenaIngredientes == ""){
        Alert.alert("Ingresa al menos un ingrediente");
      }
      else{
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://metameals.000webhostapp.com/UpdateIngredients.php?&ingredients="+cadenaIngredientes+"&user_id="+userId,true);
        xhttp.send();
      }
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
    <View style={styles.inicio}>
      <View style={styles.splashScreen}>

      
          <Text style={[styles.inventarioEnLaContainer, styles.textFlexBox]}>
            <Text style={styles.inventarioEnLa}>Inventario en la cocina</Text>
          </Text>

          <TextInput
              value={myIngredients}
              keyboardType="default"
              placeholder="Ingresa un ingrediente..."
              placeholderTextColor={ Color.colorGray }
              style={[styles.rectangleView_input, styles.buttontextLayout]}
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
    
        <TouchableOpacity style={styles.buttonprimary}>
          <Text style={[styles.orderNow, styles.orderNowFlexBox]}>
            Generar Receta
          </Text>
        </TouchableOpacity>
        
        {/* recetario imagen */}
        <TouchableOpacity style={[styles.image1Icon, styles.image1IconLayout]} onPress={() => navigation.navigate('MiRecetario')}>
        <Image
          style={{  width: 57, height: 57,}}
          source={require("../assets/image-1.png")}
        />
        </TouchableOpacity>

      {/* Icono central IA */}
      <TouchableOpacity style={[styles.icon1, styles.icon1Position]} onPress={() => navigation.navigate('GenerarReceta', {userId: userId})}>
      <Image
        style={{  width: 75, height: 75,}}
        contentFit= "contain"
        source={require("../assets/icon2.png")}
      />
      </TouchableOpacity>
 
      {/* icono home */}
      <TouchableOpacity style={[styles.icon2, styles.icon2Layout]}
                          onPress={() => navigation.navigate('Inicio', {userId: userId})}>
        <Image
          style={{  width: 67, height: 67, top: -3}}
          contentFit= "contain"
          source={require("../assets/1887041-1.png")}
        />
        </TouchableOpacity>

<View style={styles.bienvenido}>
  <View style={[styles.splashScreen, styles.framePosition4]}>
    <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg4.png")}
    />
{/* fondo blanco */}
<View style={styles.backdrop}></View>
        
        
  </View>

  <View style={styles.container_linea}>
      <View style={styles.line}></View>
  </View>


</View>
 
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  backdropIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  inventarioEnLaContainer: {
    top: 55,
    left: 105,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    lineHeight: 41,
    position: "absolute",
  },
  buttontextLayout: {
    height: 50,
    right:200,
    position: "absolute",
  },
  inventarioEnLa: {
    fontFamily: FontFamily.montserratExtraBold,
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  icon2Layout: {
    width: 64,
    position: "absolute",
  },
  rectangleView_input: {
    top: 110,
    left: 45,
    backgroundColor: Color.colorBlack,
    color: Color.colorWhite,
    paddingStart: 5,
    width: 303,
    height: 70,
    borderRadius: Border.br_3xs,
    position: "absolute"
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
  icon1Position: {
    left: "50%",
    position: "absolute",
  },
  image1IconLayout: {
    position: "absolute",
  },
  logoLayout: {
    width: 63,
    height: 63,
    position: "absolute",
  },
  title1Clr: {
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
  },
  rectangleChildLayout: {
    height: 23,
    position: "absolute", 
  },
  
  generoTypo: {
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    lineHeight: 41,
  },
  edadTypo: {
    left: 46,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  text1Position: {
    top: 223,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  splashChildLayout1: {
    height: 20,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  splashChildLayout: {
    width: 65,
    borderRadius: Border.br_3xs,
    height: 21,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  noCarnesTypo: {
    height: 19,
    width: 57,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  bajoEnGrasaTypo: {
    width: 139,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    fontSize: FontSize.size_3xs,
    height: 20,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  text2FlexBox: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  circulo: {
    width: 39,
    height: 39,
    left: 285,
    top: 116,
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
    width: 66,
    fontFamily: FontFamily.fontAwesome5Free,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  bgIcon: {
    top: 22,
    left: 10,
    width: 1032,
    height: 976,
    position: "absolute",
  },
  backdropBaseIcon: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text: {
    marginTop: 5.5,
    marginLeft: -186,
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    width: 374,
    height: 79,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    color: Color.textSecondary,
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
    alignItems: "center",
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
    top: "50%",
    position: "absolute",
  },
  dismiss: {
    top: "0%",
    left: "4.69%",
    color: Color.textSecondary,
    fontWeight: "600",
  },
  buttontext: {
    marginLeft: -33,
    top: 512,
    height: 18,
    left: "50%",
  },
  orderNow: {
    height: "42.86%",
    width: "69.73%",
    top: "28.57%",
    left: "15.14%",
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  buttonprimary: {
    top: 668,
    right: 20,
    left: 100,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryButton,
    height: 50,
    width: 200,
    position: "absolute",
  },
  backdropBaseIcon1: {
    top: 38,
    right: 19,
    bottom: 15,
    left: 22,
  },
  title1: {
    marginLeft: -114.2,
    bottom: 589,
    width: 273,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.montserratBold,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    lineHeight: 41,
    fontSize: FontSize.size_15xl,
    height: 63,
    display: "none",
  },
  splashScreenChild: {
    top: 420,
    left: 233,
    height: 50,
    overflow: "hidden",
  },
  pngwing1Icon: {
    top: 219,
    left: 152,
    width: 107,
    height: 93,
    display: "none",
    position: "absolute",
  },
  splashScreenItem: {
    top: 370,
    left: 77,
    width: 257,
    height: 38,
    position: "absolute",
  },
  baseIcon: {
    top: 0,
    left: 0,
  },
  lgLogoUdgEnJpgOrig1Icon: {
    top: 1,
    left: 1,
    borderRadius: Border.br_25xl,
    width: 62,
    height: 60,
    position: "absolute",
  },
  logo: {
    top: 65,
    left: 22,
    display: "none",
  },
  image1Icon: {
    top: 750,
    left: 288,
    height: 58,
    width: 58,
  },
  holaHector: {
    top: 89,
    left: 49,
    fontSize: FontSize.size_mid,
    width: 210,
    height: 46,
    fontFamily: FontFamily.montserratBold,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 18,
    display: "flex",
    position: "absolute",
  },
  cerrarSesin: {
    top: 114,
    left: 278,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    lineHeight: 41,
    position: "absolute",
  },
  splashScreenInner: {
    top: 168,
    left: 27,
    width: 357,
    height: 0,
    display: "none",
    position: "absolute",
  },
 
  rectangleView: {
    top: 273,
    width: 179,
    left: 123,
    height: 23,
    backgroundColor: Color.colorGainsboro,
    zIndex: 10
  },

  splashScreenChild2: {
    top: 351,
    width: 179,
    left: 123,
    height: 23,
    backgroundColor: Color.colorGainsboro,
  },

  splashScreenChild4: {
    width: 78,
    left: 52,
    top: 458,
    height: 23,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  splashScreenChild5: {
    left: 52,
    top: 491,
  },
  splashScreenChild7: {
    left: 156,
  },
  rectangleIcon: {
    left: 155,
    width: 189,
    top: 458,
  },
  item:{
    fontSize: 20, 
    color:"white", 
    marginRight: 30,
  },
  circle_basura: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  genero: {
    left: 44,
    top: 213,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  edad: {
    top: 263,
  },
  preferenciasDieteticas: {
    top: 522,
    left: 38,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    position: "absolute",
  },
  alergias: {
    top: 420,
    left: 45,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    position: "absolute",
  },
  container_linea: {
    top: 735,
    right: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '88.2%', // Ancho de la línea
    height: 2.5,     // Altura de la línea
    backgroundColor: 'black', // Color de la línea
  },
  text1: {
    left: 115,
    fontFamily: FontFamily.fontAwesome6Free,
    width: 36,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 41,
  },
  splashScreenChild10: {
    left: 129,
    top: 618,
  },
  splashScreenChild11: {
    left: 209,
    height: 22,
    width: 119,
    top: 617,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  splashScreenChild12: {
    left: 51,
    top: 587,
  },
  splashScreenChild13: {
    left: 50,
    top: 617,
  },
  splashScreenChild14: {
    width: 129,
    top: 588,
    left: 129,
    backgroundColor: Color.colorWhite,
  },
  splashScreenChild15: {
    width: 86,
    top: 587,
    borderRadius: Border.br_3xs,
    left: 266,
    height: 23,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  noCarnes: {
    left: 54,
    width: 57,
    top: 588,
  },
  sinGluten: {
    left: 54,
    width: 57,
    top: 617,
  },
  noAzucar: {
    left: 132,
    top: 618,
  },
  comidaMexicana: {
    width: 111,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    fontSize: FontSize.size_3xs,
    height: 22,
    top: 617,
    left: 212,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  altoContenidoDe: {
    left: 124,
    top: 588,
  },
  bajoEnGrasa: {
    left: 240,
    top: 587,
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
  logoIcon: {
    top: 18,
    left: 16,
    width: 358,
    height: 747,
    position: "absolute",
  },
  text2: {
    top: 675,
    left: 237,
    fontFamily: FontFamily.fontAwesome5Brands,
    width: 61,
    height: 62,
    textTransform: "uppercase",
    lineHeight: 18,
  },
  icon1: {
    marginTop:300,
    marginLeft: -41,
    width: 76,
    height: 76,
    top: "50%",
    width: 100, height: 100 
  },
  icon2: {
    top: 748,
    left: 43,
    height: 64,
  },
  chef1Icon: {
    top: 66,
    left: 303,
    width: 40,
    height: 44,
    position: "absolute",
  },
  buttonprimary2: {
    flexDirection: 'row',
    margin: 17,
    marginTop: -3,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorBlack, 
    width: 320,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between', // Ajusta según tus necesidades
    alignItems: 'center',
    padding: 12,
  },
  text3: {
    top: 241,
    left: 278,
  },
  text4: {
    top: 280,
    left: 279,
  },
  text5: {
    top: 321,
    left: 280,
  },
  text6: {
    top: 427,
    left: 101,
  },
  text7: {
    top: 457,
    left: 103,
  },
  text8: {
    top: 422,
    left: 212,
    width: 66,
    fontFamily: FontFamily.fontAwesome5Free,
    fontSize: FontSize.size_base,
  },
  text9: {
    top: 456,
    left: 210,
  },
  text10: {
    top: 426,
    left: 319,
  },
  text11: {
    left: 321,
    top: 458,
  },
  inicioChild: {
    top: 170,
    left: 165,
    width: 119,
    height: 23,
    position: "absolute",
  },

  caloriasDiarias: {
    top: 140,
    left: -22,
    width: 216,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    lineHeight: 41,
    height: 56,
  },
  text12: {
    top: 161,
    left: 274,
  },
  inicio: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#d9d9d9",
    height: -40,
  },
  rectangleDropdown1dropDownContainer: {
    backgroundColor: "#d9d9d9",
    minHeight: 7
  },
  framePosition4: {
    left: -7,
    width: 408,
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "none",
  },
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
  splashLayout: {
    width: 179,
    left: 126,
    height: 30,
    position: "absolute",
  },
  lista: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    top: 179,
    width: 350,
    height: 472,
    left: 18,
    position: "absolute",
  },
  childPosition: {
    left: 269,
    height: 23,
    position: "absolute",
  },
  generoTypo: {
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  edadTypo: {
    left: 49,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  edadTypo2: {
    left: 40,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  textLayout: {
    height: 34,
    width: 36,
    fontFamily: FontFamily.fontAwesome6Free,
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
  text3Text: {
    textTransform: "uppercase",
    lineHeight: 18,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  frameLayout6: {
    height: 80,
    position: "absolute",
    overflow: "hidden",
  },
  titleFlexBox1: {
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  frameLayout5: {
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout4: {
    height: 147,
    left: 39,
    width: 300,
    position: "absolute",
    zIndex: 50,
    top: 582
  },
  frameLayout7: {
    height: 147,
    left: 45,
    width: 300,
    position: "absolute",
    top: 420,
    zIndex: 50
  },
  frameLayout3: {
    height: 41,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition3: {
    top: 580,
    width: 408,
    left: -7,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout2: {
    width: 119,
    top: 0,
  },
  frameChildLayout: {
    width: 65,
    height: 21,
  },
  framePosition2: {
    top: 611,
    width: 408,
    left: -7,
  },
  frameChildPosition: {
    left: 132,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  frameLayout1: {
    height: 22,
    position: "absolute",
  },
  framePosition1: {
    top: 610,
    width: 408,
    left: -7,
  },
  framePosition: {
    top: 581,
    width: 408,
    left: -7,
  },
  frameLayout: {
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  noCarnesTypo: {
    width: 57,
    fontSize: FontSize.size_3xs,
    height: 19,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  bajoEnGrasaTypo: {
    width: 139,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  bgIcon: {
    top: 8,
    left: 7,
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
    marginLeft: -134.2,
    bottom: 472,
    fontSize: FontSize.size_15xl,
    width: 267,
    height: 108,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.colorBlack,
    position: "absolute",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    lineHeight: 41,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
  },
  dismiss: {
    top: "0%",
    left: "-39.05%",
    color: Color.textSecondary,
  },
  buttontext: {
    marginLeft: -32.6,
    top: 688,
    width: 53,
    height: 24,
    left: "50%",
    display: "none",
  },
  orderNow: {
    height: "42.93%",
    width: "69.78%",
    top: "28.53%",
    left: "15.11%",
    color: Color.colorWhite,
    display: "flex",
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

  backdropChild: {
    top: 665,
    left: 186,
    width: 49,
    height: 85,
    overflow: "hidden",
  },
  backdrop: {
    top: 35,
    flex: 1,
    left: 23,
    width: 360,
    height: 773,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
    zIndex: 0,
    paddingRight: 50,
    marginLeft: -3,
    marginTop: 12
  },
  dropdownpicker: {
    backgroundColor: Color.colorWhite,
    padding: -5,
    height: -10,
    Border: -5,
    position: "absolute",
    minHeight: 7,
    zIndex: 50
  },
  wrapper: {
    top: 160,
    zIndex: 2,
    width: 179,
    left: 126,
    height: 10,
    position: "absolute",
    marginTop: 16
  },
  splashScreenChild: {
    top: 219,
    backgroundColor: Color.colorGainsboro,
    height: 23,
  },
  splashScreenItem: {
    top: 263,
    backgroundColor: Color.colorGainsboro,
    height: 23,
  },
  splashScreenInner: {
    top: 307,
    backgroundColor: Color.colorGainsboro,
    height: 23,
  },
  container: {
    top: 354,
    width: 159,
    height: 21,
    left: 198,
    position: "absolute",
    zIndex: 999
  },
  rectangleView: {
    width: 78,
    left: 55,
    top: 459,
    backgroundColor: Color.colorGainsboro,
    height: 23,
    position: "absolute",
  },
  splashScreenChild1: {
    left: 55,
    top: 492,
    height: 23,
    position: "absolute",
  },
  splashScreenChild2: {
    top: 492,
    width: 78,
    backgroundColor: Color.colorGainsboro,
  },
  splashScreenChild3: {
    left: 159,
    height: 23,
    position: "absolute",
  },
  rectangleIcon: {
    left: 158,
    width: 189,
    top: 459,
    height: 23,
    position: "absolute",
  },
  splashScreenChild5: {
    top: 60,
    left: 52,
    width: 304,
    height: 135,
    position: "absolute",
  },
  text: {
    top: 232,
    left: 139,
    color: Color.colorBlack,
    fontFamily: FontFamily.aBeeZeeRegular,
  },
  genero: {
    left: 47,
    top: 170,
  },
  edad: {
    top: 214,
  },
  peso: {
    top: 257,
  },
  estatura: {
    top: 300,
  },
  alergiasAlimentarias: {
    top: 390,
    left: 50
  },
  nivelDeActividad: {
    top: 347,
  },
  preferenciasDieteticas: {
    top: 559,
    left: 41,
    zIndex: 1
  },
  text1: {
    left: 118,
    top: 224,
  },
  text2: {
    top: 384,
    left: 206,
  },
  text3: {
    top: 489,
    left: 289,
    fontSize: 32,
    fontFamily: FontFamily.fontAwesome5Free,
    width: 37,
    height: 26,
    justifyContent: "center",
    alignItems: "center",
    display: "none",
  },
  splashScreen: {
    top: -8,
    backgroundColor: Color.colorYellowgreen,
    height: 875,
    width: 408,
    position: "absolute",
    overflow: "hidden",
  },
  metamealsEsUna: {
    left: 56,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
    letterSpacing: 0,
    top: 0,
  },
  frame1: {
    width: 346,
    left: 0,
    top: 0,
  },
  frame: {
    top: 85,
    width: 408,
    left: -7,
  },
  bienvenido1: {
    left: 61,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: 0,
  },
  frame3: {
    width: 175,
    left: 0,
    top: 0,
  },
  frame2: {
    top: 56,
    width: 408,
    left: -7,
  },
  frameChild: {
    left: 31,
    width: 339,
    top: 10,
    zIndex: 99,
  },

  frame4: {
    top: 570,
    width: 408,
    left: -7,
    overflow: "hidden",
    zIndex: 50
  },
  frame7: {
    width: 337,
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame6: {
    top: 680,
    height: 20,
    width: 408,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    top: 608,
    height: 16,
    left: 0,
    width: 408,
    position: "absolute",
    overflow: "hidden",
  },
  buscar1: {
    fontSize: FontSize.size_smi,
  },
  text4: {
    fontSize: FontSize.size_mini,
  },
  buscar: {
    left: 77,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  frame9: {
    width: 133,
    left: 0,
    top: 0,
  },
  frame8: {
    top: 667,
    width: 408,
    left: -7,
  },
  frameInner: {
    left: 54,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  frame11: {
    left: 0,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  frame10: {
    height: 21,
  },
  frameChild1: {
    width: 65,
    height: 21,
  },
  frame13: {
    width: 197,
    left: 0,
    height: 21,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame12: {
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild2: {
    left: 212,
    width: 119,
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  frame15: {
    width: 331,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  frame14: {
    top: 610,
    width: 408,
    left: -7,
    overflow: "hidden",
  },
  frameChild4: {
    left: 53,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  frame19: {
    width: 118,
    left: 0,
    height: 21,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame18: {
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild6: {
    width: 129,
    height: 20,
  },
  frame23: {
    width: 261,
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame22: {
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild7: {
    width: 86,
    borderRadius: Border.br_3xs,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  frame25: {
    width: 355,
    left: 0,
    height: 23,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame24: {
    height: 23,
  },
  noCarnes: {
    left: 57,
  },
  frame27: {
    width: 114,
    left: 0,
    top: 0,
  },
  frame26: {
    top: 581,
    width: 408,
    left: -7,
  },
  frame28: {
    top: 610,
    width: 408,
    left: -7,
  },
  noAzucar: {
    left: 135,
  },
  frame31: {
    width: 192,
    left: 0,
    top: 0,
  },
  frame30: {
    top: 611,
    width: 408,
    left: -7,
  },
  comidaMexicana: {
    width: 111,
    fontSize: FontSize.size_3xs,
    height: 22,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    left: 215,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 41,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  frame33: {
    width: 326,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  altoContenidoDe: {
    left: 127,
  },
  frame35: {
    width: 266,
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  bajoEnGrasa: {
    left: 243,
  },
  frame37: {
    width: 382,
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame36: {
    height: 20,
  },
  bienvenido: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    zIndex: -10
  },
});

export default GenerarReceta;
