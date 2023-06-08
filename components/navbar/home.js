import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {estilo} from '../estilo';
var dt = new Date();
//Função para exibir a mensagem conforme o horário do Usuário
function mensagemHorario(horas){
    if(horas > 6 && horas < 12){
      return "Bom Dia! \u1F305";
    }
    else if (horas >= 12 && horas < 18){
      return "Boa Tarde! \u2600";
    }
    else if (horas >= 18 && horas < 23){
      return "Boa Noite! 🌙";
    }
    else if (horas >= 23){
      return "Boa Madrugada! ";
    }
}
export function Home({navigation}){
  return(
    <View>
    <Text style={estilo.tituloInicio}> {mensagemHorario(dt.getHours())} </Text>
    </View>
  )
}