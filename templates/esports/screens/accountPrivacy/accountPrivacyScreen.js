import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const AccountPrivacyScreen = ({ navigation }) => {
    const [accountSwitch, setAccountSwitch] = useState(true);
    const [showMoreDetail, setShowMoreDetail] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {privateAccountInfo()}
            </View>
        </SafeAreaView>
    )

    function privateAccountInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...Fonts.blackColor18SemiBold }}>
                        Private Account
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setAccountSwitch(!accountSwitch)}
                        style={{ backgroundColor: accountSwitch ? Colors.primaryColor : Colors.lightGrayColor, ...styles.switchStyle }}
                    >
                        <View style={{ alignSelf: accountSwitch ? 'flex-end' : 'flex-start', ...styles.switchCircleStyle, }} />
                    </TouchableOpacity>
                </View>
                <Text numberOfLines={showMoreDetail ? 0 : 3} style={{ marginTop: Sizes.fixPadding + 5.0, ...Fonts.grayColor14Regular }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa ullamcorper purus, sed sed volutpat urna, non turpis. Vitae in pellentesque maecenas turpis. Urna sit eu amet ut id ipsum eu tortor ac. Learn more.
                </Text>
                <Text
                    onPress={() => setShowMoreDetail(!showMoreDetail)}
                    style={{ textAlign: 'right', ...Fonts.primaryColor14Bold }}
                >
                    {showMoreDetail ? 'Show less.' : 'Learn more.'}
                </Text>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Account Privacy
                </Text>
            </View>
        )
    }
}

export default AccountPrivacyScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    switchStyle: {
        justifyContent: 'center',
        width: 32.0,
        height: 18.0,
        borderRadius: Sizes.fixPadding * 5.0,
    },
    switchCircleStyle: {
        backgroundColor: Colors.whiteColor,
        width: 14.0,
        height: 14.0,
        borderRadius: 7.0,
        marginHorizontal: Sizes.fixPadding - 9.0,
    }
})