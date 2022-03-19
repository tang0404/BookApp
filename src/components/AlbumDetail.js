import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const AlbumDetail = props => {
   let { album } = props;
   return (
    <View style={{flexDirection: 'column',
    paddingRight: 16,}}>
<View style={styles.cardContainerStyle}>
<View style={styles.cardSectionStyle}>
<Image
style={styles.imageStyle}
source={{uri: album.image}}
/>
</View>
</View>  
<View style={styles.headerContainerStyle}>
<Text style={styles.headerTitleStyle}>{album.title}</Text>
<Text style={styles.headerContentStyle}>{album.artist}</Text>
</View>   
</View>
  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#ddd",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    // marginLeft: 5,
    marginRight: 5,
    marginTop: 16,
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 16,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  headerContentStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: "#222",
    paddingTop: 8,
    paddingBottom: 16,
    width: '100%'
  },
  cardSectionStyle: {
    backgroundColor: "#fff",
  },
  imageStyle: {
    height: 200,
    width: 140,
  }
});

export default AlbumDetail;
