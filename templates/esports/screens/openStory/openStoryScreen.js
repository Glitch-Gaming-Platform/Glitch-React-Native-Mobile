import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground, Image, TextInput } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import * as Progress from 'react-native-progress';
import { Colors, Fonts, Sizes } from '../../constants/styles';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const OpenStoryScreen = ({ navigation }) => {

    const [message, setMessage] = useState('');
    const [progress, setProgress] = useState(0.01);
    const timeOutCallback = useCallback(() => setProgress(currTimer => currTimer == 0 ? null : currTimer + (Math.random() / 5)), []);

    useEffect(() => {
        progress >= 1 && setTimeout(() => {
            navigation.pop()
        }, 800);
        (progress > 0 && progress <= 1) ? setTimeout(timeOutCallback, 400) : null;
        () => { return clearTimeout(timeOutCallback) }
    }, [progress, timeOutCallback]);

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <ImageBackground
                source={require('../../assets/images/storyBg.png')}
                style={{ flex: 1, }}
            >
                {storyShowingInfo()}
                {userInfo()}
                {messageInfo()}
            </ImageBackground>
        </SafeAreaView>
    )

    function messageInfo() {
        return (
            <View style={styles.messageInfoWrapStyle}>
                <View style={styles.messageFieldWrapStyle}>
                    <TextInput
                        value={message}
                        onChangeText={(value) => setMessage(value)}
                        placeholder='Type Message...'
                        style={{ ...Fonts.blackColor12Regular, height: 20.0 }}
                        placeholderTextColor={Colors.grayColor}
                        cursorColor={Colors.primaryColor}
                    />
                </View>
                <FontAwesome name="send-o" size={24} color={Colors.whiteColor} />
            </View>
        )
    }

    function userInfo() {
        return (
            <View style={styles.userInfoWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                    <Image
                        source={require('../../assets/images/users/user1.png')}
                        style={{ width: 35.0, height: 35.0, borderRadius: 17.5, }}
                    />
                    <Text numberOfLines={1} style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.whiteColor12Regular }}>
                        Shree Patel
                    </Text>
                </View>
                <MaterialIcons name="close" size={16} color={Colors.whiteColor} onPress={() => navigation.pop()} />
            </View>
        )
    }

    function storyShowingInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginTop: (Sizes.fixPadding * 2.0) + StatusBar.currentHeight }}>
                <Progress.Bar
                    progress={progress}
                    width={null}
                    color={Colors.whiteColor}
                    height={1.5}
                    unfilledColor={Colors.grayColor}
                    borderWidth={0}
                />
            </View>
        )
    }
}

export default OpenStoryScreen

const styles = StyleSheet.create({
    messageInfoWrapStyle: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10.0,
        left: 20.0,
        right: 20.0,
        alignItems: 'center'
    },
    messageFieldWrapStyle: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding,
        marginRight: Sizes.fixPadding * 2.0,
    },
    userInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
    }
})