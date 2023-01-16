import { StyleSheet, Text, View } from "react-native";
import { Fonts, Sizes } from "../../constants/styles";

const H2 = ({ title, subtitle}) => {

    return (
        <View style={styles.suggestionTitleWrapStyle}>
            <Text style={{ ...Fonts.blackColor18SemiBold }}>
                {title}
            </Text>
            <Text style={{ ...Fonts.primaryColor14SemiBold }}>
                {subtitle}
            </Text>
        </View>
    );
}

export default H2;

const styles = StyleSheet.create({
    suggestionTitleWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});