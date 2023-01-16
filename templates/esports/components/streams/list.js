import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';
import Screens from '../../../../util/Screens';

const ListStreams = ({ streams, navigation }) => {

    console.log("Streams");
    console.log(streams);
    const renderItem = ({ item }) => (
        <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0 }} key={item.id}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { alert("Hello"); navigation.push('UserProfile') }}
                    style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}
                >
                    <Image
                        source={item.image_main}
                        style={{ width: 50.0, height: 50.0, borderRadius: 25.0 }}
                    />
                    <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor14SemiBold }}>
                            {item.userName}
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.grayColor12Regular }}>
                            {item.userDetail}
                        </Text>
                    </View>
                </TouchableOpacity>
                <MaterialIcons name="more-vert" size={24} color={Colors.blackColor} />
            </View>
            
            <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.push(Screens.getWatchStreams(), {stream_id : item.id}); }}
                   
                >
            <Text style={{ marginBottom: Sizes.fixPadding, marginTop: Sizes.fixPadding - 6.0, ...Fonts.grayColor12Regular }}>
                {item.title}
            </Text>
            <View style={{ borderRadius: Sizes.fixPadding, backgroundColor: Colors.whiteColor, elevation: 2.0, }}>
                <Image
                    source={{ uri : item.image_main}}
                    style={styles.postImageStyle}
                />
                <View style={styles.likeCommentAndShareInfoWrapStyle}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialIcons name={item.postLike ? "favorite" : "favorite-border"} size={15}
                            color={item.postLike ? Colors.redColor : Colors.grayColor}
                            onPress={() => { changeTodayPosts({ id: item.id }) }}
                        />
                        <Text numberOfLines={1} style={{ flex: 1, marginLeft: Sizes.fixPadding - 3.0, ...Fonts.grayColor14SemiBold }}>
                            {item.postLikes} Likes
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialIcons name="comment" size={15} color={Colors.grayColor} />
                        <Text numberOfLines={1} style={{ flex: 1, marginLeft: Sizes.fixPadding - 3.0, ...Fonts.grayColor14SemiBold }}>
                            {item.postComments} Comments
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                        <MaterialIcons name="share" size={15} color={Colors.grayColor} />
                        <Text numberOfLines={1} style={{ marginLeft: Sizes.fixPadding - 3.0, ...Fonts.grayColor14SemiBold }}>
                            {item.postShares} Share
                        </Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )
    return (
        <FlatList
            scrollEnabled={false}
            data={streams}
            keyExtractor={(item, index) => item.id}
            renderItem={renderItem}
        />
    )
}

export default ListStreams;


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
        height:  205.5,
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
});