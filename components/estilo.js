import * as React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import {useFonts} from 'expo-font';

var corFundo = "#F5F5DC";
var tmnTitulo = 40;
var tmnSubT = 30;
const btn = {
margin: 10,
padding: 10,
borderRadius: 10
}
const titulo = {
  fontSize: tmnTitulo,
  fontFamily: 'RobotoSlabBold'
}
const subtitulo = {
  fontFamily: 'RobotoSlab',

}
export function Fontes(){
  
    const [fontsLoaded] = useFonts({
      'RobotoSlab' : require('../assets/fonts/Roboto_Slab/static/RobotoSlab-Regular.ttf'),
      'RobotoSlabBold' : require('../assets/fonts/Roboto_Slab/static/RobotoSlab-Bold.ttf'),
      'RobotoSlabLight' : require('../assets/fonts/Roboto_Slab/static/RobotoSlab-Light.ttf'),
    });
  
  }

export const estilo = StyleSheet.create({
    background: {
        backgroundColor: corFundo,
        fontFamily: 'RobotoSlab'
    },
    subtituloBusca:{
        ...subtitulo,
        fontSize: 20,
        marginLeft: 15,
        marginTop: 10
    },
    busca:{
      backgroundColor: 'white',
      margin: 15,
      padding: 15,
      borderWidth: 1,
      fontFamily: 'RobotoSlab',
      borderRadius: 10,
      fontSize: 17
    },
    btnBusca:{
      ...btn,
      backgroundColor: '#e8bc72',
      borderWidth: 1
      

    },
    tituloInicio:{
      ...titulo,
    },
    texto:{
      fontFamily: 'RobotoSlab'
    },
    btnTxt:{
      color: '#422d09',
      fontFamily: 'RobotoSlabBold',
      fontSize: 20,
      textAlign: 'center'
    },
    input:{

    }
})