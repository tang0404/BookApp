import { ScrollView } from "native-base";
import react from "react";
import { StyleSheet, Text, View, Image, Linking, Pressable } from "react-native";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

const DetailScreen = ({ route }) => {
    const { title, artist, url, image, starNum, description, price } = route.params;
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
        fontWeight: '500',
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
        // height: 36,
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
    }
});

export default DetailScreen;