import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const topicDetails = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus penatibus amet tincidunt rhoncus gravida justo, sed non.',
    'Faucibus dignissim eget lacus at. Eget a pretium nunc id. Netus nulla ac odio bibendum tortor facilisis nibh porta quam. Tincidunt gravida scelerisque at nibh sollicitudin purus. Nisl eget viverra et, amet pellentesque congue. Aliquam interdum id semper bibendum.',
    'Faucibus dignissim eget lacus at. Eget a pretium nunc id. Netus nulla ac odio bibendum tortor facilisis nibh porta quam sit.'
];

const popularTopicsList = [
    {
        id: '1',
        topic: 'Managing your account',
        topicDetail: topicDetails,
    },
    {
        id: '2',
        topic: 'Using social media',
        topicDetail: topicDetails,
    },
    {
        id: '3',
        topic: 'Managing your account',
        topicDetail: topicDetails,
    },
    {
        id: '4',
        topic: 'Troubleshooting and login help',
        topicDetail: topicDetails,
    },
    {
        id: '5',
        topic: 'Learn about privacy settings',
        topicDetail: topicDetails,
    },
    {
        id: '6',
        topic: 'Controlling your visibility',
        topicDetail: topicDetails,
    },
    {
        id: '7',
        topic: 'Blocking people',
        topicDetail: topicDetails,
    },
    {
        id: '8',
        topic: 'Report something',
        topicDetail: topicDetails,
    },
];

const HelpScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {popularTopicsInfo()}
            </View>
        </SafeAreaView>
    )

    function popularTopicsInfo() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('HelpDetail', { item: item }) }}
                style={styles.topicInfoWrapStyle}
            >
                <Text style={{ ...Fonts.blackColor16Regular }}>
                    {item.topic}
                </Text>
                <MaterialIcons
                    name='arrow-forward-ios'
                    color={Colors.blackColor}
                    size={14}
                />
            </TouchableOpacity>
        )

        return (
            <View>
                <Text style={{ marginTop: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor18SemiBold }}>
                    Popular Topics
                </Text>
                <FlatList
                    data={popularTopicsList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingTop: Sizes.fixPadding, }}
                />
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Help
                </Text>
            </View>
        )
    }
}

export default HelpScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    topicInfoWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding + 3.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})