import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Image, } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Snackbar } from 'react-native-paper';

const blockAccountsList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user27.png'),
        userProfileName: 'royyy._____',
        userFullName: 'Roy Jain',
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user28.png'),
        userProfileName: 'jiyashah_',
        userFullName: 'Jiya shah',
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user29.png'),
        userProfileName: 'ishaofficial.',
        userFullName: 'Isha Ali',
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user30.png'),
        userProfileName: 'diya.____',
        userFullName: 'Diya Mehta',
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user18.png'),
        userProfileName: 'ishankhatri.',
        userFullName: 'Ishan Khatri',
    },
    {
        id: '6',
        userProfilePic: require('../../assets/images/users/user31.png'),
        userProfileName: 'vaishanavi__',
        userFullName: 'V',
    },
    {
        id: '7',
        userProfilePic: require('../../assets/images/users/user14.png'),
        userProfileName: 'dhirajshah__',
        userFullName: 'Dhiraj Shah',
    },
    {
        id: '8',
        userProfilePic: require('../../assets/images/users/user32.png'),
        userProfileName: 'monaliali.',
        userFullName: 'Monali',
    },
];

const BlockAccountsScreen = ({ navigation }) => {

    const [blockAccounts, setBlockAccounts] = useState(blockAccountsList);
    const [unblockAccountName, setUnblockAccountName] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {
                    blockAccounts.length == 0
                        ?
                        noBlockAccountsInfo()
                        :
                        blockAccountsInfo()
                }
            </View>
            {snackBarInfo()}
        </SafeAreaView>
    )

    function noBlockAccountsInfo() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialCommunityIcons name="close-circle-outline" size={40} color={Colors.lightGrayColor} />
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.lightGrayColor16SemiBold }}>
                    No any blockAccounts
                </Text>
            </View>
        )
    }

    function snackBarInfo() {
        return (
            <Snackbar
                visible={showSnackbar}
                onDismiss={() => setShowSnackbar(false)}
                style={{ elevation: 0.0, backgroundColor: Colors.blackColor }}
            >
                {unblockAccountName} is unblocked
            </Snackbar>
        )
    }

    function updateBlockAccounts({ id }) {
        const copyAccounts = blockAccounts;
        const unblockAccountInfo = copyAccounts.filter((item) => item.id == id);
        const newAccounts = copyAccounts.filter((item) => item.id !== id);
        setBlockAccounts(newAccounts);
        setUnblockAccountName(unblockAccountInfo[0].userProfileName)
        setShowSnackbar(true);
    }

    function blockAccountsInfo() {
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
                        onPress={() => { updateBlockAccounts({ id: item.id }) }}
                        style={{ ...styles.buttonStyle, }}
                    >
                        <Text style={{ ...Fonts.primaryColor14Bold }}>
                            Unblock
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: Colors.extraLightGrayColor, height: 1.0, marginVertical: Sizes.fixPadding }} />
            </View>
        )
        return (
            <FlatList
                data={blockAccounts}
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
                    Block Accounts
                </Text>
            </View>
        )
    }
}

export default BlockAccountsScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    buttonStyle: {
        backgroundColor: Colors.whiteColor,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding - 4.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})