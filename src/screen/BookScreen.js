import react from "react";
import { View, FlatList } from "react-native";
import AlbumList from "../components/AlbumList";
import sections from "../json/album_section.json";

const BookScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <AlbumList
                list={sections.data}
                navigation={navigation}
            />
        </View>
    );
};

export default BookScreen;