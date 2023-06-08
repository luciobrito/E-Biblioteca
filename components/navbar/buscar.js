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
import {estilo} from "../estilo";
export function Buscar({ navigation }) {
  return (
    <ScrollView style={estilo.background}>

      <Text >Procurando algo novo para ler?</Text>
      <TextInput style={estilo.busca} placeholder="Procure por Titulo,ISBN,Autor" ></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate("lancamentos")}>
        <Text>Lançamentos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("maisVend")}>
        <Text>Mais Vendidos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("recomendados")}>
        <Text>Recomendados</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const Stack = createStackNavigator();
export function RotasBuscar() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="buscar"
        component={Buscar}
        options={{ title: "Buscar" }}
      />
      <Stack.Screen
        name="lancamentos"
        component={Lancamentos}
        options={{ title: "Lançamentos" }}
      />
      <Stack.Screen
        name="maisVend"
        component={MaisVend}
        options={{ title: "Mais Vendidos" }}
      />
      <Stack.Screen
        name="recomendados"
        component={Recomendados}
        options={{ title: "Recomendados" }}
      />
    </Stack.Navigator>
  );
}
