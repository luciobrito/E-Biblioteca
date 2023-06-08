import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { Lancamentos } from "../pageBuscar/lancamentos";
import { MaisVend } from "../pageBuscar/maisVendidos";
import { Recomendados } from "../pageBuscar/recomendados";
import {estilo, Fontes} from "../estilo";
import {useFonts} from 'expo-font';
export function Buscar({ navigation }) {
  const [fontsLoaded] = useFonts({
    'RobotoSlabBold' : require('../../assets/fonts/Roboto_Slab/static/RobotoSlab-Bold.ttf'),
  });
  if(!fontsLoaded){
    return(
      <><Text>Carregando...</Text></>
    )
  }
  else{
  return (
    <ScrollView style={estilo.background}>

      <Text style={estilo.subtituloBusca}>Procurando algo novo para ler?</Text>
      <TextInput style={estilo.busca} placeholder="Procure por Titulo,ISBN,Autor" ></TextInput>
      <TouchableOpacity style={estilo.btnBusca} onPress={() => navigation.navigate("lancamentos")}>
        <Text style={estilo.btnTxt}>Lançamentos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.btnBusca} onPress={() => navigation.navigate("maisVend")}>
        <Text style={estilo.btnTxt}>Mais Vendidos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.btnBusca} onPress={() => navigation.navigate("recomendados")}>
        <Text style={estilo.btnTxt}>Recomendados</Text>
      </TouchableOpacity>
    </ScrollView>
  );
  }
}
const Stack = createStackNavigator();
export function RotasBuscar() {
  const fonte = "RobotoSlabBold";
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="buscar"
        component={Buscar}
        options={{ title: "Buscar" ,      headerTitleStyle: {
          fontFamily: fonte,

        }}}
      />
      <Stack.Screen
        name="lancamentos"
        component={Lancamentos}
        options={{ title: "Lançamentos"  ,headerTitleStyle: {
          fontFamily: fonte,

        }}}
      />
      <Stack.Screen
        name="maisVend"
        component={MaisVend}
        options={{ title: "Mais Vendidos",headerTitleStyle: {
          fontFamily: fonte,

        } }}
      />
      <Stack.Screen
        name="recomendados"
        component={Recomendados}
        options={{ title: "Recomendados" ,headerTitleStyle: {
          fontFamily: fonte,

        }}}
      />
    </Stack.Navigator>
  );
}
