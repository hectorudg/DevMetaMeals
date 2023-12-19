const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import MiRecetario from "./screens/MiRecetario";
import VerReceta from "./screens/VerReceta";
import GenerarReceta from "./screens/GenerarReceta";
import SignUp from "./screens/SignUp";
import Inicio from "./screens/Inicio";
import Login from "./screens/Login";
import AgregarIngrediente from "./screens/AgregarIngrediente";
import Inventario from "./screens/Inventario";
import Bienvenido from "./screens/Bienvenido";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Inventario"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MiRecetario"
              component={MiRecetario}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerReceta"
              component={VerReceta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GenerarReceta"
              component={GenerarReceta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AgregarIngrediente"
              component={AgregarIngrediente}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inventario"
              component={Inventario}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bienvenido"
              component={Bienvenido}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
