import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const CallScreen = ({ navigation }) => {

    const [isMute, setIsMute] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <ImageBackground
                source={require('../../assets/images/users/user12.png')}
                style={{ flex: 1, }}
            >
                <View style={{ position: 'absolute', bottom: 0.0, left: 0.0, right: 0.0, }}>
                    {callingInfo()}
                    {callingFunctionalities()}
                </View>
            </ImageBackground>
        </SafeAreaView>
    )

    function callingInfo() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', margin: Sizes.fixPadding + 5.0 }}>
                <Text numberOfLines={1} style={{ ...Fonts.whiteColor20Bold }}>
                    Jiya shah
                </Text>
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.whiteColor14SemiBold }}>
                    02:35 min
                </Text>
            </View>
        )
    }

    function callingFunctionalities() {
        return (
            <View style={styles.callButtonsWrapStyle}>
                {muteButton()}
                {videoCallButton()}
                {endButton()}
            </View>
        )
    }

    function endButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.pop() }}
                style={{ flex: 1, alignItems: 'center', }}
            >
                <MaterialCommunityIcons name="close-circle" size={30} color={Colors.redColor} style={{ marginBottom: Sizes.fixPadding }} />
                <Text style={{ ...Fonts.whiteColor16SemiBold }}>
                    End
                </Text>
            </TouchableOpacity>
        )
    }

    function videoCallButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { }}
                style={{ flex: 1, alignItems: 'center', }}
            >
                <MaterialIcons name="videocam" size={30} color={Colors.whiteColor} style={{ marginBottom: Sizes.fixPadding }} />
                <Text style={{ ...Fonts.whiteColor16SemiBold }}>
                    Video Call
                </Text>
            </TouchableOpacity>
        )
    }

    function muteButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { }}
                style={{ flex: 1, alignItems: 'center', }}
            >
                <MaterialIcons
                    name={isMute ? "mic" : "mic-off"}
                    size={30}
                    color={Colors.whiteColor}
                    style={{ marginBottom: Sizes.fixPadding }}
                    onPress={() => setIsMute(!isMute)}
                />
                <Text style={{ ...Fonts.whiteColor16SemiBold }}>
                    Mute
                </Text>
            </TouchableOpacity>
        )
    }
}

export default CallScreen

const styles = StyleSheet.create({
    callButtonsWrapStyle: {
        backgroundColor: '#00000080',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        borderTopLeftRadius: Sizes.fixPadding + 5.0,
        borderTopRightRadius: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding + 5.0
    },
})