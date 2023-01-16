import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";


const SquareItem = ({ conntet_image_url, content_title, content_details, imageOnPress, button_is_active ,button_text_active, button_text_inactive, buttonOnPress }) => {

    return (

        <TouchableOpacity
            activeOpacity={0.8}
            onPress={imageOnPress}
            style={styles.suggestionInfoWrapStyle}
        >
            <Image
                source={conntet_image_url}
                style={{ width: 60.0, height: 60.0, borderRadius: 30.0, alignSelf: 'center', marginBottom: Sizes.fixPadding, }}
            />
            <Text style={{ textAlign: 'center', ...Fonts.blackColor16SemiBold }}>
                {content_title}
            </Text>
            <Text style={{ textAlign: 'center', ...Fonts.grayColor14Regular }}>
                {content_details}
            </Text>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={buttonOnPress}
                style={{ backgroundColor: button_is_active  ? Colors.whiteColor : Colors.primaryColor, ...styles.followAndFollowingButtonStyle, }}
            >
                <Text style={{ ...button_is_active  ? { ...Fonts.primaryColor18Bold } : { ...Fonts.whiteColor18Bold } }}>
                    {button_is_active ? button_text_active : button_text_inactive}
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export default SquareItem;

const styles = StyleSheet.create({
    followAndFollowingButtonStyle: {
        marginTop: Sizes.fixPadding + 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding - 2.0,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
    },
    suggestionInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding - 5.0,
        padding: Sizes.fixPadding,
        width: 140.0,
        borderColor: Colors.grayColor,
        borderWidth: 0.5
    },
    suggestionTitleWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})