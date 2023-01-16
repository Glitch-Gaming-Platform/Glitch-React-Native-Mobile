import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TextInput, SafeAreaView, StatusBar } from "react-native";
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const userMessages = [
    {
        id: '1',
        message: 'Hello Samantha!',
        isSender: false,
        messageTime: '10:48 am',
    },
    {
        id: '2',
        message: 'Good morning',
        isSender: false,
        messageTime: '10:48 am',
    },
    {
        id: '3',
        message: `Hey jiya\nGood morning`,
        isSender: true,
        messageTime: '10:49 am',
    },
    {
        id: '4',
        message: 'Lorem Ipsum is simply dummy text.',
        isSender: false,
        messageTime: '10:50 am',
    },
    {
        id: '5',
        message: 'Lorem Ipsum is simply dummy text of the\nprinting and typesetting industry.',
        isSender: true,
        messageTime: '10:52 am',
    },
    {
        id: '6',
        messageType: 'images',
        images: [
            require('../../assets/images/messageImages/messageImage1.png'),
            require('../../assets/images/messageImages/messageImage2.png'),
            require('../../assets/images/messageImages/messageImage3.png'),
            require('../../assets/images/messageImages/messageImage4.png'),
        ],
        isSender: true,
        messageTime: '10:52 am',
    },
    {
        id: '7',
        message: '👍',
        isSender: false,
        messageTime: '10:54 am',
    },
    {
        id: '8',
        message: '👍',
        isSender: true,
        messageTime: '10:55 am',
    },
];

const receiverImage = require('../../assets/images/users/user12.png');

const senderImage = require('../../assets/images/users/user43.png');

const ChatScreen = ({ navigation }) => {

    const [messagesList, setMessagesList] = useState(userMessages);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <View style={{ flex: 1, }}>
                    {messages()}
                    {typeMessage()}
                </View>
            </View>
        </SafeAreaView>
    )

    function messages() {
        const renderItem = ({ item, index }) => {
            return (
                <View style={{
                    alignItems: item.isSender == true ? 'flex-end' : 'flex-start',
                    marginHorizontal: Sizes.fixPadding + 10.0,
                    marginVertical: Sizes.fixPadding - 5.0,
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        {
                            !item.isSender
                                ?
                                index != 0 ?
                                    messagesList[index].isSender == messagesList[index - 1].isSender
                                        ?
                                        <View style={{ marginRight: Sizes.fixPadding * 3.5, }} />
                                        :
                                        <View style={{ marginRight: Sizes.fixPadding, }}>
                                            <Image
                                                source={receiverImage}
                                                style={{ ...styles.userImageStyle }}
                                            />
                                        </View>
                                    :
                                    messagesList[index].isSender == messagesList[index + 1].isSender || !messagesList[index].isSender
                                        ?
                                        <View style={{ marginRight: Sizes.fixPadding }}>
                                            <Image
                                                source={receiverImage}
                                                style={{ ...styles.userImageStyle }}
                                            />
                                        </View>
                                        :
                                        null
                                :
                                null
                        }
                        <View style={{

                        }}>
                            {
                                item.messageType ?
                                    item.messageType == 'images'
                                        ?
                                        <View style={{ flexDirection: 'row', }}>
                                            {
                                                item.images.slice(0, 4).map((innerItem, index) => (
                                                    <Image
                                                        key={`${index}`}
                                                        source={innerItem}
                                                        style={styles.messageImagesStyle}
                                                    />
                                                ))
                                            }
                                        </View>
                                        :
                                        null
                                    :
                                    <View style={{
                                        ...styles.messageWrapStyle,
                                        borderBottomRightRadius: item.isSender ? 0.0 : Sizes.fixPadding - 5.0,
                                        borderBottomLeftRadius: item.isSender ? Sizes.fixPadding - 5.0 : 0.0,
                                        backgroundColor: item.isSender == true ? Colors.primaryColor : '#F0F0F0',
                                    }}>
                                        <Text style={item.isSender ? { ...Fonts.whiteColor12Regular } : { ...Fonts.blackColor12Regular }}>
                                            {item.message}
                                        </Text>
                                    </View>
                            }

                            <Text style={{ alignSelf: item.isSender == true ? 'flex-end' : 'flex-start', ...Fonts.grayColor10SemiBold }}>
                                {item.messageTime}
                            </Text>
                        </View>
                        {
                            item.isSender ?
                                index != 0 ?
                                    messagesList[index].isSender == messagesList[index - 1].isSender
                                        ?
                                        <View style={{ marginLeft: Sizes.fixPadding * 3.5 }} />
                                        :
                                        <View style={{ marginLeft: Sizes.fixPadding, }}>
                                            <Image
                                                source={senderImage}
                                                style={{ ...styles.userImageStyle }}
                                            />
                                        </View>
                                    :
                                    messagesList[index].isSender == messagesList[index + 1].isSender || messagesList[index].isSender
                                        ?
                                        <View style={{ marginLeft: Sizes.fixPadding, }}>
                                            <Image
                                                source={senderImage}
                                                style={{ ...styles.userImageStyle }}
                                            />
                                        </View>
                                        :
                                        null
                                :
                                null
                        }
                    </View>
                </View>
            )
        }
        return (
            <View style={{ paddingBottom: Sizes.fixPadding * 8.0, marginTop: Sizes.fixPadding - 5.0 }}>
                <FlatList
                    inverted
                    data={messagesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexDirection: 'column-reverse', }}
                />
            </View>
        )
    }

    function addMessage({ message }) {

        const oldMessages = messagesList;

        let date = Date();
        let hour = (new Date(date)).getHours();
        let minute = (new Date(date)).getMinutes();
        let AmPm = hour >= 12 ? 'pm' : 'am';
        let finalhour = hour >= 12 ? (hour - 12) : hour;

        const newMessage = {
            id: messagesList.length + 1,
            message: message,
            messageTime: `${finalhour}:${minute} ${AmPm}`,
            isSender: true,
        }

        oldMessages.push(newMessage);
        setMessagesList(oldMessages);
    }

    function typeMessage() {
        const [message, setMessage] = useState('');
        return (
            <View style={styles.typeMessageWrapStyle}>
                <MaterialIcons name="attach-file" size={16} color={Colors.blackColor} style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                <MaterialIcons name="insert-emoticon" size={16} color={Colors.blackColor} />
                <TextInput
                    cursorColor={Colors.primaryColor}
                    value={message}
                    onChangeText={setMessage}
                    placeholder='Write your Message...'
                    style={styles.messageFieldStyle}
                    placeholderTextColor={Colors.grayColor}
                />
                <MaterialIcons
                    name="send"
                    size={20}
                    color={Colors.primaryColor}
                    style={{ marginLeft: Sizes.fixPadding - 5.0 }}
                    onPress={() => {
                        if (message != '') {
                            addMessage({ message: message })
                            setMessage('');
                        }
                    }}
                />
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                    <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", }}>
                        <View>
                            <Image
                                source={require('../../assets/images/users/user12.png')}
                                style={{ width: 35.0, height: 35.0, borderRadius: 17.5, }}
                            />
                            <View style={styles.activeUserIndicattorStyle} />
                        </View>
                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding, }}>
                            <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                Jiya Shah
                            </Text>
                            <Text style={{ ...Fonts.grayColor12Regular }}>
                                Online
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="videocam" size={20} color={Colors.blackColor} onPress={() => { navigation.push('VideoCall') }} />
                    <MaterialIcons
                        name="call"
                        size={16}
                        color={Colors.blackColor}
                        onPress={() => { navigation.push('Call') }}
                        style={{ marginHorizontal: Sizes.fixPadding + 5.0 }}
                    />
                    <MaterialIcons name="more-vert" size={20} color={Colors.blackColor} onPress={() => { }} />
                </View>
            </View>
        )
    }
}

export default ChatScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    messageWrapStyle: {
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding - 5.0,
        borderRadius: Sizes.fixPadding - 5.0,
    },
    typeMessageWrapStyle: {
        position: 'absolute',
        bottom: 0.0,
        left: 0.0,
        right: 0.0,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: Colors.whiteColor,
        padding: Sizes.fixPadding * 2.0
    },
    userImageStyle: {
        width: 25.0,
        height: 25.0,
        borderRadius: 12.5
    },
    messageImagesStyle: {
        width: width / 7.0,
        height: width / 7.0,
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding - 8.0
    },
    activeUserIndicattorStyle: {
        width: 8.0,
        height: 8.0,
        borderRadius: 4.0,
        backgroundColor: Colors.greenColor,
        borderColor: Colors.whiteColor,
        borderWidth: 1.0,
        position: 'absolute',
        bottom: 0.0,
        right: 5.0,
    },
    messageFieldStyle: {
        marginHorizontal: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        ...Fonts.blackColor12Regular,
        flex: 1,
        borderColor: Colors.lightGrayColor,
        borderWidth: 1.0,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding - 5.0,
    }
})