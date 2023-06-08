import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from './home';
import {RotasMnhBib} from './mnhBib';
import {RotasBuscar} from './buscar'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            //Opções da TabBar 
            let iconName;
            
            //Se a rota for Home, icone = casinha;
            if (route.name === 'Home') {
              //Se estive focado, icone preenchido.
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } 
            //Mesma Lógica para as Tabs seguintes
            else if (route.name === 'MnhBib') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Buscar'){
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4f3409',
          tabBarInactiveTintColor: '#ab9a7e',
        })}>
        <Tab.Screen name="Home" component={Home} options={{title: "Início"}} />
        
        <Tab.Screen name="Buscar" component={RotasBuscar} options={{ headerShown: false }}/>
        <Tab.Screen name="MnhBib" component={RotasMnhBib} options={{headerShown: false, title:"Minha E-Biblioteca"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}