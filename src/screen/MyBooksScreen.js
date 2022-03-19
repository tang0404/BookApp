import react from "react";
import { Center, Text } from "native-base";

const MyBooksScreen = () => {
    return (
        <Center bg="muted.300" flex={1}>
            <Text fontSize={24}>
                This is a MyBooks Page
            </Text>              
        </Center>
    );
}

export default MyBooksScreen;