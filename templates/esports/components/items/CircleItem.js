import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";

const CircleItem = ({ text, onPress, imgUrl, markedAsSeen }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{ alignItems: 'center', marginHorizontal: Sizes.fixPadding - 5.0, }}
        >
            <View style={{ borderColor: markedAsSeen ? Colors.lightGrayColor : Colors.primaryColor, ...styles.userProfilePicWrapStyle, }}>
                <Image
                    source={imgUrl}
                    style={styles.userProfilePicStyle}
                />
            </View>
            <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor10Regular }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default CircleItem;

const styles = StyleSheet.create({
    userProfilePicWrapStyle: {
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userProfilePicStyle: {
        width: 56.0,
        height: 56.0,
        borderRadius: 28.0,
        borderColor: Colors.whiteColor,
        borderWidth: 2.0
    }
})