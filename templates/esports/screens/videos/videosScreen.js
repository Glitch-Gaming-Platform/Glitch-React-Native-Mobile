import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, Image } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player';
import { FlatList } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

const videoPostsList = [
    {
        id: '1',
        videoUrl: require('../../assets/videos/sampleVideo.mp4'),
        songCasts: 'Arijit Singh , Shreya Ghosal',
        songName: 'Qaafirana',
        isLike: true,
        postLikes: '125K',
        postComments: '550',
        isPlay: false,
    },
    {
        id: '2',
        videoUrl: require('../../assets/videos/sampleVideo.mp4'),
        songCasts: 'Arijit Singh , Shreya Ghosal',
        songName: 'Qaafirana',
        isLike: false,
        postLikes: '125K',
        postComments: '550',
        isPlay: false,
    },
    {
        id: '3',
        videoUrl: require('../../assets/videos/sampleVideo.mp4'),
        songCasts: 'Arijit Singh , Shreya Ghosal',
        songName: 'Qaafirana',
        isLike: false,
        postLikes: '125K',
        postComments: '550',
        isPlay: false,
    },
    {
        id: '4',
        videoUrl: require('../../assets/videos/sampleVideo.mp4'),
        songCasts: 'Arijit Singh , Shreya Ghosal',
        songName: 'Qaafirana',
        isLike: true,
        postLikes: '125K',
        postComments: '550',
        isPlay: false,
    },
    {
        id: '5',
        videoUrl: require('../../assets/videos/sampleVideo.mp4'),
        songCasts: 'Arijit Singh , Shreya Ghosal',
        songName: 'Qaafirana',
        isLike: true,
        postLikes: '125K',
        postComments: '550',
        isPlay: false,
    },
];

const VideosScreen = ({ navigation }) => {
    const [videoPosts, setVideoPosts] = useState(videoPostsList);
    const [currentTab, setCurrentTab] = useState(0);

    const onViewCallBack = useCallback((viewableItems) => {
        setCurrentTab(viewableItems.changed[0].item.id)
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {videoPostsInfo()}
            </View>
        </SafeAreaView>
    )

    function changeVideos({ id }) {
        const copyPosts = videoPosts;
        const newPosts = copyPosts.map((item) => {
            if (item.id == id) {
                return { ...item, isLike: !item.isLike }
            }
            else {
                return item
            }
        })
        setVideoPosts(newPosts);
    }

    function videoPostsInfo() {
        const renderItem = ({ item, index }) => {
            return (
                <View style={{ width: '100%', height: (height - (66 + StatusBar.currentHeight)), }}>
                    <View style={{ flex: 1, }}>
                        <VideoPlayer
                            videoProps={{
                                shouldPlay: currentTab == item.id ? true : false,
                                resizeMode: ResizeMode.STRETCH,
                                source: item.videoUrl,
                                isLooping: true,
                            }}
                            fullscreen={{
                                inFullscreen: true,
                                visible: true,
                            }}
                            icon={{
                                pause: <MaterialIcons name='pause-circle-filled' color={Colors.whiteColor} size={50} style={{ marginBottom: height / 4.5 }} />,
                                play: <MaterialIcons name='play-circle-filled' color={Colors.whiteColor} size={50} style={{ marginBottom: height / 4.5 }} />,
                            }}
                            slider={{ visible: false, }}
                            timeVisible={false}
                            activityIndicator={{ color: 'transparent', size: 50.0, }}
                        />
                        <View style={styles.videoInfoWrapStyle}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../assets/images/users/user11.png')}
                                    style={styles.userImageStyle}
                                />
                                <Text numberOfLines={1} style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
                                    <Text style={{ ...Fonts.whiteColor14SemiBold }}>
                                        realtinashah
                                    </Text>
                                    <Text style={{ ...Fonts.whiteColor16SemiBold }}>
                                        { } • Follow
                                    </Text>
                                </Text>
                            </View>
                            <View style={{ marginTop: Sizes.fixPadding - 8.0, flexDirection: 'row', alignItems: 'center', }}>
                                <MaterialIcons name="multitrack-audio" size={18} color={Colors.whiteColor} />
                                <Text numberOfLines={2} style={{ marginLeft: Sizes.fixPadding - 7.0, flex: 1, ...Fonts.whiteColor12Regular }}>
                                    {item.songCasts} • {item.songName}
                                </Text>
                            </View>
                            <View style={styles.videoLikeShareAndCmtInfoWrapStyle}>
                                <View style={{ flexDirection: 'row' }}>
                                    <MaterialIcons name={item.isLike ? "favorite" : "favorite-border"} size={20} color={Colors.whiteColor} onPress={() => { changeVideos({ id: item.id }) }} />
                                    <FontAwesome name="commenting-o" size={18} color={Colors.whiteColor} style={{ marginHorizontal: Sizes.fixPadding + 5.0 }} />
                                    <Feather name="share-2" size={17} color={Colors.whiteColor} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <MaterialIcons name={"favorite"} size={14} color={Colors.whiteColor} />
                                        <Text style={{ marginLeft: Sizes.fixPadding - 6.0, ...Fonts.whiteColor10SemiBold }}>
                                            {item.postLikes}
                                        </Text>
                                    </View>
                                    <View style={{ marginLeft: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                                        <FontAwesome name={"commenting-o"} size={14} color={Colors.whiteColor} />
                                        <Text style={{ marginLeft: Sizes.fixPadding - 6.0, ...Fonts.whiteColor10SemiBold }}>
                                            {item.postComments}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
        return (
            <FlatList
                data={videoPosts}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                snapToInterval={height - (66 + StatusBar.currentHeight)}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                onViewableItemsChanged={onViewCallBack}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Videos
                </Text>
            </View>
        )
    }
}

export default VideosScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    videoInfoWrapStyle: {
        position: 'absolute',
        bottom: 0.0,
        right: 0.0,
        left: 0.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0
    },
    userImageStyle: {
        width: 35.0,
        height: 35.0,
        borderRadius: 17.5,
        borderColor: Colors.whiteColor,
        borderWidth: 0.5,
    },
    videoLikeShareAndCmtInfoWrapStyle: {
        marginTop: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})