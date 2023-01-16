import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, Sizes } from '../constants/styles';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomBarIndexContext } from './botomTabBarIndexContext';
import { Overlay } from '@rneui/themed';

const CustomDrawer = props => {

    const { changeIndex } = useContext(BottomBarIndexContext);
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            {header()}
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.whiteColor, paddingTop: Sizes.fixPadding * 2.5 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flex: 1, }}>
                    {drawerOptions()}
                    {logoutOption()}
                </View>
            </DrawerContentScrollView>
            {logoutDialog()}
        </View>
    );

    function logoutDialog() {
        return (
            <Overlay
                isVisible={showLogoutDialog}
                onBackdropPress={() => setShowLogoutDialog(false)}
                overlayStyle={styles.dialogStyle}
            >
                <View style={{ marginVertical: Sizes.fixPadding * 2.5 }}>
                    <Text style={{ textAlign: 'center', marginHorizontal: Sizes.fixPadding + 5.0, ...Fonts.blackColor20SemiBold }}>
                        Sure you want to logout?
                    </Text>
                    <View style={{ ...styles.cancelAndLogoutButtonWrapStyle, }}>
                        <TouchableOpacity
                            onPress={() => { setShowLogoutDialog(false) }}
                            style={{ ...styles.logoutAndCancelButtonStyle, ...styles.cancelButtonStyle, }}
                            activeOpacity={0.8}
                        >
                            <Text style={{ ...Fonts.primaryColor18Bold }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                setShowLogoutDialog(false)
                                props.navigation.closeDrawer()
                                props.navigation.push('Signin')
                            }}
                            style={{ ...styles.logoutAndCancelButtonStyle, backgroundColor: Colors.primaryColor, }}
                        >
                            <Text style={{ ...Fonts.whiteColor18Bold }}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Overlay>
        )
    }

    function logoutOption() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { setShowLogoutDialog(true) }}
                style={styles.logoutOptionWrapStyle}
            >
                <View style={{ width: 22.0, }}>
                    <MaterialIcons name="logout" size={22} color={Colors.primaryColor} />
                </View>
                <Text style={{ marginHorizontal: Sizes.fixPadding, ...Fonts.primaryColor16SemiBold }}>
                    Logout
                </Text>
            </TouchableOpacity>
        )
    }

    function drawerOptions() {
        return (
            <View>
                {drawerOptionSort({
                    icon: <MaterialIcons name="av-timer" size={22} color={Colors.blackColor} />,
                    option: 'Your Activity',
                    onPress: () => {
                        props.navigation.closeDrawer()
                        props.navigation.push('UserActivity')
                    }
                })}
                {drawerOptionSort({
                    icon: <MaterialIcons name="notifications-none" size={22} color={Colors.blackColor} />,
                    option: 'Notifications',
                    onPress: () => {
                        props.navigation.closeDrawer()
                        changeIndex(2)
                    }
                })}
                {drawerOptionSort({
                    icon: <MaterialIcons name="lock-outline" size={22} color={Colors.blackColor} />,
                    option: 'Account Privacy',
                    onPress: () => {
                        props.navigation.closeDrawer()
                        props.navigation.push('AccountPrivacy')
                    }
                })}
                {drawerOptionSort({
                    icon: <MaterialCommunityIcons name="close-circle-outline" size={22} color={Colors.blackColor} />,
                    option: 'Block Accounts',
                    onPress: () => {
                        props.navigation.closeDrawer()
                        props.navigation.push('BlockAccounts')
                    }
                })}
                {drawerOptionSort({
                    icon: <MaterialIcons name="attach-file" size={22} color={Colors.blackColor} />,
                    option: 'Link Accounts',
                    onPress: () => {
                        props.navigation.closeDrawer()
                        props.navigation.push('LinkAccounts')
                    }
                })}
                {drawerOptionSort({
                    icon: <MaterialIcons name="info-outline" size={22} color={Colors.blackColor} />,
                    option: 'About',
                    onPress: () => {
                        props.navigation.closeDrawer()
                        props.navigation.push('About')
                    }
                })}
                {drawerOptionSort({
                    icon: <MaterialIcons name="help-outline" size={22} color={Colors.blackColor} />,
                    option: 'Help',
                    onPress: () => {
                        props.navigation.closeDrawer()
                        props.navigation.push('Help')
                    }
                })}
            </View>
        )
    }

    function drawerOptionSort({ icon, option, onPress }) {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.drawerOptionWrapStyle}
            >
                <View style={{ width: 22 }}>
                    {icon}
                </View>
                <Text style={{ marginHorizontal: Sizes.fixPadding, ...Fonts.blackColor16SemiBold }}>
                    {option}
                </Text>
            </TouchableOpacity>
        )
    }

    function header() {
        return (
            <View style={styles.headerStyle}>
                <Text style={{ ...Fonts.blackColor20SemiBold }}>
                    Settings
                </Text>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    drawerOptionWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.5
    },
    headerStyle: {
        padding: Sizes.fixPadding * 2.0,
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        marginBottom: Sizes.fixPadding - 8.0,
    },
    logoutOptionWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Sizes.fixPadding * 1.5,
        marginHorizontal: Sizes.fixPadding * 2.0
    },
    cancelAndLogoutButtonWrapStyle: {
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding,
        marginTop: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
    },
    dialogStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        padding: 0.0,
        width: '80%'
    },
    logoutAndCancelButtonStyle: {
        marginHorizontal: Sizes.fixPadding, flex: 1,
        elevation: 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding + 2.0,
        alignItems: "center", justifyContent: 'center',
    },
    cancelButtonStyle: {
        backgroundColor: Colors.whiteColor,
        borderColor: Colors.extraLightGrayColor,
        borderWidth: 1.0,
        borderBottomWidth: 0.0,
    }
})

export default CustomDrawer;