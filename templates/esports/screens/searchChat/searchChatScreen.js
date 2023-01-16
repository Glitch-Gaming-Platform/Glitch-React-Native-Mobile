import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, FlatList, Image } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const recentSearchesList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user29.png'),
        userProfileName: 'mina._',
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user18.png'),
        userProfileName: 'shahrenish',
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user41.png'),
        userProfileName: 'diyapatel.',
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user32.png'),
        userProfileName: 'monaliali.',
    }
];

const SearchChatScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {headerWithSearchField()}
                {recentSearchedInfo()}
            </View>
        </SafeAreaView>
    )

    function recentSearchedInfo() {
        const renderItem = ({ item }) => (
            <View style={{ alignItems: 'center', marginRight: Sizes.fixPadding + 5.0, }}>
                <Image
                    source={item.userProfilePic}
                    style={{ width: 60.0, height: 60.0, borderRadius: 30.0, }}
                />
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor14Regular }}>
                    {item.userProfileName}
                </Text>
            </View>
        )
        return (
            <View>
                <Text style={{ ...Fonts.grayColor14SemiBold, marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding + 5.0 }}>
                    Recent Searches
                </Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={recentSearchesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingLeft: Sizes.fixPadding * 2.0, }}
                />
            </View>
        )
    }

    function headerWithSearchField() {
        return (
            <View style={{ backgroundColor: Colors.whiteColor, elevation: 3.0, padding: Sizes.fixPadding * 2.0, }}>
                <View style={styles.headerWrapStyle}>
                    <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                    <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                        Search Conversation
                    </Text>
                </View>
                <View style={styles.searchFieldWrapStyle}>
                    <MaterialIcons
                        name='search'
                        color={Colors.grayColor}
                        size={20}
                    />
                    <TextInput
                        placeholder='Search here...'
                        style={{ ...Fonts.blackColor14Regular, flex: 1, paddingHorizontal: Sizes.fixPadding - 3.0 }}
                        placeholderTextColor={Colors.grayColor}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
            </View>
        )
    }
}

export default SearchChatScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchFieldWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Sizes.fixPadding + 5.0,
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding
    }
})