import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { TabView, TabBar } from 'react-native-tab-view';

const usersList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user12.png'),
        userProfileName: 'jiyashah_',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:50 am',
        isActive: true,
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user44.png'),
        userProfileName: 'royyy.___',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:30 am',
        isActive: true,
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user29.png'),
        userProfileName: 'monaliali.',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:28 am',
        isActive: false,
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user13.png'),
        userProfileName: 'dhirajshah__',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:20 am',
        isActive: false,
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user31.png'),
        userProfileName: 'vaishanavi__',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:15 am',
        isActive: true,
    },
    {
        id: '6',
        userProfilePic: require('../../assets/images/users/user14.png'),
        userProfileName: 'ishankhatri.',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:00 am',
        isActive: true,
    },
    {
        id: '7',
        userProfilePic: require('../../assets/images/users/user32.png'),
        userProfileName: 'diya.___',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '9:45 am',
        isActive: true,
    },
    {
        id: '8',
        userProfilePic: require('../../assets/images/users/user45.png'),
        userProfileName: 'ishaofficial.',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '9:00 am',
        isActive: true,
    },
    {
        id: '9',
        userProfilePic: require('../../assets/images/users/user10.png'),
        userProfileName: 'jiyashah_',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:50 am',
        isActive: true,
    },
    {
        id: '10',
        userProfilePic: require('../../assets/images/users/user3.png'),
        userProfileName: 'royyy.___',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:30 am',
        isActive: true,
    },
    {
        id: '11',
        userProfilePic: require('../../assets/images/users/user27.png'),
        userProfileName: 'monaliali.',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:28 am',
        isActive: false,
    },
    {
        id: '12',
        userProfilePic: require('../../assets/images/users/user5.png'),
        userProfileName: 'dhirajshah__',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:20 am',
        isActive: false,
    },
    {
        id: '13',
        userProfilePic: require('../../assets/images/users/user6.png'),
        userProfileName: 'vaishanavi__',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:15 am',
        isActive: true,
    },
    {
        id: '14',
        userProfilePic: require('../../assets/images/users/user8.png'),
        userProfileName: 'ishankhatri.',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '10:00 am',
        isActive: true,
    },
    {
        id: '15',
        userProfilePic: require('../../assets/images/users/user2.png'),
        userProfileName: 'diya.___',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '9:45 am',
        isActive: true,
    },
    {
        id: '16',
        userProfilePic: require('../../assets/images/users/user1.png'),
        userProfileName: 'ishaofficial.',
        lastMsg: 'Lorem Ipsum is simply dummy text',
        lastMsgTime: '9:00 am',
        isActive: true,
    },
];

const activeUsersList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user28.png'),
        userProfileName: 'Isha',
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user11.png'),
        userProfileName: 'Siya',
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user44.png'),
        userProfileName: 'Roy',
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user33.png'),
        userProfileName: 'Riyaz',
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user7.png'),
        userProfileName: 'Ishan',
    },
    {
        id: '6',
        userProfilePic: require('../../assets/images/users/user18.png'),
        userProfileName: 'Joy',
    },
    {
        id: '7',
        userProfilePic: require('../../assets/images/users/user34.png'),
        userProfileName: 'Ishali',
    },
    {
        id: '8',
        userProfilePic: require('../../assets/images/users/user26.png'),
        userProfileName: 'Royok',
    },
    {
        id: '9',
        userProfilePic: require('../../assets/images/users/user36.png'),
        userProfileName: 'Sivansh',
    },
    {
        id: '10',
        userProfilePic: require('../../assets/images/users/user39.png'),
        userProfileName: 'Ishani',
    },
];

const callingList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user12.png'),
        userProfileName: 'jiyashah_',
        callingType: 'missed',
        callingTime: '10:50 am',
        isActive: true,
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user29.png'),
        userProfileName: 'monaliali.',
        callingType: 'incoming',
        callingTime: '10:00 am',
        isActive: true,
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user14.png'),
        userProfileName: 'ishankhatri.',
        callingType: 'incoming',
        callingTime: '9:45 am',
        isActive: false,
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user13.png'),
        userProfileName: 'dhirajshah__',
        callingType: 'outgoing',
        callingTime: '9:00 am',
        isActive: false,
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user44.png'),
        userProfileName: 'royyy.___',
        callingType: 'missed',
        callingTime: '8:45 am',
        isActive: false,
    },
    {
        id: '6',
        userProfilePic: require('../../assets/images/users/user32.png'),
        userProfileName: 'diya.___',
        callingType: 'incoming',
        callingTime: '8:00 am',
        isActive: false,
    },
];

const MessageScreen = ({ navigation }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Chats' },
        { key: 'second', title: 'Call' },
    ]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {chatAndCallTab()}
            </View>
        </SafeAreaView>
    )

    function activeUsers() {
        const renderItem = ({ item }) => (
            <View style={{ alignItems: 'center', marginHorizontal: Sizes.fixPadding - 5.0, }}>
                <View>
                    <Image
                        source={item.userProfilePic}
                        style={{ width: 40.0, height: 40.0, borderRadius: 20.0 }}
                    />
                    <View style={styles.activeSmallIndicatorStyle} />
                </View>
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor12Regular }}>
                    {item.userProfileName}
                </Text>
            </View>
        )
        return (
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={activeUsersList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding + 5.0, paddingVertical: Sizes.fixPadding * 2.0, }}
                />
            </View>
        )
    }

    function ChatsInfo() {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.push('Chat') }}
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                        <View>
                            <Image
                                source={item.userProfilePic}
                                style={{ width: 50.0, height: 50.0, borderRadius: 25.0, }}
                            />
                            {
                                item.isActive
                                    ?
                                    <View style={styles.activeBigIndicatorStyle} />
                                    :
                                    null
                            }
                        </View>
                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding, }}>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold }}>
                                {item.userProfileName}
                            </Text>
                            <Text numberOfLines={1} style={{ ...Fonts.grayColor14Regular }}>
                                {item.lastMsg}
                            </Text>
                        </View>
                    </View>
                    <Text style={{ ...Fonts.blackColor12SemiBold }}>
                        {item.lastMsgTime}
                    </Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: Colors.extraLightGrayColor, height: 1.0, marginVertical: Sizes.fixPadding }} />
            </View>
        )
        return (
            <View style={{ flex: 1 }}>
                {activeUsers()}
                <FlatList
                    data={usersList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 8.0 }}
                />
            </View>
        )
    }

    function CallsInfo() {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                        <View>
                            <Image
                                source={item.userProfilePic}
                                style={{ width: 50.0, height: 50.0, borderRadius: 25.0, }}
                            />
                            {
                                item.isActive
                                    ?
                                    <View style={styles.activeBigIndicatorStyle} />
                                    :
                                    null
                            }
                        </View>
                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding, }}>
                            <Text
                                numberOfLines={1}
                                style={{ ...Fonts.blackColor16SemiBold, }}
                            >
                                {item.userProfileName}
                            </Text>
                            <Text numberOfLines={1}>
                                <Text
                                    style={{
                                        ...Fonts.blackColor14SemiBold,
                                        color: item.callingType == 'missed' ? Colors.redColor : item.callingType == 'incoming' ? Colors.greenColor : Colors.orangeColor
                                    }}
                                >
                                    {
                                        item.callingType == 'missed'
                                            ?
                                            'Missed Call'
                                            :
                                            item.callingType == 'incoming'
                                                ?
                                                'Incoming Call'
                                                :
                                                'Outgoing Call'
                                    }
                                </Text>
                                <Text style={{ ...Fonts.grayColor14Regular }}>
                                    { } {item.callingTime}
                                </Text>
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { navigation.push('VideoCall') }}
                            style={{ ...styles.callingButtonStyle, marginRight: Sizes.fixPadding + 5.0 }}
                        >
                            <MaterialIcons name="videocam" size={18} color={Colors.blackColor} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { navigation.push('Call') }}
                            style={{ ...styles.callingButtonStyle }}
                        >
                            <MaterialIcons name="call" size={16} color={Colors.blackColor} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: Colors.extraLightGrayColor, height: 1.0, marginVertical: Sizes.fixPadding }} />
            </View>
        )
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={callingList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, paddingBottom: Sizes.fixPadding * 6.0 }}
                />
            </View>
        )
    }

    function chatAndCallTab() {
        const renderScene = ({ route, jumpTo }) => {
            switch (route.key) {
                case 'first':
                    return ChatsInfo();
                case 'second':
                    return CallsInfo();
            }
        };
        return (
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={props => {
                    return (
                        <TabBar
                            {...props}
                            indicatorStyle={{ height: 1.5, backgroundColor: Colors.primaryColor, bottom: -1.5 }}
                            style={styles.tabBarStyle}
                            renderLabel={({ route, focused }) => (
                                <Text
                                    style={focused ? { ...Fonts.primaryColor16SemiBold } : { ...Fonts.lightGrayColor16SemiBold }}>
                                    {route.title}
                                </Text>
                            )}
                        />
                    )
                }}
            />
        )

    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <Text style={{ ...Fonts.blackColor20SemiBold }}>
                    Message
                </Text>
                <MaterialIcons name="search" size={22} color={Colors.blackColor} onPress={() => { navigation.push('SearchChat') }} />
            </View>
        )
    }
}

export default MessageScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
        elevation: 2.0,
        padding: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding - 8.0
    },
    activeBigIndicatorStyle: {
        width: 10.0,
        height: 10.0,
        borderRadius: 5.0,
        bottom: 0.0,
        right: 5.0,
        backgroundColor: Colors.greenColor,
        position: 'absolute',
        borderColor: Colors.whiteColor,
        borderWidth: 1.0,
    },
    activeSmallIndicatorStyle: {
        width: 8.0,
        height: 8.0,
        borderRadius: 4.0,
        backgroundColor: Colors.greenColor,
        position: 'absolute',
        bottom: 0.0,
        right: 5.0,
    },
    callingButtonStyle: {
        width: 30.0,
        height: 30.0,
        borderRadius: 15.0,
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBarStyle: {
        elevation: 0.0,
        backgroundColor: Colors.whiteColor,
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderBottomColor: Colors.lightGrayColor,
        borderBottomWidth: 1.5,
    }
})