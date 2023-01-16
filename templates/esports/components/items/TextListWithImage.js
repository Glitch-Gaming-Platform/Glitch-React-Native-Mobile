import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";

const TextListWithImage = ({image_url, onPress, is_active, main_text, sub_text, right_text}) => {

    return (
        <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPress}
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                        <View>
                            <Image
                                source={image_url}
                                style={{ width: 50.0, height: 50.0, borderRadius: 25.0, }}
                            />
                            {
                                is_active
                                    ?
                                    <View style={styles.activeBigIndicatorStyle} />
                                    :
                                    null
                            }
                        </View>
                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding, }}>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold }}>
                                {main_text}
                            </Text>
                            <Text numberOfLines={1} style={{ ...Fonts.grayColor14Regular }}>
                                {sub_text}
                            </Text>
                        </View>
                    </View>
                    <Text style={{ ...Fonts.blackColor12SemiBold }}>
                        {right_text}
                    </Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: Colors.extraLightGrayColor, height: 1.0, marginVertical: Sizes.fixPadding }} />
            </View>
    );
}

export default TextListWithImage;

const styles = StyleSheet.create({
  
    activeBigIndicatorStyle: {
        width: 10.0,
        height: 10.0,
        borderRadius: 5.0,
        bottom: 0.0,
        right: 5.0,
        backgroundColor: Colors.greenColor,
        position: 'absolute',
        borderColor: Colors.whiteColor,
        borderWidth: 1.0,
    },
})