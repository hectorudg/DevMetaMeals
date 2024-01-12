import React, { useState } from "react";
import { Image } from "expo-image";
import { Alert,StyleSheet, Text, View, TextInput, ScrollView} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import { color } from "react-native-reanimated";

const K_OPTIONS_ALERGIAS = [
  {
    item: 'Cacahuate',
    id: '1',
  },
  {
    item: 'Soja',
    id: '2',
  },
  {
    item: 'Camaron',
    id: '3',
  },
  {
    item: 'Trigo',
    id: '4',
  },
  {
    item: 'FC Bayern Munich',
    id: 'FBM',
  },
  {
    item: 'Manchester United FC',
    id: 'MUN',
  },
]

const K_OPTIONS_PREF = [
  {
    item: 'Sin gluten',
    id: 'JUVE',
  },
  {
    item: 'Sin azucar',
    id: 'RM',
  },
  {
    item: 'Comida mexicana',
    id: 'BR',
  },
  {
    item: 'Comida Italiana',
    id: 'PSG',
  },
  {
    item: 'Alto en fibra',
    id: 'FBM',
  },
  {
    item: 'FC Bayern Munich',
    id: 'FBM',
  },
  {
    item: 'Manchester United FC',
    id: 'MUN',
  },
]

const Bienvenido = ({ route, navigation}) => {
  //Guarda el Id del usuario registrado
  const userId = route.params?.userId || 0;

  const [selectedAlergia, setSelectedAlergia] = useState({})
  const [selectedPreferencia, setSelectedPreferencia] = useState({})
  const [selectedAlergias, setSelectedAlergias] = useState([])
  const [selectedPreferencias, setSelectedPreferencias] = useState([])
  const [GeneroOpen, setGeneroOpen] = useState(false);
  const [Genero, setGenero] = useState("genero");
  const [ActividadOpen, setActividadOpen] = useState(false);
  const [rectangleDropdownItems, setRectangleDropdownItems] = useState([
    { value: "Femenino", label: "Femenino" },
    { value: "Masculino", label: "Masculino" },
  ]);
  const [Edad, setEdad] = useState("");
  const [Peso, setPeso] = useState("");
  const [Estatura, setEstatura] = useState("");
  const [Actividad, setActividad] = useState(false);
  const [rectangleDropdown1Items, setRectangleDropdown1Items] = useState([
    { value: "Ligero", label: "Ligero" },
    { value: "Moderado", label: "Moderado" },
    { value: "Fuerte", label: "Fuerte" },
  ]);

  const validation = () => {

    const strAlergias     = JSON.stringify(selectedAlergias);
    const strPreferencias = JSON.stringify(selectedPreferencias);

    if(Genero    == "" || Edad == "" || Peso == "" || Estatura == "" ||
       Actividad == "" || selectedAlergias == "" || selectedPreferencias == ""){
        Alert.alert("Para continuar completa todos los campos.");
    }
    else{
      var xhttp = new XMLHttpRequest();

      xhttp.open("GET", "https://metameals.000webhostapp.com/AddDataUser.php?&genero="+Genero+"&edad="+Edad+"&peso="+Peso+"&estatura="+Estatura+"&actividad="+Actividad+"&alergias="+strAlergias+"&preferencias="+strPreferencias+"&user_id="+userId,true);
      xhttp.send();
      Alert.alert("Guardado");
      navigation.navigate('Inventario', {userId: userId});
    }
  };  

  
  return (

    
<View style={styles.bienvenido}>
  <View style={[styles.splashScreen, styles.framePosition4]}>
    <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg4.png")}
    />

<View style={styles.backdrop}>
    <View style={styles.buttonprimary} onPress={validation}>
          <Text style={styles.orderNow} onPress={validation}>Continuar</Text>
    </View>
    <View style={[styles.backdropChild, styles.buttontextPosition]} />
</View>
      {/*Alergias*/}
      <View style={[styles.frame4, styles.frameLayout7]}>
            <SelectBox style={[styles.frameChild, styles.frameLayout7]}
              label="Select multiple"
              options={K_OPTIONS_ALERGIAS}
              selectedValues={selectedAlergias}
              onMultiSelect={onMultiChange()}
              onTapClose={onMultiChange()}
              isMulti
            />
      </View>
        <View style={[styles.wrapper]}>
        {/* genero */}
        <DropDownPicker style={{ minHeight: 7 }}
            open={GeneroOpen}
            setOpen={setGeneroOpen}
            value={Genero}
            setValue={setGenero}
            items={rectangleDropdownItems}
            dropDownContainerStyle={styles.rectangleDropdown1dropDownContainer}
          />
        </View>
        
        <TextInput
          style={[styles.splashScreenChild, styles.splashLayout]}
          value={Edad}
          onChangeText={setEdad}
          keyboardType="numeric"
          placeholder="Edad"
        />
        <TextInput
          style={[styles.splashScreenItem, styles.splashLayout]}
          value={Peso}
          onChangeText={setPeso}
          keyboardType="decimal-pad"
          placeholder="Peso"
        />
        <TextInput
          style={[styles.splashScreenInner, styles.splashLayout]}
          value={Estatura}
          onChangeText={setEstatura}
          keyboardType="decimal-pad"
          placeholder="Estatura"
        />
        {/* nivel de actividad */}
        <View style={styles.container}>
        <DropDownPicker
            style={styles.dropdownpicker}
            open={ActividadOpen}
            setOpen={setActividadOpen}
            value={Actividad}
            setValue={setActividad}
            items={rectangleDropdown1Items}
            dropDownContainerStyle={styles.rectangleDropdown1dropDownContainer}
          />
        </View>
      
        
        <Image
          style={styles.splashScreenChild5}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
        
        <Text style={[styles.genero, styles.generoTypo]}>{`Genero: `}</Text>
        <Text style={[styles.edad, styles.edadTypo]}>Edad:</Text>
        <Text style={[styles.peso, styles.edadTypo]}>Peso:</Text>
        <Text style={[styles.estatura, styles.edadTypo]}>Estatura:</Text>
        <Text style={[styles.alergiasAlimentarias, styles.edadTypo2]}>
          Alergias alimentarias:
        </Text>
        <Text style={[styles.nivelDeActividad, styles.edadTypo]}>
          Nivel de actividad:
        </Text>
        <Text style={[styles.preferenciasDieteticas, styles.generoTypo]}>
          Preferencias dieteticas:
        </Text>
  </View>

  <View style={[styles.frame, styles.frameLayout6]}>
    <View style={[styles.frame1, styles.frameLayout6]}>
        <Text
            style={[styles.metamealsEsUna, styles.titleFlexBox1]}
            >{`  “Metameals es una aplicacion que funciona 
    mediante el uso de Inteligencia Artificial. 
    Por favor ingresa los siguientes datos para 
    obtener una expreciencia mas personalizada.” `}</Text>
    </View>
  </View>

  <View style={[styles.frame2, styles.frameLayout5]}>
      <View style={[styles.frame3, styles.frameLayout5]}>
          <Text style={[styles.bienvenido1, styles.text3Text]}>
            Bienvenido... 
          </Text>
      </View>
  </View>
    {/* Prefrerecias*/}
    <View style={[styles.frame4, styles.frameLayout4]}>
          <SelectBox style={[styles.frameChild, styles.frameLayout4]}
            label="Select multiple"
            options={K_OPTIONS_PREF }
            selectedValues={selectedPreferencias}
            onMultiSelect={onMultiChangePref()}
            onTapClose={onMultiChangePref()}
            isMulti
          />
    </View>

</View>
);

  function onMultiChange() {
    return (item) => setSelectedAlergias(xorBy(selectedAlergias, [item], 'id'))
  }

  function onMultiChangePref() {
    return (item) => setSelectedPreferencias(xorBy(selectedPreferencias, [item], 'id'))
  }
  

};


const styles = StyleSheet.create({
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
  splashChildPosition: {
    top: 492,
    width: 78,
    backgroundColor: Color.colorGainsboro,
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
    left: 43,
    width: 300,
    position: "absolute",
    zIndex: 50,
    top: 607
  },
  frameLayout7: {
    height: 147,
    left: 45,
    width: 300,
    position: "absolute",
    top: 455,
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
  buttonprimary: {
    top: 725,
    right: 17,
    left: 199,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryButton,
    height: 39,
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
    top: 26,
    flex: 1,
    left: 23,
    width: 360,
    height: 770,
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
    top: 215,
    zIndex: 2,
    width: 179,
    left: 126,
    height: 10,
    position: "absolute",
    marginTop: 16
  },
  splashScreenChild: {
    top: 274,
    backgroundColor: Color.colorGainsboro,
    height: 23,
  },
  splashScreenItem: {
    top: 312,
    backgroundColor: Color.colorGainsboro,
    height: 23,
  },
  splashScreenInner: {
    top: 352,
    backgroundColor: Color.colorGainsboro,
    height: 23,
  },
  container: {
    top: 393,
    width: 159,
    height: 21,
    left: 215,
    position: "absolute",
    zIndex: 99
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
    top: 224,
  },
  edad: {
    top: 264,
  },
  peso: {
    top: 305,
  },
  estatura: {
    top: 343,
  },
  alergiasAlimentarias: {
    top: 422,
    left: 50
  },
  nivelDeActividad: {
    top: 385,
  },
  preferenciasDieteticas: {
    top: 586,
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
    top: 20,
    zIndex: 99,
  },
  frame5: {
    width: 374,
    left: 0,
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.colorGray,
  },
  frame4: {
    top: 570,
    width: 408,
    left: -7,
    overflow: "hidden",
    zIndex: 50
  },
  frameItem: {
    left: 64,
    backgroundColor: Color.colorGray,
    width: 273,
    borderRadius: Border.br_3xs,
    height: 20,
    top: 0,
    position: "absolute",
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
  clase:{
width: 10
  },
  bienvenido:{
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    zIndex: -10
  },
});

export default Bienvenido;
