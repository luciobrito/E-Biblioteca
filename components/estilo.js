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
    //Barra de Busca
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
    //Texto dos Botões
    btnTxt:{
      color: '#422d09',
      fontFamily: 'RobotoSlabBold',
      fontSize: 20,
      textAlign: 'center'
    },
    input:{

    },
    //Conteúdos da aba buscar, os livros que são exibidos abaixo dos botões
    bscrcont:{
      margin: 5,
      flex: 3,
      flexDirection: 'column',
      padding: 10,

      alignItems: 'center',
      flexWrap: 'wrap',
      alignContent: 'center',


      
    },
    bscrcontLivro:{
      borderWidth: 1,
      margin: marginPad - 5,

    },
    //Imagens da aba buscar, os livros.
    bscrImg:{
      
      width: '90%',
      height: undefined,
      aspectRatio: 0.6,
      backgroundColor: 'gray',
      borderRadius: 3,
      resizeMode: 'cover',
      borderWidth: 2,
      borderColor: 'black'
    }
})