import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";


const PrimaryButton =({text, onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.buttonStyle}
        >
            <Text style={{ ...Fonts.whiteColor22Bold }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center', justifyContent: 'center',
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding + 5.0,
        margin: Sizes.fixPadding * 2.0,
    }
})