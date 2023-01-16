import { Image, StyleSheet, Text, View } from "react-native"
import { Fonts } from "../../constants/styles"
import { MaterialIcons } from '@expo/vector-icons';


const PostWithUserItem = ({user_name, user_details, user_image_url, userOnPress, post_content, post_image_url, postOnPress, likes_count, comments_count, shares_count}) => {

    return (
        <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={userOnPress}
                        style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}
                    >
                        <Image
                            source={user_image_url}
                            style={{ width: 50.0, height: 50.0, borderRadius: 25.0 }}
                        />
                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor14SemiBold }}>
                                {user_name}
                            </Text>
                            <Text numberOfLines={1} style={{ ...Fonts.grayColor12Regular }}>
                                {user_details}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <MaterialIcons name="more-vert" size={24} color={Colors.blackColor} />
                </View>
                <Text style={{ marginBottom: Sizes.fixPadding, marginTop: Sizes.fixPadding - 6.0, ...Fonts.grayColor12Regular }}>
                    {post_content}
                </Text>
                <View style={{ borderRadius: Sizes.fixPadding, backgroundColor: Colors.whiteColor, elevation: 2.0, }}>
                    <Image
                        source={post_image_url}
                        style={styles.postImageStyle}
                    />
                    <View style={styles.likeCommentAndShareInfoWrapStyle}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            <MaterialIcons name={true ? "favorite" : "favorite-border"} size={15}
                                color={true ? Colors.redColor : Colors.grayColor}
                                onPress={postOnPress}
                            />
                            <Text numberOfLines={1} style={{ flex: 1, marginLeft: Sizes.fixPadding - 3.0, ...Fonts.grayColor14SemiBold }}>
                                {likes_count} Likes
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            <MaterialIcons name="comment" size={15} color={Colors.grayColor} />
                            <Text numberOfLines={1} style={{ flex: 1, marginLeft: Sizes.fixPadding - 3.0, ...Fonts.grayColor14SemiBold }}>
                                {comments_count} Comments
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                            <MaterialIcons name="share" size={15} color={Colors.grayColor} />
                            <Text numberOfLines={1} style={{ marginLeft: Sizes.fixPadding - 3.0, ...Fonts.grayColor14SemiBold }}>
                                {shares_count} Share
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
    )
}

export default PostWithUserItem;


const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Sizes.fixPadding * 2.0,
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
    },
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
    },
    addStoryIconWrapStyle: {
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
        borderStyle: 'dashed',
        borderWidth: 1.5,
        backgroundColor: '#E3F2FD',
        borderColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding - 5.0,
    },
    postImageStyle: {
        height: height / 5.5,
        borderTopLeftRadius: Sizes.fixPadding,
        borderTopRightRadius: Sizes.fixPadding,
        width: '100%'
    },
    likeCommentAndShareInfoWrapStyle: {
        flexDirection: 'row',
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding + 2.0,
        borderBottomLeftRadius: Sizes.fixPadding,
        borderBottomRightRadius: Sizes.fixPadding
    },
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