import react from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import sections from "../json/album_section.json";

const colorLight = "#FFC41F";
const colorDark = "#EDEDEF";
const starLight = <MaterialCommunityIcons name="star" color={colorLight} size={14} />;
const starDark = <MaterialCommunityIcons name="star" color={colorDark} size={14} />;
const starPattern = [starDark, starLight];

const Star = () => {
    let {star} = props;
    <View style={styles.star}>
        {star != "null" ? (
            starPattern[star[0]],
            starPattern[star[1]],
            starPattern[star[2]],
            starPattern[star[3]],
            starPattern[star[4]]
        ):null} 
    </View>
}

const styles = StyleSheet.create({
    star: {
        flexDirection: 'row',
    }
})

export default Star;