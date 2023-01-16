import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import Requests from '../../../../util/Requests';
import ListStreams from '../../components/streams/list';
import BottomTabNavigation from '../../components/layout/bottom_tab_navigation';

const { height } = Dimensions.get('window')

const usersStories = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user1.png'),
        storySeen: false,
        userName: 'Shree',
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user2.png'),
        storySeen: false,
        userName: 'Alicia',
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user3.png'),
        storySeen: false,
        userName: 'Denny',
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user4.png'),
        storySeen: true,
        userName: 'Smiti',
    }, {
        id: '5',
        userProfilePic: require('../../assets/images/users/user5.png'),
        storySeen: true,
        userName: 'Imran',
    }, {
        id: '6',
        userProfilePic: require('../../assets/images/users/user6.png'),
        storySeen: true,
        userName: 'Dolly',
    }, {
        id: '7',
        userProfilePic: require('../../assets/images/users/user7.png'),
        storySeen: true,
        userName: 'Denver',
    }, {
        id: '8',
        userProfilePic: require('../../assets/images/users/user8.png'),
        storySeen: true,
        userName: 'Isha',
    }, {
        id: '9',
        userProfilePic: require('../../assets/images/users/user9.png'),
        storySeen: true,
        userName: 'Trisha',
    }, {
        id: '10',
        userProfilePic: require('../../assets/images/users/user10.png'),
        storySeen: true,
        userName: 'Roy',
    },
];

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum amet pellentesque in rhoncus, in erat. Placerat et nunc ipsum donec urna feugiat suspendisse.';

const todaysPostsList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user2.png'),
        userName: 'Alicia Sierra',
        userDetail: 'Allentown, New Mexico',
        aboutPost: dummyText,
        postLikes: '10k',
        postComments: '100',
        postShares: '35',
        postImage: require('../../assets/images/posts/post1.png'),
        postLike: true,
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user4.png'),
        userName: 'Smiti Khana',
        userDetail: 'Allentown, New Mexico',
        aboutPost: dummyText,
        postLikes: '10k',
        postComments: '100',
        postShares: '35',
        postImage: require('../../assets/images/posts/post2.png'),
        postLike: false,
    },
];

const suggestionsList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user11.png'),
        userName: 'Tina Shah',
        userAbout: 'realtinashah',
        isFollow: false,
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user12.png'),
        userName: 'Jiya Patel',
        userAbout: 'officialjiya',
        isFollow: false,
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user13.png'),
        userName: 'Joy Jain',
        userAbout: 'joyyyyy',
        isFollow: false,
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user14.png'),
        userName: 'Ishan Patel',
        userAbout: 'ishanpatel',
        isFollow: false,
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user11.png'),
        userName: 'Tina Shah',
        userAbout: 'realtinashah',
        isFollow: false,
    }
];

const oldPostsList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user3.png'),
        userName: 'Denny John',
        userDetail: 'Allentown, New Mexico',
        aboutPost: dummyText,
        postLikes: '10k',
        postComments: '100',
        postShares: '35',
        postImage: require('../../assets/images/posts/post3.png'),
        postLike: true,
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user8.png'),
        userName: 'Roy Khurana',
        userDetail: 'Allentown, New Mexico',
        aboutPost: dummyText,
        postLikes: '10k',
        postComments: '100',
        postShares: '35',
        postImage: require('../../assets/images/posts/post4.png'),
        postLike: false,
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user10.png'),
        userName: 'Ishan Khatri',
        userDetail: 'Allentown, New Mexico',
        aboutPost: dummyText,
        postLikes: '10k',
        postComments: '100',
        postShares: '35',
        postImage: require('../../assets/images/posts/post5.png'),
        postLike: false,
    },
];

const HomeScreen = ({ navigation }) => {

    const [todaysPosts, setTodaysPosts] = useState(todaysPostsList);
    const [suggestions, setSuggestions] = useState(suggestionsList);
    const [oldPosts, setOldPosts] = useState(oldPostsList);

    const [streams, setStreams] = useState([]);
    const [streamsElement, setStreamsElement] = useState([]);



    useEffect(() => {

        Requests.eventsList().then(response => {
            console.log("Loading Streams");
            setStreams(response.data);
            setStreamsElement(<ListStreams streams={response.data} navigation={navigation} />);
        }).catch(error => {
            console.log(error);
        });

    }, []);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 6 }}>
                {header()}
                <FlatList
                    ListHeaderComponent={
                        <>
                            {streamsElement}
                            {shortStoriesInfo()}
                            {posts()}
                            {suggestionsInfo()}
                            {oldPostsInfo()}
                           
                        </>
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 8.5 }}
                />
            </View>
            <BottomTabNavigation navigation={navigation} />
        </SafeAreaView>
    )

    function changeOldPosts({ id }) {
        const copyPosts = oldPosts;
        const newPosts = copyPosts.map((item) => {
            if (item.id == id) {
                return { ...item, postLike: !item.postLike }
            }
            else {
                return item
            }
        })
        setOldPosts(newPosts);
    }

    function oldPostsInfo() {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.push('UserProfile')}
                        style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}
                    >
                        <Image
                            source={item.userProfilePic}
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
                                onPress={() => { changeOldPosts({ id: item.id }) }}
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
                scrollEnabled={false}
                data={oldPosts}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                listKey={`oldPosts`}
            />
        )
    }

    function updateSuggestions({ id }) {
        const copySuggestions = suggestions;
        const newSuggestions = copySuggestions.map((item) => {
            if (item.id == id) {
                return { ...item, isFollow: !item.isFollow }
            }
            else {
                return item
            }
        })
        setSuggestions(newSuggestions);
    }

    function suggestionsInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.push('UserProfile')}
                style={styles.suggestionInfoWrapStyle}
            >
                <Image
                    source={item.userProfilePic}
                    style={{ width: 60.0, height: 60.0, borderRadius: 30.0, alignSelf: 'center', marginBottom: Sizes.fixPadding, }}
                />
                <Text style={{ textAlign: 'center', ...Fonts.blackColor16SemiBold }}>
                    {item.userName}
                </Text>
                <Text style={{ textAlign: 'center', ...Fonts.grayColor14Regular }}>
                    {item.userAbout}
                </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => updateSuggestions({ id: item.id })}
                    style={{ backgroundColor: item.isFollow ? Colors.whiteColor : Colors.primaryColor, ...styles.followAndFollowingButtonStyle, }}
                >
                    <Text style={{ ...item.isFollow ? { ...Fonts.primaryColor18Bold } : { ...Fonts.whiteColor18Bold } }}>
                        {item.isFollow ? 'Following' : 'Follow'}
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )
        return (
            <View>
                <View style={styles.suggestionTitleWrapStyle}>
                    <Text style={{ ...Fonts.blackColor18SemiBold }}>
                        Suggestion for you
                    </Text>
                    <Text style={{ ...Fonts.primaryColor14SemiBold }}>
                        See All
                    </Text>
                </View>
                <FlatList
                    data={suggestions}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: Sizes.fixPadding * 2.0, paddingHorizontal: Sizes.fixPadding + 5.0 }}
                />
            </View>
        )
    }

    function changeTodayPosts({ id }) {
        const copyPosts = todaysPosts;
        const newPosts = copyPosts.map((item) => {
            if (item.id == id) {
                return { ...item, postLike: !item.postLike }
            }
            else {
                return item
            }
        })
        setTodaysPosts(newPosts);
    }

    function posts() {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { navigation.push('UserProfile') }}
                        style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}
                    >
                        <Image
                            source={item.userProfilePic}
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
            </View>
        )
        return (
            <FlatList
                scrollEnabled={false}
                data={todaysPosts}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
            />
        )
    }

    function shortStoriesInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.push('OpenStory')}
                style={{ alignItems: 'center', marginHorizontal: Sizes.fixPadding - 5.0, }}
            >
                <View style={{ borderColor: item.storySeen ? Colors.lightGrayColor : Colors.primaryColor, ...styles.userProfilePicWrapStyle, }}>
                    <Image
                        source={item.userProfilePic}
                        style={styles.userProfilePicStyle}
                    />
                </View>
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor10Regular }}>
                    {item.userName}
                </Text>
            </TouchableOpacity>
        )
        return (
            <View style={{ paddingVertical: Sizes.fixPadding + 5.0 }}>
                <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.primaryColor14Bold }}>
                    Short Stories
                </Text>
                <FlatList
                    data={usersStories}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: Sizes.fixPadding + 5.0, paddingRight: Sizes.fixPadding, paddingVertical: Sizes.fixPadding - 5.0 }}
                    ListHeaderComponent={addStoryIcon()}
                />
            </View>
        )
    }

    function addStoryIcon() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('CreateStory') }}
                style={{ alignItems: 'center' }}
            >
                <View style={styles.addStoryIconWrapStyle}>
                    <MaterialIcons name="add" size={30} color={Colors.primaryColor} />
                </View>
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor10Regular }}>
                    Share story
                </Text>
            </TouchableOpacity>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/images/homeAppLogo.png')}
                        style={{ wiidth: 26.0, height: 26.0, resizeMode: 'contain' }}
                    />
                    <Text>
                        <Text style={{ ...Fonts.primaryColor12ExtraBold }}>
                            Social { }
                        </Text>
                        <Text style={{ ...Fonts.secondaryColor12ExtraBold }}>
                            Media
                        </Text>
                    </Text>
                </View>
                <MaterialIcons name="search" size={24} color={Colors.blackColor} onPress={() => navigation.push('Search')} />
            </View>
        )
    }
}

export default HomeScreen

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