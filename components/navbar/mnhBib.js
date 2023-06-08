import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { Favoritos } from "../pageMnhBib/favoritos";
import { ListaDes } from "../pageMnhBib/listaDesejos";
import { MeusLivros } from "../pageMnhBib/meusLivros";
export function MnhBib({ navigation }) {
  return (
    <ScrollView>
      <Text>Aqui está sua Biblioteca</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Favoritos")}>
        <Text>Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ListaDes")}>
        <Text>Lista de Desejos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MeusLivros")}>
        <Text>Meus Livros</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
  const Stack = createStackNavigator();
export function RotasMnhBib() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="MnhBib"
        component={MnhBib}
        options={{ title: "Minha Biblioteca" }}
      />
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ title: "Favoritos" }}
      />
      <Stack.Screen
        name="ListaDes"
        component={ListaDes}
        options={{ title: "Lista de Desejos" }}
      />
      <Stack.Screen
        name="MeusLivros"
        component={MeusLivros}
        options={{ title: "Meus Livros" }}
      />
    </Stack.Navigator>
  );
}
