import react, {useState} from "react";
import { Pressable } from "native-base";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { shadowOffset } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import BookScreen from "../screen/BookScreen";
import DetailScreen from "../screen/DetailScreen";
import WishlistScreen from "../screen/WishlistScreen";
import MyBooksScreen from "../screen/MyBooksScreen";


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
    const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={BookScreen}
            options={{
                headerShadowVisible: false,
                title: "",
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },
                headerRight: () => (
                    <Pressable>
                        <MaterialCommunityIcons 
                        name={'magnify'} 
                        color={'black'} 
                        size={25}
                        onPress={ () => {alert("Search")}} 
                    />
                    </Pressable>
                    
                ),
            }}
          />
        <Stack.Screen 
            name="Detail"
            component={DetailScreen}
            options={({ navigation }) => ({
                headerShadowVisible: false,
                title: "",
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: '400',
                    fontSize: 20
                },
                headerLeft: () => (
                    <Pressable>
                        <MaterialCommunityIcons 
                        name={'chevron-left'} 
                        color={'black'} 
                        size={30}
                        onPress={ () => {navigation.goBack();}}
                    />
                    </Pressable>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => toggleFunction()}>
                        <Text>{toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={25} />:
                                        <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={25} />}
                        </Text>
                    </TouchableOpacity>
                ),
            })} 
        />
        </Stack.Navigator>
    );
}

export default Navigation;