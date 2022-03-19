import react from "react";
import { View, FlatList } from "react-native";
import Header from "../components/Header";
import AlbumList from "../components/AlbumList";
import sections from "../json/album_section.json";

const BookScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1}}>
            <Header title={sections.title} />
            <AlbumList
                list={sections.data}
                navigation={navigation}
            />
        </View>
    );
};

export default BookScreen;