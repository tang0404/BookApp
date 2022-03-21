import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";
import Star from "./star";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const colorLight = "#FFC41F";
const colorDark = "#EDEDEF";
const starLight = <MaterialCommunityIcons name="star" color={colorLight} size={18} />;
const starDark = <MaterialCommunityIcons name="star" color={colorDark} size={18} />;
const starPattern = [starDark, starLight];

const HotAlbumDetail = ({album, navigation}) => {
   return (
     <View style={{flexDirection: 'column',
                  paddingRight: 16,}}>
        <View style={styles.cardContainerStyle}>
          <Pressable
              onPress={() => navigation.navigate("Detail", album)}
            >
              <Image
              style={styles.imageStyle}
              source={{uri: album.image}}
            />
            </Pressable>
        </View>
        <View style={styles.star}>
          {album.star != null ? (
              starPattern[album.star[0]]
          ):null} 
          {album.star != null ? (
              starPattern[album.star[1]]
          ):null} 
          {album.star != null ? (
              starPattern[album.star[2]]
          ):null}
          {album.star != null ? (
              starPattern[album.star[3]]
          ):null} 
          {album.star != null ? (
              starPattern[album.star[4]]
          ):null}  
        </View>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerTitleStyle}>{album.title}</Text>
          <Text style={styles.headerContentStyle}>{album.artist}</Text>
        </View>
      </View>

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    marginTop: 16,
    marginBottom: 16,
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    // paddingTop: 16,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  headerContentStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: "#666666",
    paddingTop: 8,
    paddingBottom: 16,
    width: '100%'
  },
  imageStyle: {
    height: 200,
    width: 140,
  },
  star: {
    flexDirection: 'row',
    marginBottom: 8,
  }
});

export default HotAlbumDetail;
