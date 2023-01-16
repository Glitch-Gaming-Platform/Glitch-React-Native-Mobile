import { Image, StyleSheet, Text, View } from "react-native";
import { Fonts, Sizes } from "../../constants/styles";


const CircleSmallItem = ({ text, image_url }) => {

    return (
        <View style={{ alignItems: 'center', marginHorizontal: Sizes.fixPadding - 5.0, }}>
            <View>
                <Image
                    source={image_url}
                    style={{ width: 40.0, height: 40.0, borderRadius: 20.0 }}
                />
                <View style={styles.activeSmallIndicatorStyle} />
            </View>
            <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor12Regular }}>
                {text}
            </Text>
        </View>
    );
}

export default CircleSmallItem;

const styles = StyleSheet.create({
    activeSmallIndicatorStyle: {
        width: 8.0,
        height: 8.0,
        borderRadius: 4.0,
        backgroundColor: Colors.greenColor,
        position: 'absolute',
        bottom: 0.0,
        right: 5.0,
    },
})