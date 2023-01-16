import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const linkedAccountsList = [
    {
        id: '1',
        socialMediaIcon: require('../../assets/images/icons/facebook.png'),
        soialMedia: 'Facebook',
    },
    {
        id: '2',
        socialMediaIcon: require('../../assets/images/icons/google.png'),
        soialMedia: 'Google',
    },
    {
        id: '3',
        socialMediaIcon: require('../../assets/images/icons/twitter.png'),
        soialMedia: 'Twitter',
    },
    {
        id: '4',
        socialMediaIcon: require('../../assets/images/icons/linkedIn.png'),
        soialMedia: 'Linkedin',
    },
];

const LinkAccountsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {linkedAccountsInfo()}
            </View>
        </SafeAreaView>
    )

    function linkedAccountsInfo() {
        const renderItem = ({ item }) => (
            <View style={styles.linkAccountsWrapStyle}>
                <Image
                    source={item.socialMediaIcon}
                    style={{ width: 18.0, height: 16.0, resizeMode: 'contain' }}
                />
                <Text style={{ marginHorizontal: Sizes.fixPadding + 2.0, ...Fonts.blackColor14SemiBold }}>
                    {item.soialMedia}
                </Text>
            </View>
        )
        return (
            <FlatList
                data={linkedAccountsList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding + 10.0 }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Link Accounts
                </Text>
            </View>
        )
    }
}

export default LinkAccountsScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    linkAccountsWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding + 5.0,
        flexDirection: 'row',
        alignItems: 'center'
    }
})