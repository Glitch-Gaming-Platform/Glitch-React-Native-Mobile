import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const SignupScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.secondaryColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.secondaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {nameInfo()}
                    {emailInfo()}
                    {phoneNumberInfo()}
                    {passwordInfo()}
                    {confirmPasswordInfo()}
                    {signupButton()}
                    {orText()}
                    {socialMediaOIptions()}
                    {alreadyAccountInfo()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function alreadyAccountInfo() {
        return (
            <Text style={{ marginBottom: Sizes.fixPadding * 2.0, textAlign: 'center', marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.lightGrayColor16Regular }}>
                    Already have an account? { }
                </Text>
                <Text
                    onPress={() => { navigation.push('Signin') }}
                    style={{ ...Fonts.primaryColor16Bold }}
                >
                    Sign In
                </Text>
            </Text>
        )
    }

    function socialMediaOIptions() {
        return (
            <View style={styles.socialMediaOptionsWrapStyle}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { }}
                    style={styles.socialMediaIconWrapStyle}
                >
                    <Image
                        source={require('../../assets/images/icons/facebook.png')}
                        style={styles.socialMediaIconStyle}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { }}
                    style={{ ...styles.socialMediaIconWrapStyle, marginHorizontal: Sizes.fixPadding * 3.0 }}
                >
                    <Image
                        source={require('../../assets/images/icons/google.png')}
                        style={styles.socialMediaIconStyle}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { }}
                    style={styles.socialMediaIconWrapStyle}
                >
                    <Image
                        source={require('../../assets/images/icons/twitter.png')}
                        style={styles.socialMediaIconStyle}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function orText() {
        return (
            <Text style={{ ...Fonts.lightGrayColor16Regular, marginHorizontal: Sizes.fixPadding * 2.0, textAlign: 'center' }}>
                OR
            </Text>
        )
    }

    function signupButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('Verification') }}
                style={styles.buttonStyle}
            >
                <Text style={{ ...Fonts.whiteColor22Bold, paddingVertical: Sizes.fixPadding + 5.0 }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        )
    }

    function confirmPasswordInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding * 2.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.lightGrayColor16Regular }}>
                    Confirm Password
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextInput
                        value={confirmPassword}
                        onChangeText={(value) => setConfirmPassword(value)}
                        style={{ ...Fonts.whiteColor18Regular, flex: 1 }}
                        placeholder="Enter Your Password"
                        placeholderTextColor={Colors.whiteColor}
                        cursorColor={Colors.whiteColor}
                        secureTextEntry={!confirmPasswordVisible}
                    />
                    <MaterialCommunityIcons
                        name={confirmPasswordVisible ? "eye-outline" : "eye-off-outline"}
                        size={16}
                        color={Colors.whiteColor}
                        onPress={() => { setConfirmPasswordVisible(!confirmPasswordVisible) }}
                    />
                </View>
                {divider()}
            </View>
        )
    }

    function passwordInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding * 2.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.lightGrayColor16Regular }}>
                    Password
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextInput
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        style={{ ...Fonts.whiteColor18Regular, flex: 1 }}
                        placeholder="Enter Your Password"
                        placeholderTextColor={Colors.whiteColor}
                        cursorColor={Colors.whiteColor}
                        secureTextEntry={!passwordVisible}
                    />
                    <MaterialCommunityIcons
                        name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                        size={16}
                        color={Colors.whiteColor}
                        onPress={() => { setPasswordVisible(!passwordVisible) }}
                    />
                </View>
                {divider()}
            </View>
        )
    }

    function phoneNumberInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding * 2.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.lightGrayColor16Regular }}>
                    Phone Number
                </Text>
                <TextInput
                    value={phoneNumber}
                    onChangeText={(value) => setPhoneNumber(value)}
                    style={{ ...Fonts.whiteColor18Regular }}
                    placeholder="Enter Your PhoneNumber"
                    placeholderTextColor={Colors.whiteColor}
                    keyboardType="phone-pad"
                    cursorColor={Colors.whiteColor}
                />
                {divider()}
            </View>
        )
    }

    function emailInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding * 2.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.lightGrayColor16Regular }}>
                    Email Address
                </Text>
                <TextInput
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    style={{ ...Fonts.whiteColor18Regular }}
                    placeholder="Enter Your Email"
                    placeholderTextColor={Colors.whiteColor}
                    keyboardType="email-address"
                    cursorColor={Colors.whiteColor}
                />
                {divider()}
            </View>
        )
    }

    function nameInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding + 5.0, marginBottom: Sizes.fixPadding * 2.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.lightGrayColor16Regular }}>
                    Name
                </Text>
                <TextInput
                    value={name}
                    onChangeText={(value) => setName(value)}
                    style={{ ...Fonts.whiteColor18Regular }}
                    placeholder="Enter Your Name"
                    placeholderTextColor={Colors.whiteColor}
                    cursorColor={Colors.whiteColor}
                />
                {divider()}
            </View>
        )
    }

    function divider() {
        return (
            <View style={{ backgroundColor: Colors.lightGrayColor, height: 1.0, marginTop: Sizes.fixPadding - 5.0 }} />
        )
    }

    function header() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.whiteColor} onPress={() => navigation.pop()} />
                <Text style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.whiteColor20SemiBold }}>
                    Sign Up
                </Text>
            </View>
        )
    }

}

export default SignupScreen

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding,
        margin: Sizes.fixPadding * 2.0,
    },
    socialMediaIconWrapStyle: {
        width: width / 8.0,
        height: width / 8.0,
        borderRadius: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor
    },
    socialMediaIconStyle: {
        width: width / 18.0,
        height: width / 18.0,
        resizeMode: 'contain'
    },
    socialMediaOptionsWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: Sizes.fixPadding * 2.0
    }
})