import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const allPosts = [
    {
        id: '1',
        image: require('../../assets/images/gallery/gallery1.png'),
    },
    {
        id: '2',
        image: require('../../assets/images/gallery/gallery2.png'),
    },
    {
        id: '3',
        image: require('../../assets/images/gallery/gallery3.png'),
    },
    {
        id: '4',
        image: require('../../assets/images/gallery/gallery4.png'),
    },
    {
        id: '5',
        image: require('../../assets/images/gallery/gallery5.png'),
    },
    {
        id: '6',
        image: require('../../assets/images/gallery/gallery6.png'),
    },
    {
        id: '7',
        image: require('../../assets/images/gallery/gallery7.png'),
    },
    {
        id: '8',
        image: require('../../assets/images/gallery/gallery8.png'),
    },
    {
        id: '9',
        image: require('../../assets/images/gallery/gallery9.png'),
    },
    {
        id: '10',
        image: require('../../assets/images/gallery/gallery10.png'),
    },
    {
        id: '11',
        image: require('../../assets/images/gallery/gallery11.png'),
    },
    {
        id: '12',
        image: require('../../assets/images/gallery/gallery12.png'),
    },
    {
        id: '13',
        image: require('../../assets/images/gallery/gallery13.png'),
    },
    {
        id: '14',
        image: require('../../assets/images/gallery/gallery14.png'),
    },
    {
        id: '15',
        image: require('../../assets/images/gallery/gallery15.png'),
    },
];

const videoPosts = [
    {
        id: '1',
        image: require('../../assets/images/videoThumbnails/thumbnail1.png'),
        views: '190k',
    },
    {
        id: '2',
        image: require('../../assets/images/videoThumbnails/thumbnail2.png'),
        views: '200k',
    },
    {
        id: '3',
        image: require('../../assets/images/videoThumbnails/thumbnail3.png'),
        views: '120k',
    },
    {
        id: '4',
        image: require('../../assets/images/videoThumbnails/thumbnail4.png'),
        views: '190k',
    },
    {
        id: '5',
        image: require('../../assets/images/videoThumbnails/thumbnail5.png'),
        views: '200k',
    },
    {
        id: '6',
        image: require('../../assets/images/videoThumbnails/thumbnail6.png'),
        views: '120k',
    },
    {
        id: '7',
        image: require('../../assets/images/videoThumbnails/thumbnail7.png'),
        views: '190k',
    },
    {
        id: '8',
        image: require('../../assets/images/videoThumbnails/thumbnail8.png'),
        views: '200k',
    },
    {
        id: '9',
        image: require('../../assets/images/videoThumbnails/thumbnail9.png'),
        views: '120k',
    },
    {
        id: '10',
        image: require('../../assets/images/videoThumbnails/thumbnail10.png'),
        views: '190k',
    },
    {
        id: '11',
        image: require('../../assets/images/videoThumbnails/thumbnail11.png'),
        views: '190k',
    },
    {
        id: '12',
        image: require('../../assets/images/videoThumbnails/thumbnail12.png'),
        views: '200k',
    },
];

const imagePosts = [
    {
        id: '1',
        image: require('../../assets/images/posts/post26.png'),
    },
    {
        id: '2',
        image: require('../../assets/images/posts/post27.png'),
    },
    {
        id: '3',
        image: require('../../assets/images/posts/post28.png'),
    },
    {
        id: '4',
        image: require('../../assets/images/posts/post29.png'),
    },
];

const UserProfileScreen = ({ navigation }) => {

    const [isFollow, setIsFollow] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);

    const scrollToIndex = ({ index }) => {
        listRef.current.scrollToIndex({ animated: true, index: index });
        setCurrentTab(index);
    }

    const listRef = useRef();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {userPostsAndFollowersRelatedInfo()}
                    {userInfo()}
                    {followAndMessageButton()}
                    {tabs()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function allPostsInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('Posts') }}
                style={{ marginHorizontal: Sizes.fixPadding - 5.0, marginBottom: Sizes.fixPadding }}
            >
                <Image
                    source={item.image}
                    style={styles.galleryImageStyle}
                />
            </TouchableOpacity>
        )
        return (
            <View style={{ flex: 1, }}>
                <FlatList
                    data={allPosts}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding + 5.0, paddingBottom: Sizes.fixPadding }}
                    scrollEnabled={false}
                />
            </View>
        )
    }

    function videoPostsInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('Videos') }}
                style={{ marginHorizontal: Sizes.fixPadding - 5.0, marginBottom: Sizes.fixPadding }}
            >
                <Image
                    source={item.image}
                    style={styles.galleryImageStyle}
                />
                <View style={styles.videoViewsInfoWrapStyle}>
                    <MaterialCommunityIcons name="play-outline" size={20} color={Colors.whiteColor} />
                    <Text style={{ ...Fonts.whiteColor12SemiBold }}>
                        {item.views}
                    </Text>
                </View>
            </TouchableOpacity>

        )
        return (
            <View style={{ flex: 1, }}>
                <FlatList
                    data={videoPosts}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding + 5.0, paddingBottom: Sizes.fixPadding }}
                    scrollEnabled={false}
                />
            </View>
        )
    }

    function imagePostsInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('Posts') }}
                style={{ marginHorizontal: Sizes.fixPadding - 5.0, marginBottom: Sizes.fixPadding }}
            >
                <Image
                    source={item.image}
                    style={styles.galleryImageStyle}
                />
            </TouchableOpacity>
        )
        return (
            <View style={{ flex: 1, }}>
                <FlatList
                    data={imagePosts}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding + 5.0, paddingBottom: Sizes.fixPadding }}
                    scrollEnabled={false}
                />
            </View>
        )
    }

    function tabBarHeader() {
        return (
            <View style={styles.tabBarHeaderWrapStyle}>
                {tabBarHeaderSort({ icon: <MaterialCommunityIcons name="grid" size={23} color={currentTab == 0 ? Colors.primaryColor : Colors.lightGrayColor} />, index: 0, })}
                {tabBarHeaderSort({ icon: <MaterialIcons name="airplay" size={22} color={currentTab == 1 ? Colors.primaryColor : Colors.lightGrayColor} />, index: 1, })}
                {tabBarHeaderSort({ icon: <MaterialCommunityIcons name="tooltip-image-outline" size={24} color={currentTab == 2 ? Colors.primaryColor : Colors.lightGrayColor} />, index: 2, })}
            </View>
        )
    }

    function tabBarHeaderSort({ icon, index }) {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { scrollToIndex({ index: index }) }}
                style={{ flex: 1, alignItems: 'center' }}
            >
                <View style={{ width: 24., height: 24.0, marginBottom: Sizes.fixPadding }}>
                    {icon}
                </View>
                <View style={{ height: 2.0, backgroundColor: index == currentTab ? Colors.primaryColor : Colors.lightGrayColor, width: '100%' }} />
            </TouchableOpacity>
        )
    }

    function onScrollEnd(e) {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        setCurrentTab(pageNum);
    }

    function tabs() {
        return (
            <View style={{ flex: 1, }}>
                {tabBarHeader()}
                {tabData()}
            </View>
        )
    }

    function tabData() {
        return (
            <FlatList
                ref={listRef}
                initialScrollIndex={currentTab}
                data={[0, 1, 2]}
                renderItem={({ item }) => (
                    <View style={{ width: width, }}>
                        {item == 0
                            ?
                            allPostsInfo()
                            :
                            item == 1
                                ?
                                videoPostsInfo()
                                :
                                imagePostsInfo()
                        }
                    </View>
                )}
                horizontal={true}
                scrollEventThrottle={32}
                pagingEnabled
                onMomentumScrollEnd={onScrollEnd}
                showsHorizontalScrollIndicator={false}
            />
        )
    }

    function followAndMessageButton() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: Sizes.fixPadding, marginTop: Sizes.fixPadding + 5.0 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { setIsFollow(!isFollow) }}
                    style={{ ...styles.buttonStyle, backgroundColor: isFollow ? Colors.whiteColor : Colors.primaryColor, }}
                >
                    <Text numberOfLines={1} style={isFollow ? { ...Fonts.primaryColor18Bold } : { ...Fonts.whiteColor18Bold }}>
                        {isFollow ? 'Following' : 'Follow'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.push("Message") }}
                    style={{ ...styles.buttonStyle, backgroundColor: Colors.whiteColor, }}
                >
                    <Text style={{ ...Fonts.primaryColor18Bold }}>
                        Message
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function userInfo() {
        const userStoryAvailable = true;
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <View style={{ flex: 1, }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor18SemiBold }}>
                            Tina Shah
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.grayColor14Regular }}>
                            Artist
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor14Regular }}>
                            Art + Prints + Workshops
                        </Text>
                        <Text numberOfLines={1}>
                            <Text style={{ ...Fonts.blackColor14Regular }}>
                                Find me on { }
                            </Text>
                            <Text style={{ ...Fonts.blueColor14Regular }}>
                                @samantha___
                            </Text>
                        </Text>
                        <Text numberOfLines={1}>
                            <Text style={{ ...Fonts.blackColor14Regular }}>
                                Website: { }
                            </Text>
                            <Text style={{ ...Fonts.blueColor14Regular }}>
                                www.officialtinashah.com
                            </Text>
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { userStoryAvailable ? navigation.push('OpenStory') : null }}
                        style={{ ...styles.userImageWrapStyle, borderColor: userStoryAvailable ? Colors.primaryColor : Colors.lightGrayColor, }}
                    >
                        <Image
                            source={require('../../assets/images/users/user11.png')}
                            style={{ width: width / 4.35, height: width / 4.35, borderRadius: (width / 4.35) / 2.0 }}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{ ...Fonts.blackColor14Regular }}>
                    Followed by Followed by alicia___ , isha.__ , officialjoyjain_ and 27 more
                </Text>
            </View>
        )
    }

    function userPostsAndFollowersRelatedInfo() {
        return (
            <View style={styles.userPostsAndFollowersRelatedInfoWrapStyle}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ ...Fonts.blackColor16Bold }}>
                        105
                    </Text>
                    <Text numberOfLines={1} style={{ maxWidth: width / 4.3, ...Fonts.grayColor14Regular }}>
                        posts
                    </Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ ...Fonts.blackColor16Bold }}>
                        59
                    </Text>
                    <Text numberOfLines={1} style={{ maxWidth: width / 4.3, ...Fonts.grayColor14Regular }}>
                        videos
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.push('Followers') }} style={{ alignItems: 'center', }}>
                    <Text style={{ ...Fonts.blackColor16Bold }}>
                        850k
                    </Text>
                    <Text numberOfLines={1} style={{ maxWidth: width / 4.3, ...Fonts.grayColor14Regular }}>
                        followers
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.push('Followings') }} style={{ alignItems: 'center', }}>
                    <Text style={{ ...Fonts.blackColor16Bold }}>
                        542
                    </Text>
                    <Text numberOfLines={1} style={{ maxWidth: width / 4.3, ...Fonts.grayColor14Regular }}>
                        following
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    realtinashah
                </Text>
            </View>
        )
    }
}

export default UserProfileScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    userPostsAndFollowersRelatedInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: Sizes.fixPadding * 2.0,
    },
    userImageWrapStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        width: width / 4.0,
        height: width / 4.0,
        borderRadius: (width / 4.0) / 2.0,
        backgroundColor: Colors.whiteColor
    },
    buttonStyle: {
        flex: 1,
        paddingVertical: Sizes.fixPadding + 2.0,
        marginHorizontal: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding,
        elevation: 3.0,
    },
    galleryImageStyle: {
        maxWidth: (width / 3.0) - 20.0,
        height: height / 6.0,
        flex: 1,
    },
    tabBarHeaderWrapStyle: {
        marginVertical: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    videoViewsInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10.0,
        left: 5.0
    }
})