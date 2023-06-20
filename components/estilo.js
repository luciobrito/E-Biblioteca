import * as React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import {useFonts} from 'expo-font';

var corFundo = "#F5F5DC";
var tmnTitulo = 40;
var tmnSubT = 30;
var marginPad = 10;
var paddingPad = 10;
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
        fontFamily: 'RobotoSlab',
        height: '100%'
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

    },
    bscrcont:{
      margin: 10,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      margin: 10,
      
      
    },
    bscrcontLivro:{
      borderWidth: 1,
      margin: marginPad - 5,

    },
    bscrImg:{
      
      width: '40%',
      height: undefined,
      aspectRatio: 0.6,
      backgroundColor: 'green',
      borderRadius: 10,
      resizeMode: 'cover',
      borderWidth: 1
    }
})