import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Sizes } from "../../constants/styles";


const ImagePost = ({ onPress, image_url }) => {

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
        </TouchableOpacity>
    );

}

export default ImagePost;

const styles = StyleSheet.create({
    galleryImageStyle: {
        maxWidth: (width / 3.0) - 20.0,
        height: height / 6.0,
        flex: 1,
    },
})