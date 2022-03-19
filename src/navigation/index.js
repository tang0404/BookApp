import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import BookScreen from "../screen/BookScreen";
import DetailScreen from "../screen/DetailScreen";
import WishlistScreen from "../screen/WishlistScreen";
import MyBooksScreen from "../screen/MyBooksScreen";

import sections from "../json/album_section.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
};

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor: '#6200EE',
                tabBarInactiveTintColor: '#666666',
            }}
        >

            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={WishlistScreen}
                options={{
                    headerShown: false,
                    title: "Wishlist",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="MyBooks"
                component={MyBooksScreen}
                options={{
                    headerShown: false,
                    title: "My Books",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={BookScreen}
            options={{
                title: sections.title,
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },
            }}
          />
        <Stack.Screen 
            name="Detail"
            component={DetailScreen}
            options={({ route }) => ({
                title: route.params.title,
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },
            })} 
        />
        </Stack.Navigator>
    );
}

export default Navigation;