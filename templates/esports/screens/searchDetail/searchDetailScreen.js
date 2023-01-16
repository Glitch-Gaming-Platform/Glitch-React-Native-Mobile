import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TextInput } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { TabView, TabBar } from 'react-native-tab-view';

const topSearchesList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user3.png'),
        userProfileName: 'dennyjohn._',
        userFullName: 'Denny John',
        isFollow: true,
        storyAvailable: true,
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user2.png'),
        userProfileName: 'alicia___',
        userFullName: 'Alicia Sierra',
        isFollow: true,
        storyAvailable: true,
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user15.png'),
        userProfileName: 'tishaaaa',
        userFullName: 'Tisha Jain',
        isFollow: false,
        storyAvailable: false,
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user16.png'),
        userProfileName: 'benafsha.',
        userFullName: 'Benafsha Doe',
        isFollow: false,
        storyAvailable: true,
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user17.png'),
        userProfileName: 'tonny_.',
        userFullName: 'Tonny Shah',
        isFollow: false,
        storyAvailable: false,
    },
    {
        id: '6',
        userProfilePic: require('../../assets/images/users/user18.png'),
        userProfileName: 'realimranali',
        userFullName: 'Imran Ali',
        isFollow: false,
        storyAvailable: false,
    },
    {
        id: '7',
        userProfilePic: require('../../assets/images/users/user3.png'),
        userProfileName: 'dennyjohn._',
        userFullName: 'Denny John',
        isFollow: false,
        storyAvailable: true,
    },
    {
        id: '8',
        userProfilePic: require('../../assets/images/users/user2.png'),
        userProfileName: 'alicia___',
        userFullName: 'Alicia Sierra',
        isFollow: false,
        storyAvailable: true,
    },
    {
        id: '9',
        userProfilePic: require('../../assets/images/users/user15.png'),
        userProfileName: 'tishaaaa',
        userFullName: 'Tisha Jain',
        isFollow: false,
        storyAvailable: false,
    },
    {
        id: '10',
        userProfilePic: require('../../assets/images/users/user16.png'),
        userProfileName: 'benafsha.',
        userFullName: 'Benafsha Doe',
        isFollow: false,
        storyAvailable: true,
    },
    {
        id: '11',
        userProfilePic: require('../../assets/images/users/user3.png'),
        userProfileName: 'dennyjohn._',
        userFullName: 'Denny John',
        isFollow: false,
        storyAvailable: true,
    },
    {
        id: '12',
        userProfilePic: require('../../assets/images/users/user2.png'),
        userProfileName: 'alicia___',
        userFullName: 'Alicia Sierra',
        isFollow: false,
        storyAvailable: true,
    },
    {
        id: '13',
        userProfilePic: require('../../assets/images/users/user15.png'),
        userProfileName: 'tishaaaa',
        userFullName: 'Tisha Jain',
        isFollow: false,
        storyAvailable: false,
    },
];

const accountSearchesList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user3.png'),
        userProfileName: 'dennyjohn._',
        userFullName: 'Denny John',
        isFollow: true,
        storyAvailable: true,
    },
    {
        id: '2',
        userProfilePic: require('../../assets/images/users/user2.png'),
        userProfileName: 'alicia___',
        userFullName: 'Alicia Sierra',
        isFollow: true,
        storyAvailable: true,
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user15.png'),
        userProfileName: 'tishaaaa',
        userFullName: 'Tisha Jain',
        isFollow: false,
        followedByUsers: ['alicia___', '', '', '', '', '', '', ''],
        storyAvailable: false,
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user16.png'),
        userProfileName: 'benafsha.',
        userFullName: 'Benafsha Doe',
        isFollow: false,
        followedByUsers: ['smiti_', '', '', '', '', '', '', '', '', '', '', ''],
        storyAvailable: true,
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user17.png'),
        userProfileName: 'tonny_.',
        userFullName: 'Tonny Shah',
        isFollow: true,
        storyAvailable: false,
    },
    {
        id: '6',
        userProfilePic: require('../../assets/images/users/user18.png'),
        userProfileName: 'realimranali',
        userFullName: 'Imran Ali',
        isFollow: false,
        followedByUsers: ['alicia___', '', '', '', '', '', ''],
        storyAvailable: false,
    },
    {
        id: '7',
        userProfilePic: require('../../assets/images/users/user3.png'),
        userProfileName: 'dennyjohn._',
        userFullName: 'Denny John',
        isFollow: true,
        storyAvailable: true,
    },
    {
        id: '8',
        userProfilePic: require('../../assets/images/users/user2.png'),
        userProfileName: 'alicia___',
        userFullName: 'Alicia Sierra',
        isFollow: false,
        followedByUsers: ['smiti_', '', '', '', '', '', '', '', '', '', ''],
        storyAvailable: true,
    },
    {
        id: '9',
        userProfilePic: require('../../assets/images/users/user15.png'),
        userProfileName: 'tishaaaa',
        userFullName: 'Tisha Jain',
        isFollow: false,
        followedByUsers: ['alicia___', '', '', '', '', '', '', '', ''],
        storyAvailable: false,
    },
    {
        id: '10',
        userProfilePic: require('../../assets/images/users/user16.png'),
        userProfileName: 'benafsha.',
        userFullName: 'Benafsha Doe',
        isFollow: false,
        followedByUsers: ['smiti_', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        storyAvailable: true,
    },
    {
        id: '11',
        userProfilePic: require('../../assets/images/users/user3.png'),
        userProfileName: 'dennyjohn._',
        userFullName: 'Denny John',
        isFollow: false,
        followedByUsers: ['alicia___', '', '', '', '', '', ''],
        storyAvailable: true,
    },
    {
        id: '12',
        userProfilePic: require('../../assets/images/users/user2.png'),
        userProfileName: 'alicia___',
        userFullName: 'Alicia Sierra',
        isFollow: false,
        followedByUsers: ['alicia___', '', '', '', '', '', ''],
        storyAvailable: true,
    },
    {
        id: '13',
        userProfilePic: require('../../assets/images/users/user15.png'),
        userProfileName: 'tishaaaa',
        userFullName: 'Tisha Jain',
        isFollow: true,
        storyAvailable: false,
    },
];

const tagSearchesList = [
    {
        id: '1',
        userProfilePic: require('../../assets/images/users/user19.png'),
        hastag: '#surfing',
        postsCount: '1.5m',
    },
    {
        id: '21',
        userProfilePic: require('../../assets/images/users/user20.png'),
        hastag: '#landscape',
        postsCount: '57,793,278',
    },
    {
        id: '3',
        userProfilePic: require('../../assets/images/users/user21.png'),
        hastag: '#landscapephotography',
        postsCount: '57,793,278',
    },
    {
        id: '4',
        userProfilePic: require('../../assets/images/users/user22.png'),
        hastag: '#storyart',
        postsCount: '4.5m',
    },
    {
        id: '5',
        userProfilePic: require('../../assets/images/users/user23.png'),
        hastag: '#drink',
        postsCount: '4.5m',
    },
    {
        id: '6',
        userProfilePic: require('../../assets/images/users/user24.png'),
        hastag: '#traveldairies',
        postsCount: '4.5m',
    },
    {
        id: '7',
        userProfilePic: require('../../assets/images/users/user25.png'),
        hastag: '#cocoresidencemaldives',
        postsCount: '5.5m',
    },
    {
        id: '8',
        userProfilePic: require('../../assets/images/users/user26.png'),
        hastag: '#travelworld',
        postsCount: '1.5m',
    },
    {
        id: '9',
        userProfilePic: require('../../assets/images/users/user19.png'),
        hastag: '#surfing',
        postsCount: '1.5m',
    },
    {
        id: '10',
        userProfilePic: require('../../assets/images/users/user20.png'),
        hastag: '#landscape',
        postsCount: '57,793,278',
    },
    {
        id: '11',
        userProfilePic: require('../../assets/images/users/user21.png'),
        hastag: '#landscapephotography',
        postsCount: '57,793,278',
    },
];

const SearchDetailScreen = ({ navigation }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Top' },
        { key: 'second', title: 'Accounts' },
        { key: 'third', title: 'Tags' },
    ]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {backArrow()}
                {searchTab()}
                {tabs()}
            </View>
        </SafeAreaView>
    )

    function tagSearchInfo() {
        const renderItem = ({ item }) => (
            <View style={styles.suggestedInfoWrapStyle}>
                <View>
                    <Image
                        source={item.userProfilePic}
                        style={{ width: 50.0, height: 50.0, borderRadius: 25.0 }}
                    />
                    <View style={styles.hasTagWrapStyle}>
                        <Text style={{ ...Fonts.whiteColor12Bold }}>
                            #
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding, }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold }}>
                        {item.hastag}
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Regular }}>
                        {item.postsCount} posts
                    </Text>
                </View>
            </View>
        )
        return (
            <View style={{ flex: 1, }}>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <Text style={{ margin: Sizes.fixPadding * 2.0, ...Fonts.blackColor18SemiBold }}>
                                Suggested
                            </Text>
                            <FlatList
                                data={tagSearchesList}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={renderItem}
                                scrollEnabled={false}
                            />
                        </>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    function topSearchInfo() {
        const renderItem = ({ item }) => (
            <View style={styles.suggestedInfoWrapStyle}>
                <View style={{
                    borderColor: item.storyAvailable ? Colors.primaryColor : Colors.whiteColor,
                    ...styles.userProfilePicWrapStyle,
                }}>
                    <Image
                        source={item.userProfilePic}
                        style={{ width: 44.0, height: 44.0, borderRadius: 22.0 }}
                    />
                </View>
                <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding, }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold }}>
                        {item.userProfileName}
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Regular }}>
                        {item.userFullName} {item.isFollow ? '• Following' : null}
                    </Text>
                </View>
            </View>
        )
        return (
            <View style={{ flex: 1, }}>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <Text style={{ margin: Sizes.fixPadding * 2.0, ...Fonts.blackColor18SemiBold }}>
                                Suggested
                            </Text>
                            <FlatList
                                data={topSearchesList}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={renderItem}
                                scrollEnabled={false}
                            />
                        </>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    function accountSearchInfo() {
        const renderItem = ({ item }) => (
            <View style={styles.suggestedInfoWrapStyle}>
                <View style={{
                    borderColor: item.storyAvailable ? Colors.primaryColor : Colors.whiteColor,
                    ...styles.userProfilePicWrapStyle,
                }}>
                    <Image
                        source={item.userProfilePic}
                        style={{ width: 44.0, height: 44.0, borderRadius: 22.0 }}
                    />
                </View>
                <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding, }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold }}>
                        {item.userProfileName}
                    </Text>
                    <Text style={{ ...Fonts.grayColor14Regular }}>
                        {item.userFullName} {item.isFollow ? '• Following' : `Followed by ${item.followedByUsers[0]} , and ${item.followedByUsers.length - 1} more`}
                    </Text>
                </View>
            </View>
        )
        return (
            <View style={{ flex: 1, }}>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <Text style={{ margin: Sizes.fixPadding * 2.0, ...Fonts.blackColor18SemiBold }}>
                                Suggested
                            </Text>
                            <FlatList
                                data={accountSearchesList}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={renderItem}
                                scrollEnabled={false}
                            />
                        </>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    function tabs() {
        const renderScene = ({ route, jumpTo }) => {
            switch (route.key) {
                case 'first':
                    return topSearchInfo();
                case 'second':
                    return accountSearchInfo();
                case 'third':
                    return tagSearchInfo();
            }
        };
        return (
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={props => (
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
                )}
            />
        )
    }

    function searchTab() {
        return (
            <View style={styles.searchTabWrapStyle}>
                <MaterialIcons name='search' color={Colors.grayColor} size={20} />
                <TextInput
                    placeholder='Search here...'
                    style={styles.searchFieldStyle}
                    placeholderTextColor={Colors.grayColor}
                    cursorColor={Colors.primaryColor}
                />
            </View>
        )
    }

    function backArrow() {
        return (
            <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} style={{ margin: 20.0 }} onPress={() => navigation.pop()} />
        )
    }
}

export default SearchDetailScreen

const styles = StyleSheet.create({
    tabBarStyle: {
        elevation: 0.0,
        backgroundColor: Colors.whiteColor,
        borderBottomColor: Colors.lightGrayColor,
        borderBottomWidth: 1.5,
    },
    searchTabWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding - 4.0,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding + 5.0,
    },
    searchFieldStyle: {
        ...Fonts.blackColor14Regular,
        marginHorizontal: Sizes.fixPadding,
        height: 20.0,
        flex: 1,
    },
    userProfilePicWrapStyle: {
        width: 50.0,
        height: 50.0,
        borderRadius: 25.0,
        borderWidth: 1.5,
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    suggestedInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Sizes.fixPadding + 3.0,
        marginHorizontal: Sizes.fixPadding * 2.0
    },
    hasTagWrapStyle: {
        width: 20.0,
        height: 20.0,
        borderRadius: 10.0,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0.0,
        right: 0.0,
    }
})