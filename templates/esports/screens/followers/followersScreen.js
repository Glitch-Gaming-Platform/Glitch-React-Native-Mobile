import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const followersList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user27.png'),
        userProfileName: 'royyy._____',
        userFullName: 'Roy Jain',
        isFollow: true,
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user28.png'),
        userProfileName: 'jiyashah_',
        userFullName: 'Jiya shah',
        isFollow: false,
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user29.png'),
        userProfileName: 'ishaofficial.',
        userFullName: 'Isha Ali',
        isFollow: false,
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user30.png'),
        userProfileName: 'diya.____',
        userFullName: 'Diya Mehta',
        isFollow: false,
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user18.png'),
        userProfileName: 'ishankhatri.',
        userFullName: 'Ishan Khatri',
        isFollow: false,
    },
    {
        id: '6',
        userProfilePic: require('../../assets/images/users/user31.png'),
        userProfileName: 'vaishanavi__',
        userFullName: 'V',
        isFollow: true,
    },
    {
        id: '7',
        userProfilePic: require('../../assets/images/users/user14.png'),
        userProfileName: 'dhirajshah__',
        userFullName: 'Dhiraj Shah',
        isFollow: false,
    },
    {
        id: '8',
        userProfilePic: require('../../assets/images/users/user32.png'),
        userProfileName: 'monaliali.',
        userFullName: 'Monali',
        isFollow: false,
    },
    {
        id: '9',
        userProfilePic: require('../../assets/images/users/user33.png'),
        userProfileName: 'anujshah.__',
        userFullName: 'Anuj Shah',
        isFollow: false,
    },
    {
        id: '10',
        userProfilePic: require('../../assets/images/users/user34.png'),
        userProfileName: 'realkrupali.',
        userFullName: 'K',
        isFollow: false,
    },
    {
        id: '11',
        userProfilePic: require('../../assets/images/users/user5.png'),
        userProfileName: 'tonyyyy',
        userFullName: 'Tonyy Doe',
        isFollow: true,
    },
    {
        id: '12',
        userProfilePic: require('../../assets/images/users/user36.png'),
        userProfileName: 'renishshah.__',
        userFullName: 'Renish Shah',
        isFollow: false,
    },
    {
        id: '13',
        userProfilePic: require('../../assets/images/users/user37.png'),
        userProfileName: 'joymehta.',
        userFullName: 'Joy',
        isFollow: false,
    },
    {
        id: '14',
        userProfilePic: require('../../assets/images/users/user38.png'),
        userProfileName: 'officialjiyan__',
        userFullName: 'Jiyan Smith',
        isFollow: false,
    },
    {
        id: '15',
        userProfilePic: require('../../assets/images/users/user5.png'),
        userProfileName: 'tonyyyy',
        userFullName: 'Tonyy Doe',
        isFollow: false,
    },
    {
        id: '16',
        userProfilePic: require('../../assets/images/users/user27.png'),
        userProfileName: 'royyy._____',
        userFullName: 'Roy Jain',
        isFollow: true,
    },
    {
        id: '17',
        userProfilePic: require('../../assets/images/users/user33.png'),
        userProfileName: 'anujshah.__',
        userFullName: 'Anuj Shah',
        isFollow: true,
    },
    {
        id: '18',
        userProfilePic: require('../../assets/images/users/user3.png'),
        userProfileName: 'ishankhatri.',
        userFullName: 'Ishan Khatri',
        isFollow: false,
    },
    {
        id: '19',
        userProfilePic: require('../../assets/images/users/user39.png'),
        userProfileName: 'trishaaaaa',
        userFullName: 'Trisha Jain',
        isFollow: false,
    },
    {
        id: '20',
        userProfilePic: require('../../assets/images/users/user40.png'),
        userProfileName: 'komalshah',
        userFullName: 'Komal Shah',
        isFollow: false,
    },
];

const FollowersScreen = ({ navigation }) => {

    const [followers, setFollowers] = useState(followersList);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {followersInfo()}
            </View>
        </SafeAreaView>
    )

    function updateFollowers({ id }) {
        const copyFollowers = followers;
        const newFollowers = copyFollowers.map((item) => {
            if (item.id == id) {
                return { ...item, isFollow: !item.isFollow }
            }
            else {
                return item
            }
        })
        setFollowers(newFollowers);
    }

    function followersInfo() {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={item.userProfilePic}
                            style={{ width: 40.0, height: 40.0, borderRadius: 20.0 }}
                        />
                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                            <Text style={{ ...Fonts.blackColor16SemiBold }}>
                                {item.userProfileName}
                            </Text>
                            <Text numberOfLines={1} style={{ ...Fonts.grayColor14Regular }}>
                                {item.userFullName}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { updateFollowers({ id: item.id }) }}
                        style={{ backgroundColor: item.isFollow ? Colors.whiteColor : Colors.primaryColor, ...styles.buttonStyle, }}
                    >
                        <Text style={item.isFollow ? { ...Fonts.primaryColor14Bold } : { ...Fonts.whiteColor14Bold }}>
                            {item.isFollow ? 'Following' : 'Follow'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: Colors.extraLightGrayColor, height: 1.0, marginVertical: Sizes.fixPadding }} />
            </View>
        )
        return (
            <FlatList
                data={followers}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: Sizes.fixPadding * 2.0, }}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Followers
                </Text>
            </View>
        )
    }
}

export default FollowersScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    buttonStyle: {
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding - 4.0,
        width: 100.0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})