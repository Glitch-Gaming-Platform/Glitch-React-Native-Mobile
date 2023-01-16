import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity, Dimensions, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const notifications = [
    {
        key: '1',
        type: 'following',
        userProfilePic: require('../../assets/images/users/user12.png'),
        userName: 'Jimmy Nislon',
        notificationTime: '3 minutes ago',
    },
    {
        key: '2',
        type: 'likeMorePhotos',
        userProfilePic: require('../../assets/images/users/user2.png'),
        userName: 'Alicia Sierra',
        likedPohotos: [
            {
                id: '1',
                photo: require('../../assets/images/posts/post6.png'),
            },
            {
                id: '2',
                photo: require('../../assets/images/posts/post7.png'),
            },
            {
                id: '3',
                photo: require('../../assets/images/posts/post8.png'),
            }
        ],
        notificationTime: '5 minutes ago',
    },
    {
        key: '3',
        type: 'likeOnePhoto',
        userProfilePic: require('../../assets/images/users/user30.png'),
        userName: 'Isha Khatri',
        likedPhoto: require('../../assets/images/gallery/gallery1.png'),
        notificationTime: '15 minutes ago',
    },
    {
        key: '4',
        type: 'following',
        userProfilePic: require('../../assets/images/users/user30.png'),
        userName: 'Isha Khatri',
        notificationTime: '20 minutes ago',
    },
    {
        key: '5',
        type: 'mention',
        userProfilePic: require('../../assets/images/users/user3.png'),
        mentionPhoto: require('../../assets/images/gallery/gallery1.png'),
        userName: 'dennyjohn.',
        mantionUserName: '@samanthaofficial',
        comment: 'very nice...',
        notificationTime: '35 minutes ago',
    },
    {
        key: '6',
        type: 'following',
        userProfilePic: require('../../assets/images/users/user29.png'),
        userName: 'Tisha Jain',
        notificationTime: '40 minutes ago',
    },
    {
        key: '7',
        type: 'likeMorePhotos',
        userProfilePic: require('../../assets/images/users/user4.png'),
        userName: 'Smiti Khan',
        likedPohotos: [
            {
                id: '1',
                photo: require('../../assets/images/publicPosts/post23.png'),
            },
            {
                id: '2',
                photo: require('../../assets/images/publicPosts/post24.png'),
            },
            {
                id: '3',
                photo: require('../../assets/images/publicPosts/post20.png'),
            },
            {
                id: '4',
                photo: require('../../assets/images/publicPosts/post11.png'),
            }
        ],
        notificationTime: '50 minutes ago',
    },
    {
        key: '8',
        type: 'likeOnePhoto',
        userProfilePic: require('../../assets/images/users/user41.png'),
        userName: 'Sonali Mishra',
        likedPhoto: require('../../assets/images/gallery/gallery5.png'),
        notificationTime: '15 minutes ago',
    },
    {
        key: '9',
        type: 'mention',
        userProfilePic: require('../../assets/images/users/user3.png'),
        mentionPhoto: require('../../assets/images/gallery/gallery1.png'),
        userName: 'dennyjohn.',
        mantionUserName: '@samanthaofficial',
        comment: 'very nice...',
        notificationTime: '2 days ago',
    },
    {
        key: '10',
        type: 'likeByMore',
        userProfilePics: [
            {
                id: '1',
                userProfilePic: require('../../assets/images/users/user41.png')
            },
            {
                id: '2',
                userProfilePic: require('../../assets/images/users/user42.png')
            },
        ],
        userProfileNames: ['Sonali Mishra', 'Roy Ali', '', '', '', ''],
        likedPhoto: require('../../assets/images/posts/post10.png'),
        notificationTime: '2 days ago',
    },
    {
        key: '11',
        type: 'seeOldPost',
        postTime: '1 year ago',
        seeTime: 'today',
        post: require('../../assets/images/gallery/gallery5.png'),
        notificationTime: '3 days ago',
    },
    {
        key: '12',
        type: 'likeByMore',
        userProfilePics: [
            {
                id: '1',
                userProfilePic: require('../../assets/images/users/user41.png')
            },
            {
                id: '2',
                userProfilePic: require('../../assets/images/users/user42.png')
            },
        ],
        userProfileNames: ['Sonali Mishra', 'Roy Ali', '', '', '', ''],
        likedPhoto: require('../../assets/images/posts/post10.png'),
        notificationTime: '2 days ago',
    },
    {
        key: '13',
        type: 'mention',
        userProfilePic: require('../../assets/images/users/user3.png'),
        mentionPhoto: require('../../assets/images/gallery/gallery1.png'),
        userName: 'dennyjohn.',
        mantionUserName: '@samanthaofficial',
        comment: 'very nice...',
        notificationTime: '3 days ago'
    },
    {
        key: '14',
        type: 'likeMorePhotos',
        userProfilePic: require('../../assets/images/users/user4.png'),
        userName: 'Smiti Khan',
        likedPohotos: [
            {
                id: '1',
                photo: require('../../assets/images/publicPosts/post23.png'),
            },
            {
                id: '2',
                photo: require('../../assets/images/publicPosts/post24.png'),
            },
            {
                id: '3',
                photo: require('../../assets/images/publicPosts/post20.png'),
            },
            {
                id: '4',
                photo: require('../../assets/images/publicPosts/post11.png'),
            }
        ],
        notificationTime: '50 minutes ago',
    },
];

const rowTranslateAnimatedValues = {};

const NotificationScreen = ({ navigation }) => {

    const [listData, setListData] = useState(notifications);
    const [showSnackBar, setShowSnackBar] = useState(false);

    Array(listData.length + 1)
        .fill('')
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });

    const animationIsRunning = useRef(false);

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        if (
            (value > width) || (value < -width) &&
            !animationIsRunning.current
        ) {
            animationIsRunning.current = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {
                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                setListData(newData);
                setShowSnackBar(true);
                animationIsRunning.current = false;
            });
        }
    };

    const renderItem = (data) => (
        <Animated.View
            style={[
                {
                    height: rowTranslateAnimatedValues[
                        data.item.key
                    ].interpolate({
                        inputRange: ['0%', '100%'],
                        outputRange: ["0%", "100%"],
                    }),
                },
            ]}
        >
            <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                    {
                        data.item.type == 'following'
                            ?
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image
                                    source={data.item.userProfilePic}
                                    style={styles.userProfilePicStyle}
                                />
                                <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                        {data.item.userName} started following you
                                    </Text>
                                    <Text style={{ ...Fonts.grayColor12Regular }}>
                                        {data.item.notificationTime}
                                    </Text>
                                </View>
                            </View>
                            :
                            data.item.type == 'likeMorePhotos'
                                ?
                                <View style={{ flexDirection: 'row', }}>
                                    <Image
                                        source={data.item.userProfilePic}
                                        style={styles.userProfilePicStyle}
                                    />
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ marginHorizontal: Sizes.fixPadding, ...Fonts.blackColor14SemiBold }}>
                                            {data.item.userName} liked {data.item.likedPohotos.length} photos
                                        </Text>
                                        <View style={{ marginHorizontal: Sizes.fixPadding - 5.0, flexDirection: 'row' }}>
                                            {
                                                data.item.likedPohotos.length >= 4
                                                    ?
                                                    data.item.likedPohotos.slice(0, 4).map((item) => (
                                                        <Image
                                                            key={`${item.id}`}
                                                            source={item.photo}
                                                            style={{ ...styles.likedPhotosStyle, width: width / 6.5, height: width / 6.5, }}
                                                        />
                                                    ))
                                                    :
                                                    data.item.likedPohotos.map((item) => (
                                                        <Image
                                                            key={`${item.id}`}
                                                            source={item.photo}
                                                            style={{ ...styles.likedPhotosStyle, width: width / 5.0, height: width / 5.0, }}
                                                        />
                                                    ))
                                            }
                                        </View>
                                        <Text style={{ marginHorizontal: Sizes.fixPadding, ...Fonts.grayColor12Regular }}>
                                            {data.item.notificationTime}
                                        </Text>
                                    </View>
                                </View>
                                :
                                data.item.type == 'likeOnePhoto'
                                    ?
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                        <View style={{ flex: 1, flexDirection: 'row', }}>
                                            <Image
                                                source={data.item.userProfilePic}
                                                style={styles.userProfilePicStyle}
                                            />
                                            <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                                                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                                    {data.item.userName} liked your photo
                                                </Text>
                                                <Text style={{ ...Fonts.grayColor12Regular }}>
                                                    {data.item.notificationTime}
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => { navigation.push('Posts') }}
                                        >
                                            <Image
                                                source={data.item.likedPhoto}
                                                style={{ width: width / 6.0, height: width / 6.0, borderRadius: Sizes.fixPadding - 5.0 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    data.item.type == 'mention'
                                        ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                                <Image
                                                    source={data.item.userProfilePic}
                                                    style={styles.userProfilePicStyle}
                                                />
                                                <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                                                    <Text>
                                                        <Text style={{ ...Fonts.blackColor14Bold }}>
                                                            {data.item.userName} { }
                                                        </Text>
                                                        <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                                            mentioned you in a commented :
                                                        </Text>
                                                        <Text style={{ ...Fonts.blueColor14SemiBold }}>
                                                            { } {data.item.mantionUserName} { }
                                                        </Text>
                                                        <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                                            {data.item.comment}
                                                        </Text>
                                                    </Text>
                                                    <Text style={{ ...Fonts.grayColor12Regular }}>
                                                        {data.item.notificationTime}
                                                    </Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                onPress={() => { navigation.push('Comments') }}
                                            >
                                                <Image
                                                    source={data.item.mentionPhoto}
                                                    style={{ width: width / 6.0, height: width / 6.0, borderRadius: Sizes.fixPadding - 5.0 }}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        data.item.type == 'likeByMore'
                                            ?
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                                    <View style={{ width: 50.0 }}>
                                                        <Image
                                                            source={data.item.userProfilePics[0].userProfilePic}
                                                            style={{ width: 38.0, height: 38.0, borderRadius: 19.0, }}
                                                        />
                                                        <Image
                                                            source={data.item.userProfilePics[1].userProfilePic}
                                                            style={{ width: 38.0, height: 38.0, borderRadius: 19.0, position: 'absolute', right: 0.0, bottom: 2.0, }}
                                                        />
                                                    </View>
                                                    <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                                                        <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                                            {data.item.userProfileNames[0]} , {data.item.userProfileNames[1]} and {data.item.userProfileNames.length - 2} others liked your photo
                                                        </Text>
                                                        <Text style={{ ...Fonts.grayColor12Regular }}>
                                                            {data.item.notificationTime}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => { navigation.push('Posts') }}
                                                >
                                                    <Image
                                                        source={data.item.likedPhoto}
                                                        style={{ width: width / 6.0, height: width / 6.0, borderRadius: Sizes.fixPadding - 5.0 }}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                            :
                                            data.item.type == 'seeOldPost'
                                                ?
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                                        <View style={styles.historyIconWrapStyle}>
                                                            <MaterialIcons name="history" size={24} color={Colors.primaryColor} />
                                                        </View>
                                                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                                                            <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                                                See your post from {data.item.postTime} {data.item.seeTime}
                                                            </Text>
                                                            <Text style={{ ...Fonts.grayColor12Regular }}>
                                                                {data.item.notificationTime}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => { navigation.push('Posts') }}
                                                    >
                                                        <Image
                                                            source={data.item.post}
                                                            style={{ width: width / 6.0, height: width / 6.0, borderRadius: Sizes.fixPadding - 5.0 }}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                                :
                                                null
                    }
                    <View style={{ backgroundColor: Colors.extraLightGrayColor, height: 1.0, marginVertical: Sizes.fixPadding, }} />
                </View>
            </View>
        </Animated.View>
    );

    const renderHiddenItem = () => (
        <View style={styles.rowBack} />
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <FlatList
                    ListHeaderComponent={
                        <>
                            {followRequestsInfo()}
                            {
                                listData.length == 0
                                    ?
                                    noNotiificationInfo()
                                    :
                                    notificationsInfo()
                            }
                        </>
                    }
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 9.0 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            {snackBar()}
        </SafeAreaView>
    )

    function noNotiificationInfo() {
        return (
            <View style={{ height: height / 1.8, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                <Ionicons name="ios-notifications-off-outline" size={40} color={Colors.lightGrayColor} style={{ marginBottom: Sizes.fixPadding }} />
                <Text style={{ ...Fonts.lightGrayColor16SemiBold }}>
                    No any notifications
                </Text>
            </View>
        )
    }

    function snackBar() {
        return (
            <Snackbar
                style={{ backgroundColor: Colors.blackColor, elevation: 0.0, marginBottom: Sizes.fixPadding * 8.5 }}
                visible={showSnackBar}
                onDismiss={() => setShowSnackBar(false)}
            >
                notification dismissed
            </Snackbar>
        )
    }

    function notificationsInfo() {
        return (
            <View style={{ paddingTop: Sizes.fixPadding, }}>
                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-width}
                    leftOpenValue={width}
                    onSwipeValueChange={onSwipeValueChange}
                    useNativeDriver={false}
                    scrollEnabled={false}
                />
            </View>
        )
    }

    function followRequestsInfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('FollowRequest') }}
                style={{ flexDirection: 'row', alignItems: 'center', margin: Sizes.fixPadding * 2.0, }}
            >
                <View>
                    <Image
                        source={require('../../assets/images/users/user27.png')}
                        style={{ width: 60.0, height: 60.0, borderRadius: 30.0, }}
                    />
                    <View style={styles.followingRequestWrapStyle}>
                        <Text numberOfLines={1} style={{ ...Fonts.whiteColor12Bold }}>
                            255
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0 }}>
                    <Text style={{ ...Fonts.blackColor18SemiBold }}>
                        Follow Request
                    </Text>
                    <Text style={{ ...Fonts.grayColor14Regular }}>
                        Approve or ignore requests
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <Text style={{ ...Fonts.blackColor20SemiBold }}>
                    Notifications
                </Text>
            </View>
        )
    }
}

export default NotificationScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    followingRequestWrapStyle: {
        width: 30.0,
        height: 30.0,
        borderRadius: 15.0,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -5.0, right: -5.0
    },
    likedPhotosStyle: {
        marginHorizontal: Sizes.fixPadding - 5.0,
        marginVertical: Sizes.fixPadding - 5.0,
        borderRadius: Sizes.fixPadding - 5.0
    },
    userProfilePicStyle: {
        width: 50.0,
        height: 50.0,
        borderRadius: 25.0,
    },
    historyIconWrapStyle: {
        width: 50.0,
        height: 50.0,
        borderRadius: 25.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        flex: 1,
        marginBottom: Sizes.fixPadding,
    },
})