import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TextInput } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { BottomBarIndexContext } from '../../components/botomTabBarIndexContext';

const PostCaptionAndTagFriendScreen = ({ navigation, route }) => {

    const selectedPhoto = route.params.selectedPhoto;
    const { changeIndex } = useContext(BottomBarIndexContext);
    const [caption, setCaption] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {captionInfo()}
                {divider()}
                {tagPeopleTitle()}
                {divider()}
                {addLocationTitle()}
                {divider()}
            </View>
        </SafeAreaView>
    )

    function addLocationTitle() {
        return (
            <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor16Regular }}>
                Add Location
            </Text>
        )
    }

    function tagPeopleTitle() {
        return (
            <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor16Regular }}>
                Tag People
            </Text>
        )
    }

    function divider() {
        return (
            <View style={styles.dividerStyle} />
        )
    }

    function captionInfo() {
        return (
            <View style={styles.captionInfoWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                    <Image
                        source={require('../../assets/images/users/user43.png')}
                        style={{ width: 50.0, height: 50.0, borderRadius: 25.0, }}
                    />
                    <TextInput
                        value={caption}
                        onChangeText={(value) => { setCaption(value) }}
                        placeholder='Add a caption...'
                        placeholderTextColor={Colors.grayColor}
                        style={{ ...Fonts.blackColor14Regular, flex: 1, marginHorizontal: Sizes.fixPadding, }}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
                <Image
                    source={selectedPhoto}
                    style={{ width: 60.0, height: 60.0, }}
                />
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text
                    onPress={() => {
                        changeIndex(1)
                        navigation.push('BottomTabBar')
                    }}
                    style={{ ...Fonts.blackColor14SemiBold }}
                >
                    Post
                </Text>
            </View>
        )
    }
}

export default PostCaptionAndTagFriendScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    dividerStyle: {
        backgroundColor: Colors.extraLightGrayColor,
        height: 1.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding + 5.0,
    },
    captionInfoWrapStyle: {
        marginBottom: Sizes.fixPadding - 5.0,
        marginTop: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})