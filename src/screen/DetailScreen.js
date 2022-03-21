import { ScrollView } from "native-base";
import react from "react";
import { StyleSheet, Text, View, Image, Linking, Pressable } from "react-native";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const colorLight = "#FFC41F";
const colorDark = "#EDEDEF";
const starLight = <MaterialCommunityIcons name="star" color={colorLight} size={18} />;
const starDark = <MaterialCommunityIcons name="star" color={colorDark} size={18} />;
const starPattern = [starDark, starLight];

const DetailScreen = ({ route }) => {
    const { title, artist, url, image, star, starNum, description, price } = route.params;
    return(
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={{uri: image}} />
            </View>
            <View>
            <View style={styles.cardcontainer}>
                 <Text style={styles.title}>{title}</Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>
            <View style={styles.star}>
                {star != null ? (
                    starPattern[star[0]]
                ):null} 
                {star != null ? (
                    starPattern[star[1]]
                ):null} 
                {star != null ? (
                    starPattern[star[2]]
                ):null}
                {star != null ? (
                    starPattern[star[3]]
                ):null} 
                {star != null ? (
                    starPattern[star[4]]
                ):null}
                {star != null ?(
                    <Text style={{paddingLeft: 8}}>
                    {starNum}.0<Text style={{color: '#666666'}}> / 5.0</Text>
                </Text>
                ):null}
            </View>
            <View style={styles.cardDescription}>
                <Text style={styles.description}>{description}</Text>
            </View>
            </View>
            <Pressable
                onPress={() => Linking.openURL(url)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>BUY NOW FOR ${price}</Text>
            </Pressable>
        </ScrollView>
    );
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
    },
    image: {
        width: 210,
        height: 300,
    },
    cardcontainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 8,
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 14,
        fontWeight: '400',
        color: '#666666',
        paddingTop: 8,
    },
    cardDescription: {
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 20,
        marginRight: 20,
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24,
        textAlign: 'center'
    },
    button: {
        width: 190,
        borderRadius: 4,
        backgroundColor: '#6200EE',
        alignSelf: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        marginVertical: 10,
    },
    star: {
        flexDirection: 'row',
        // marginBottom: 8,
        alignSelf: 'center',
      }
});

export default DetailScreen;