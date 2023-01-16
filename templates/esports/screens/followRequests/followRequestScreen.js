import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Image } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { Snackbar } from 'react-native-paper';

const followRequestsList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user27.png'),
        userProfileName: 'royyy._____',
        userFullName: 'Roy Jain',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user28.png'),
        userProfileName: 'jiyashah_',
        userFullName: 'Jiya shah',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user29.png'),
        userProfileName: 'ishaofficial.',
        userFullName: 'Isha Ali',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user30.png'),
        userProfileName: 'diya.____',
        userFullName: 'Diya Mehta',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user18.png'),
        userProfileName: 'ishankhatri.',
        userFullName: 'Ishan Khatri',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '6',
        userProfilePic: require('../../assets/images/users/user31.png'),
        userProfileName: 'vaishanavi__',
        userFullName: 'V',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '7',
        userProfilePic: require('../../assets/images/users/user14.png'),
        userProfileName: 'dhirajshah__',
        userFullName: 'Dhiraj Shah',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '8',
        userProfilePic: require('../../assets/images/users/user32.png'),
        userProfileName: 'monaliali.',
        userFullName: 'Monali',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '9',
        userProfilePic: require('../../assets/images/users/user33.png'),
        userProfileName: 'anujshah.__',
        userFullName: 'Anuj Shah',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '10',
        userProfilePic: require('../../assets/images/users/user34.png'),
        userProfileName: 'realkrupali.',
        userFullName: 'K',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '11',
        userProfilePic: require('../../assets/images/users/user5.png'),
        userProfileName: 'tonyyyy',
        userFullName: 'Tonyy Doe',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '12',
        userProfilePic: require('../../assets/images/users/user36.png'),
        userProfileName: 'renishshah.__',
        userFullName: 'Renish Shah',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '13',
        userProfilePic: require('../../assets/images/users/user37.png'),
        userProfileName: 'joymehta.',
        userFullName: 'Joy',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '14',
        userProfilePic: require('../../assets/images/users/user38.png'),
        userProfileName: 'officialjiyan__',
        userFullName: 'Jiyan Smith',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '15',
        userProfilePic: require('../../assets/images/users/user5.png'),
        userProfileName: 'tonyyyy',
        userFullName: 'Tonyy Doe',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '16',
        userProfilePic: require('../../assets/images/users/user27.png'),
        userProfileName: 'royyy._____',
        userFullName: 'Roy Jain',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '17',
        userProfilePic: require('../../assets/images/users/user33.png'),
        userProfileName: 'anujshah.__',
        userFullName: 'Anuj Shah',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '18',
        userProfilePic: require('../../assets/images/users/user3.png'),
        userProfileName: 'ishankhatri.',
        userFullName: 'Ishan Khatri',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '19',
        userProfilePic: require('../../assets/images/users/user39.png'),
        userProfileName: 'trishaaaaa',
        userFullName: 'Trisha Jain',
        isFollow: false,
        acceptRequest: false,
    },
    {
        id: '20',
        userProfilePic: require('../../assets/images/users/user40.png'),
        userProfileName: 'komalshah',
        userFullName: 'Komal Shah',
        isFollow: false,
        acceptRequest: false,
    },
];

const FollowRequestScreen = ({ navigation }) => {

    const [followRequests, setFollowRequests] = useState(followRequestsList);
    const [showSnackBar, setShowSnackBar] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {requestsInfo()}
            </View>
            {snackBar()}
        </SafeAreaView>
    )

    function snackBar() {
        return (
            <Snackbar
                visible={showSnackBar}
                style={{ backgroundColor: Colors.blackColor, elevation: 0.0 }}
                onDismiss={() => { setShowSnackBar(false) }}
            >
                Request deleted
            </Snackbar>
        )
    }

    function deleteRequest({ id }) {
        const copyRequests = followRequests;
        const newRequests = copyRequests.filter((item) => item.id !== id);
        setFollowRequests(newRequests);
        setShowSnackBar(true)
    }

    function confirmRequest({ id }) {
        const copyRequests = followRequests;
        const newRequests = copyRequests.map((item) => {
            if (item.id == id) {
                return { ...item, acceptRequest: true }
            }
            else {
                return item
            }
        })
        setFollowRequests(newRequests);
    }

    function followUnfollow({ id }) {
        const copyRequests = followRequests;
        const newRequests = copyRequests.map((item) => {
            if (item.id == id) {
                return { ...item, isFollow: !item.isFollow }
            }
            else {
                return item
            }
        })
        setFollowRequests(newRequests);
    }

    function requestsInfo() {
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
                    {
                        item.acceptRequest
                            ?
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { followUnfollow({ id: item.id }) }}
                                style={{ backgroundColor: item.isFollow ? Colors.whiteColor : Colors.primaryColor, ...styles.buttonStyle, marginRight: Sizes.fixPadding }}
                            >
                                <Text style={item.isFollow ? { ...Fonts.primaryColor14Bold } : { ...Fonts.whiteColor14Bold }}>
                                    {item.isFollow ? 'Following' : 'Follow'}
                                </Text>
                            </TouchableOpacity>
                            :
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => { confirmRequest({ id: item.id }) }}
                                    style={{ backgroundColor: Colors.primaryColor, ...styles.buttonStyle, marginRight: Sizes.fixPadding }}
                                >
                                    <Text style={{ ...Fonts.whiteColor14Bold }}>
                                        Confirm
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => { deleteRequest({ id: item.id }) }}
                                    style={{ backgroundColor: Colors.whiteColor, ...styles.buttonStyle, }}
                                >
                                    <Text style={{ ...Fonts.primaryColor14Bold }}>
                                        Delete
                                    </Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
                <View style={{ backgroundColor: Colors.extraLightGrayColor, height: 1.0, marginVertical: Sizes.fixPadding }} />
            </View>
        )
        return (
            <FlatList
                data={followRequests}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, paddingBottom: Sizes.fixPadding }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Follow Request
                </Text>
            </View>
        )
    }
}

export default FollowRequestScreen

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
        paddingVertical: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Sizes.fixPadding,
    }
})