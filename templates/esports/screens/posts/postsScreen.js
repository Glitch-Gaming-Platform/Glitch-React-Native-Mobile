import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Dimensions, FlatList } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum amet pellentesque in rhoncus, in erat. Placerat et nunc ipsum donec urna feugiat suspendisse.';

const postsList = [
    {
        id: '1',
        aboutPost: dummyText,
        postLikes: '10k',
        postComments: '100',
        postShares: '35',
        postImage: require('../../assets/images/gallery/gallery1.png'),
        postLike: true,
    },
    {
        id: '2',
        aboutPost: dummyText,
        postLikes: '10k',
        postComments: '100',
        postShares: '35',
        postImage: require('../../assets/images/gallery/gallery2.png'),
        postLike: true,
    },
    {
        id: '3',
        aboutPost: dummyText,
        postLikes: '10k',
        postComments: '100',
        postShares: '35',
        postImage: require('../../assets/images/gallery/gallery3.png'),
        postLike: true,
    },
    {
        id: '4',
        aboutPost: dummyText,
        postLikes: '10k',
        postComments: '100',
        postShares: '35',
        postImage: require('../../assets/images/gallery/gallery4.png'),
        postLike: true,
    },
    {
        id: '5',
        aboutPost: dummyText,
        postLikes: '10k',
        postComments: '100',
        postShares: '35',
        postImage: require('../../assets/images/gallery/gallery5.png'),
        postLike: true,
    },
];

const PostsScreen = ({ navigation }) => {

    const [posts, setPosts] = useState(postsList);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {postsInfo()}
            </View>
        </SafeAreaView>
    )

    function changePosts({ id }) {
        const copyPosts = posts;
        const newPosts = copyPosts.map((item) => {
            if (item.id == id) {
                return { ...item, postLike: !item.postLike }
            }
            else {
                return item
            }
        })
        setPosts(newPosts);
    }

    function postsInfo() {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}>
                        <Image
                            source={require('../../assets/images/users/user11.png')}
                            style={{ width: 50.0, height: 50.0, borderRadius: 25.0 }}
                        />
                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor14SemiBold }}>
                                Tina Shah
                            </Text>
                            <Text numberOfLines={1} style={{ ...Fonts.grayColor12Regular }}>
                                Allentown, New Mexico
                            </Text>
                        </View>
                    </View>
                    <MaterialIcons name="more-vert" size={24} color={Colors.blackColor} />
                </View>
                <Text style={{ marginBottom: Sizes.fixPadding, marginTop: Sizes.fixPadding - 6.0, ...Fonts.grayColor12Regular }}>
                    {item.aboutPost}
                </Text>
                <View style={{ borderRadius: Sizes.fixPadding, backgroundColor: Colors.whiteColor, elevation: 2.0, }}>
                    <Image
                        source={item.postImage}
                        style={styles.postImageStyle}
                    />
                    <View style={styles.likeCommentAndShareInfoWrapStyle}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            <MaterialIcons name={item.postLike ? "favorite" : "favorite-border"} size={15}
                                color={item.postLike ? Colors.redColor : Colors.grayColor}
                                onPress={() => { changePosts({ id: item.id }) }}
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
            </View>
        )
        return (
            <FlatList
                data={posts}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Posts
                </Text>
            </View>
        )
    }
}

export default PostsScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    postImageStyle: {
        height: height / 5.5,
        borderTopLeftRadius: Sizes.fixPadding,
        borderTopRightRadius: Sizes.fixPadding,
        width: '100%',
    },
    likeCommentAndShareInfoWrapStyle: {
        flexDirection: 'row',
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding + 2.0,
        borderBottomLeftRadius: Sizes.fixPadding,
        borderBottomRightRadius: Sizes.fixPadding
    },
})