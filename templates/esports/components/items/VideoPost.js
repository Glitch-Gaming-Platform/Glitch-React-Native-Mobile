import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, Sizes } from "../../constants/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const VideoPost = ({image_url, view_count, onPress }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{ marginHorizontal: Sizes.fixPadding - 5.0, marginBottom: Sizes.fixPadding }}
        >
            <Image
                source={image_url}
                style={styles.galleryImageStyle}
            />
            <View style={styles.videoViewsInfoWrapStyle}>
                <MaterialCommunityIcons name="play-outline" size={20} color={Colors.whiteColor} />
                <Text style={{ ...Fonts.whiteColor12SemiBold }}>
                    {view_count}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default VideoPost;

const styles = StyleSheet.create({
    galleryImageStyle: {
        maxWidth: (width / 3.0) - 20.0,
        height: height / 6.0,
        flex: 1,
    },
    videoViewsInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10.0,
        left: 5.0
    }
})