import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { BottomSheet } from '@rneui/themed';

const { width } = Dimensions.get('window');

const EditProfileScreen = ({ navigation }) => {

    const [name, setName] = useState('Samantha Smith');
    const [userName, setUserName] = useState('samanthaofficial');
    const [email, setEmail] = useState('smithsamantha@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('+91 1236547890');
    const [description, setDescription] = useState('Samantha Smith\nArtist\nFind me on @samantha___\nArt + Prints + Workshops\nWebsite: www.officialsamantha.com')
    const [showSheet, setShowSheet] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {userProfilePicInfo()}
                    {nameInfo()}
                    {userNameInfo()}
                    {emailInfo()}
                    {phonenNumberInfo()}
                    {descriptionInfo()}
                    {updateProfileButton()}
                </ScrollView>
                {editProfilePicOptionsSheet()}
            </View>
        </SafeAreaView>
    )

    function editProfilePicOptionsSheet() {
        return (
            <BottomSheet
                isVisible={showSheet}
                onBackdropPress={() => setShowSheet(false)}
            >
                <View style={{ backgroundColor: Colors.whiteColor, borderTopLeftRadius: Sizes.fixPadding, borderTopRightRadius: Sizes.fixPadding }}>
                    <Text style={{ margin: Sizes.fixPadding + 5.0, textAlign: 'center', ...Fonts.blackColor20SemiBold }}>
                        Choose Option
                    </Text>
                    <Text
                        onPress={() => { setShowSheet(false) }}
                        style={{ marginBottom: Sizes.fixPadding - 5.0, marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor16Regular }}
                    >
                        Take a picture
                    </Text>
                    <Text
                        onPress={() => { setShowSheet(false) }}
                        style={{ marginBottom: Sizes.fixPadding - 5.0, marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor16Regular }}
                    >
                        Select from gallery
                    </Text>
                    <Text
                        onPress={() => { setShowSheet(false) }}
                        style={{ marginBottom: Sizes.fixPadding * 2.0, marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor16Regular }}
                    >
                        Remove profile picture
                    </Text>
                </View>
            </BottomSheet>
        )
    }

    function updateProfileButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.pop()}
                style={styles.buttonStyle}
            >
                <Text style={{ ...Fonts.whiteColor22Bold }}>
                    Update Profile
                </Text>
            </TouchableOpacity>
        )
    }

    function descriptionInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.grayColor16Regular }}>
                    Description
                </Text>
                <TextInput
                    value={description}
                    onChangeText={(value) => setDescription(value)}
                    style={{ ...Fonts.blackColor18Regular }}
                    cursorColor={Colors.primaryColor}
                    multiline
                />
                {divider()}
            </View>
        )
    }

    function phonenNumberInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.grayColor16Regular }}>
                    Phone Number
                </Text>
                <TextInput
                    value={phoneNumber}
                    onChangeText={(value) => setPhoneNumber(value)}
                    style={{ ...Fonts.blackColor18Regular }}
                    cursorColor={Colors.primaryColor}
                    keyboardType="phone-pad"
                />
                {divider()}
            </View>
        )
    }

    function emailInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.grayColor16Regular }}>
                    Email Address
                </Text>
                <TextInput
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    style={{ ...Fonts.blackColor18Regular }}
                    cursorColor={Colors.primaryColor}
                    keyboardType="email-address"
                />
                {divider()}
            </View>
        )
    }

    function userNameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.grayColor16Regular }}>
                    User Name
                </Text>
                <TextInput
                    value={userName}
                    onChangeText={(value) => setUserName(value)}
                    style={{ ...Fonts.blackColor18Regular }}
                    cursorColor={Colors.primaryColor}
                />
                {divider()}
            </View>
        )
    }

    function nameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.grayColor16Regular }}>
                    Name
                </Text>
                <TextInput
                    value={name}
                    onChangeText={(value) => setName(value)}
                    style={{ ...Fonts.blackColor18Regular }}
                    cursorColor={Colors.primaryColor}
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

    function userProfilePicInfo() {
        return (
            <View style={{ alignItems: 'center', alignSelf: 'center', margin: Sizes.fixPadding * 2.0 }} >
                <Image
                    source={require('../../assets/images/users/user43.png')}
                    style={{ width: width / 3.8, height: width / 3.8, borderRadius: (width / 3.8) / 2.0, }}
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { setShowSheet(true) }}
                    style={styles.addIconWrapStyle}
                >
                    <MaterialIcons
                        name='add'
                        color={Colors.whiteColor}
                        size={width / 22.0}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Edit Profile
                </Text>
            </View>
        )
    }
}

export default EditProfileScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    addIconWrapStyle: {
        width: width / 15.0,
        height: width / 15.0,
        borderRadius: (width / 15.0) / 2.0,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -5.0,
        backgroundColor: Colors.primaryColor,
        borderColor: Colors.whiteColor,
        borderWidth: 2.0,
        right: 10.0
    },
    buttonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center', justifyContent: 'center',
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding + 5.0,
        margin: Sizes.fixPadding * 2.0,
    }
})