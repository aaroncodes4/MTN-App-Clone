import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import BuySendScreen from "./screens/BuySendScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MomoScreen from "./screens/MomoScreen";
import Just4UScreen from "./screens/Just4UScreen";
import GetmoreScreen from "./screens/GetmoreScreen";
import { NavigationContainer } from "@react-navigation/native";
import colors from "./components/Color";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        {/* homescreen */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarIcon: ({ focused }) =>
              focused ? (
                  <Entypo name="home" size={24} color="#ffd700" />
                  ) : (
                  <AntDesign name="home" size={24} color="#000" />
              ),
          }}
        />
        {/* buy-send screen */}
        <Tab.Screen
          name="Buy/Send"
          component={BuySendScreen}
          options={{
            tabBarLabel: "Buy/Send",
            tabBarActiveTintColor: colors.primary,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                  <Ionicons name="cart-sharp" size={24} color="#ffd700" />
                  ) : (
                  <Ionicons name="cart-outline" size={24} color="black" />
              ),
          }}
        />
        {/* momo screen */}
        <Tab.Screen
          name="Momo"
          component={MomoScreen}
          options={{
            tabBarLabel: "Momo",
            tabBarActiveTintColor: "#fff",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#303030" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        {/* Just for you */}
        <Tab.Screen
          name="Just4U"
          component={Just4UScreen}
          options={{
            tabBarLabel: "Just4U",
            tabBarActiveTintColor: colors.primary,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                  <FontAwesome name="shopping-bag" size={24} color="#ffd700" />
                  ) : (
                  <SimpleLineIcons name="handbag" size={24} color="black" />
              ),
          }}
        />
        {/* get more screen */}
        <Tab.Screen
          name="Get more"
          component={GetmoreScreen}
          options={{
            tabBarLabel: "Get more",
            tabBarActiveTintColor: colors.primary,
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                  <AntDesign name="rightsquare" size={24} color="#ffd700" />
                  ) : (
                  <AntDesign name="rightsquareo" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
