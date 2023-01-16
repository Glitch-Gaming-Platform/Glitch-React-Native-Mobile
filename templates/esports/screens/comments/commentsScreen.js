import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TextInput, FlatList } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const commentsList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user28.png'),
        userProfileName: 'jiyashah_',
        userComment: '😇',
        commentTime: '1h',
        commentLike: 2,
        isLike: true,
        replyAvailable: true,
        replys: [
            {
                id: '1',
                userProfilePic: require('../../assets/images/users/user41.png'),
                userProfileName: 'samanthaofficial',
                userReply: '😇',
                replyTo: '@jiyashah_',
                commentTime: '1h',
                commentLike: 2,
                isLike: false,
            },
        ],
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user29.png'),
        userProfileName: 'ishaofficial.',
        userComment: '💫🙂',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: false,
        isLike: false,
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user18.png'),
        userProfileName: 'ishankhatri',
        userComment: 'Nice one...',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: true,
        isLike: true,
        replys: [
            {
                id: '1',
                userProfilePic: require('../../assets/images/users/user41.png'),
                userProfileName: 'samanthaofficial',
                userReply: 'Thank you',
                replyTo: '@ishankhatri',
                commentTime: '1h',
                commentLike: 2,
                isLike: false,
            }
        ],
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user31.png'),
        userProfileName: 'vaishanavi__',
        userComment: '🥀🌸',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: false,
        isLike: true,
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user27.png'),
        userProfileName: 'anujshah.__',
        userComment: '👌',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: false,
        isLike: true,
    },
    {
        id: '6',
        userProfilePic: require('../../assets/images/users/user30.png'),
        userProfileName: 'diya.___',
        userComment: '✨❤️',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: false,
        isLike: false,
    },
    {
        id: '7',
        userProfilePic: require('../../assets/images/users/user32.png'),
        userProfileName: 'monaliali.',
        userComment: 'Adorable 🔥',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: true,
        isLike: true,
        replys: [
            {
                id: '1',
                userProfilePic: require('../../assets/images/users/user41.png'),
                userProfileName: 'samanthaofficial',
                userReply: 'Thank you',
                replyTo: '@monaliali.',
                commentTime: '1h',
                commentLike: 2,
                isLike: false,
            }
        ],
    },
    {
        id: '8',
        userProfilePic: require('../../assets/images/users/user28.png'),
        userProfileName: 'jiyashah_',
        userComment: '😇',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: true,
        isLike: false,
        replys: [
            {
                id: '1',
                userProfilePic: require('../../assets/images/users/user41.png'),
                userProfileName: 'samanthaofficial',
                userReply: '😇',
                replyTo: '@jiyashah_',
                commentTime: '1h',
                commentLike: 1,
                isLike: false,
            }
        ],
    },
    {
        id: '9',
        userProfilePic: require('../../assets/images/users/user29.png'),
        userProfileName: 'ishaofficial.',
        userComment: '💫🙂',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: false,
        isLike: true,
    },
    {
        id: '10',
        userProfilePic: require('../../assets/images/users/user18.png'),
        userProfileName: 'ishankhatri',
        userComment: 'Nice one...',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: true,
        isLike: false,
        replys: [
            {
                id: '1',
                userProfilePic: require('../../assets/images/users/user41.png'),
                userProfileName: 'samanthaofficial',
                userReply: 'Thank you',
                replyTo: '@ishankhatri',
                commentTime: '1h',
                commentLike: 2,
                isLike: false,
            }
        ],
    },
    {
        id: '11',
        userProfilePic: require('../../assets/images/users/user31.png'),
        userProfileName: 'vaishanavi__',
        userComment: '🥀🌸',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: false,
        isLike: true,
    },
    {
        id: '12',
        userProfilePic: require('../../assets/images/users/user27.png'),
        userProfileName: 'anujshah.__',
        userComment: '👌',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: false,
        isLike: false,
    },
    {
        id: '13',
        userProfilePic: require('../../assets/images/users/user30.png'),
        userProfileName: 'diya.___',
        userComment: '✨❤️',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: false,
        isLike: false,
    },
    {
        id: '14',
        userProfilePic: require('../../assets/images/users/user32.png'),
        userProfileName: 'monaliali.',
        userComment: 'Adorable 🔥',
        mentionName: '@samanthaofficial',
        commentTime: '1h',
        commentLike: 2,
        replyAvailable: true,
        isLike: false,
        replys: [
            {
                id: '1',
                userProfilePic: require('../../assets/images/users/user41.png'),
                userProfileName: 'samanthaofficial',
                userReply: 'Thank you',
                replyTo: '@monaliali.',
                commentTime: '1h',
                commentLike: 2,
                isLike: true,
            }
        ],
    },
];

const CommentsScreen = ({ navigation }) => {

    const [comments, setComments] = useState(commentsList);
    const [currentUserComment, setCurrentUserComment] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {commentsInfo()}
            </View>
            {userCommentInfo()}
        </SafeAreaView>
    )

    function userCommentInfo() {
        return (
            <View style={styles.userCommentInfoWrapStyle}>
                <Image
                    source={require('../../assets/images/users/user43.png')}
                    style={{ width: 40.0, height: 40.0, borderRadius: 20.0, }}
                />
                <TextInput
                    value={currentUserComment}
                    onChangeText={(value) => setCurrentUserComment(value)}
                    placeholder='Comment as samanthaofficial'
                    placeholderTextColor={Colors.blackColor}
                    style={{ ...Fonts.blackColor14SemiBold, marginLeft: Sizes.fixPadding, flex: 1, }}
                    cursorColor={Colors.primaryColor}
                    onSubmitEditing={() => setCurrentUserComment('')}
                />
            </View>
        )
    }

    function changeCommentLikes({ id }) {
        const copyComments = comments;
        const newComments = copyComments.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    isLike: !item.isLike,
                    commentLike: item.isLike ? item.commentLike - 1 : item.commentLike + 1
                }
            }
            else {
                return item
            }
        })
        setComments(newComments);
    }

    function changeReplyComments({ id, innerId }) {
        const copyComments = comments;
        const newComments = copyComments.map((item) => {
            if (item.id == id) {
                const copyItem = item;
                const newReplys = copyItem.replys.map((replyItems) => {
                    if (replyItems.id == innerId) {
                        return {
                            ...replyItems,
                            isLike: !replyItems.isLike,
                            commentLike: replyItems.isLike ? replyItems.commentLike - 1 : replyItems.commentLike + 1
                        }
                    }
                    else {
                        return replyItems
                    }
                })
                return { ...item, replys: newReplys }
            }
            else {
                return item
            }
        })
        setComments(newComments);
    }

    function userInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/images/users/user43.png')}
                        style={{ width: 50.0, height: 50.0, borderRadius: 25.0, }}
                    />
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                        <Text style={{ ...Fonts.blackColor14SemiBold }}>
                            samanthaofficial
                        </Text>
                        <Text style={{ ...Fonts.grayColor12Regular }}>
                            1h
                        </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: Colors.extraLightGrayColor, height: 1.0, marginVertical: Sizes.fixPadding }} />
            </View>
        )
    }

    function commentsInfo() {

        const renderItem = ({ item }) => (
            <View style={{ marginBottom: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', flex: 1, }}>
                        <Image
                            source={item.userProfilePic}
                            style={{ width: 40.0, height: 40.0, borderRadius: 20.0, }}
                        />
                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding + 3.0 }}>
                            <Text>
                                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                    {item.userProfileName} { }
                                </Text>
                                <Text style={{ ...Fonts.grayColor14SemiBold }}>
                                    {item.userComment}
                                </Text>
                                {
                                    item.mentionName
                                        ?
                                        <Text style={{ ...Fonts.blueColor14SemiBold }}>
                                            { } {item.mentionName}
                                        </Text>
                                        :
                                        null
                                }
                            </Text>
                            <Text style={{ ...Fonts.grayColor12Regular }}>
                                {item.commentTime}  •  {item.commentLike}like  •  { }
                                <Text>
                                    Reply
                                </Text>
                            </Text>
                        </View>
                    </View>
                    <MaterialIcons
                        name={item.isLike ? "favorite" : "favorite-border"}
                        size={18}
                        color={item.isLike ? Colors.redColor : Colors.grayColor}
                        onPress={() => { changeCommentLikes({ id: item.id }) }}
                    />
                </View>
                {
                    item.replyAvailable
                        ?
                        <View style={{ marginTop: Sizes.fixPadding - 5.0 }}>
                            {item.replys.map((innerItem, index) => (
                                <View
                                    key={`${innerItem.id}`}
                                    style={{ marginBottom: index == item.replys.length - 1 ? 0.0 : Sizes.fixPadding + 5.0, marginLeft: Sizes.fixPadding * 4.0, flexDirection: 'row', justifyContent: 'space-between' }}
                                >
                                    <View style={{ flexDirection: 'row', flex: 1, }}>
                                        <Image
                                            source={innerItem.userProfilePic}
                                            style={{ width: 40.0, height: 40.0, borderRadius: 20.0, }}
                                        />
                                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding + 3.0 }}>
                                            <Text>
                                                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                                    {innerItem.userProfileName} { }
                                                </Text>
                                                <Text style={{ ...Fonts.grayColor14SemiBold }}>
                                                    {innerItem.userReply}
                                                </Text>
                                                <Text style={{ ...Fonts.blueColor14SemiBold }}>
                                                    { } {innerItem.replyTo}
                                                </Text>
                                            </Text>
                                            <Text style={{ ...Fonts.grayColor12Regular }}>
                                                {innerItem.commentTime}  •  {innerItem.commentLike}like  •  { }
                                                <Text>
                                                    Reply
                                                </Text>
                                            </Text>
                                        </View>
                                    </View>
                                    <MaterialIcons
                                        name={innerItem.isLike ? "favorite" : "favorite-border"}
                                        size={18}
                                        color={innerItem.isLike ? Colors.redColor : Colors.grayColor}
                                        onPress={() => { changeReplyComments({ id: item.id, innerId: innerItem.id }) }}
                                    />
                                </View>
                            ))}
                        </View>
                        :
                        null
                }
            </View>
        )
        return (
            <FlatList
                data={comments}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={userInfo()}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding + 5.0 }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Comments
                </Text>
            </View>
        )
    }
}

export default CommentsScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    userCommentInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: Colors.extraLightGrayColor,
        borderTopWidth: 1.0,
        elevation: 3.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding
    }
})