import React from 'react';
// import { Dimensions, Platform, Text, View, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {navigationRef} from './RootNavigation';
import Home from './screens/home';
import Recipes from './screens/recipes';
import colors from './styles/colors';
import TicketRecipe from './screens/recipes/ticketRecipe';


const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();


export const Routes = props => (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: 'FitLife',
          headerTitleAlign: 'center',
          headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              letterSpacing: .5,
              color: colors.textSecondary,
          },
          headerTintColor: '#fff',
          headerStyle: {
              backgroundColor: colors.primary,
          },
          
        }}
        initialRouteName="home"
      >

        <Stack.Screen 
        name="home" 
        component={Home}
        />
        <Stack.Screen
          name="recipes"
          component={Recipes}
        />
        <Stack.Screen
          name="ticketRecipe"
          component={TicketRecipe}
        />
      </Stack.Navigator>
    </NavigationContainer>
)