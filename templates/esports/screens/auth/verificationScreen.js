import React, { useState, createRef } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const VerificationScreen = ({ navigation }) => {

    const [state, setState] = useState({
        firstDigit: '',
        secondDigit: '',
        thirdDigit: '',
        forthDigit: '',
        isLoading: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }));

    const { firstDigit, secondDigit, thirdDigit, forthDigit, isLoading } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.secondaryColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.secondaryColor} />
            <View style={{ flex: 1, }}>
                {backArrow()}
                {verifyInfo()}
                {otpField()}
                {dontReceiveText()}
                {resendText()}
                {continueButton()}
            </View>
        </SafeAreaView>
    )

    function resendText() {
        return (
            <Text style={{ marginTop: Sizes.fixPadding - 5.0, textAlign: 'center', ...Fonts.primaryColor18SemiBold }}>
                Resend
            </Text>
        )
    }

    function continueButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('BottomTabBar') }}
                style={styles.buttonStyle}
            >
                <Text style={{ ...Fonts.whiteColor22Bold, paddingVertical: Sizes.fixPadding + 5.0 }}>
                    Continue
                </Text>
            </TouchableOpacity>
        )
    }

    function dontReceiveText() {
        return (
            <Text style={{ textAlign: 'center', marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.lightGrayColor16Regular }}>
                Didn’t you receive any code?
            </Text>
        )
    }

    function otpField() {
        const secondTextInput = createRef();
        const thirdTextInput = createRef();
        const forthTextInput = createRef();
        return (
            <View style={{ ...styles.otpFieldsWrapStyle, }}>
                <View style={{ ...styles.textFieldWrapStyle, }}>
                    <TextInput
                        cursorColor={Colors.whiteColor}
                        value={firstDigit}
                        style={{ paddingLeft: Sizes.fixPadding, ...Fonts.whiteColor20SemiBold, }}
                        onChangeText={(text) => {
                            updateState({ firstDigit: text })
                            secondTextInput.current.focus();
                        }}
                        keyboardType="numeric"
                    />
                </View>

                <View style={{ ...styles.textFieldWrapStyle, }}>
                    <TextInput
                        cursorColor={Colors.whiteColor}
                        value={secondDigit}
                        style={{ paddingLeft: Sizes.fixPadding, ...Fonts.whiteColor20SemiBold, }}
                        ref={secondTextInput}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            updateState({ secondDigit: text })
                            thirdTextInput.current.focus();
                        }}
                    />
                </View>

                <View style={{ ...styles.textFieldWrapStyle, }}>
                    <TextInput
                        cursorColor={Colors.whiteColor}
                        style={{ paddingLeft: Sizes.fixPadding, ...Fonts.whiteColor20SemiBold, }}
                        keyboardType="numeric"
                        value={thirdDigit}
                        ref={thirdTextInput}
                        onChangeText={(text) => {
                            updateState({ thirdDigit: text })
                            forthTextInput.current.focus();
                        }}
                    />
                </View>

                <View style={{ ...styles.textFieldWrapStyle, }}>
                    <TextInput
                        cursorColor={Colors.whiteColor}
                        style={{ paddingLeft: Sizes.fixPadding, ...Fonts.whiteColor20SemiBold, }}
                        keyboardType="numeric"
                        value={forthDigit}
                        ref={forthTextInput}
                        onChangeText={(text) => {
                            updateState({ forthDigit: text, isLoading: true })
                            navigation.push('BottomTabBar')
                        }}
                    />
                </View>
            </View>
        )
    }

    function verifyInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ textAlign: 'center', ...Fonts.whiteColor18Regular }}>
                    Verify Your Mobile Number
                </Text>
                <Text style={{ marginVertical: Sizes.fixPadding + 5.0, textAlign: 'center', ...Fonts.lightGrayColor14Regular }}>
                    Please check your messages and enter the verification code we just sent you{`\n`}+91 1236547890
                </Text>
                <Text style={{ textAlign: 'center', ...Fonts.whiteColor16SemiBold }}>
                    Enter Code Here
                </Text>
            </View>
        )
    }

    function backArrow() {
        return (
            <MaterialIcons
                name="arrow-back-ios"
                size={22}
                color={Colors.whiteColor}
                onPress={() => navigation.pop()}
                style={{ margin: Sizes.fixPadding * 2.0, }}
            />
        )
    }
}

export default VerificationScreen

const styles = StyleSheet.create({
    textFieldWrapStyle: {
        width: 35.0,
        height: 35.0,
        borderRadius: Sizes.fixPadding - 5.0,
        borderColor: Colors.lightGrayColor,
        borderWidth: 1.0,
        marginHorizontal: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center'
    },
    otpFieldsWrapStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding,
        marginTop: Sizes.fixPadding + 5.0,
        marginBottom: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
    },
    buttonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding,
        margin: Sizes.fixPadding * 2.0,
    },
})