import React, { useState, useCallback, useContext } from "react";
import { View, TouchableOpacity, StyleSheet, BackHandler, SafeAreaView, StatusBar, Text, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { BottomBarIndexContext } from "../botomTabBarIndexContext";
import Screens from "../../../../util/Screens";

const BottomTabNavigation = ({ navigation }) => {

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    function _spring() {
        updateState({ backClickCount: 1 });
        setTimeout(() => {
            updateState({ backClickCount: 0 })
        }, 1000)
    }

    const [state, setState] = useState({
        backClickCount: 0,
    });

    const updateState = (data) => setState((state) => ({ ...state, ...data }));

    const { backClickCount } = state;
    const { index, changeIndex } = useContext(BottomBarIndexContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
           
                <View style={styles.bottomTabBarStyle}>
                    {bottomTabBarItem({
                        tabIndex: 1,
                        iconName: require('../../assets/images/icons/home.png'),
                        screen : Screens.getHome()
                    })}
                    {bottomTabBarItem({
                        tabIndex: 2,
                        iconName: require('../../assets/images/icons/bell.png'),
                    })}
                    {bottomTabBarItem({
                        tabIndex: 3,
                        iconName: require('../../assets/images/icons/bell.png'),
                        screen : Screens.getCreateStream()
                    })}
                    {bottomTabBarItem({
                        tabIndex: 4,
                        iconName: require('../../assets/images/icons/message.png'),
                    })}
                    {bottomTabBarItem({
                        tabIndex: 5,
                        iconName: require('../../assets/images/icons/profile.png'),
                    })}
                </View>
                {exitInfo()}
          
        </SafeAreaView>
    )

    function exitInfo() {
        return (
            backClickCount == 1
                ?
                <View style={styles.exitInfoWrapStyle}>
                    <Text style={{ ...Fonts.whiteColor12Regular }}>
                        Press Back Once Again to Exit
                    </Text>
                </View>
                :
                null
        )
    }

    function bottomTabBarItem({ tabIndex, iconName }) {
        return (
            tabIndex == 3
                ?
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.push(Screens.getCreateStream()) }}
                    style={styles.uploadIconWrapStyle}
                >
                    <MaterialIcons name='add' size={28} color={Colors.whiteColor} />
                </TouchableOpacity>
                :
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { tabIndex == index ? null : changeIndex(tabIndex) }}
                >
                    <Image
                        source={iconName}
                        style={{ ...styles.iconStyle, tintColor: index == tabIndex ? Colors.blackColor : Colors.lightGrayColor }}
                    />
                </TouchableOpacity>
        )
    }
}

export default BottomTabNavigation;

const styles = StyleSheet.create({
    bottomTabBarStyle: {
        position: 'absolute',
        bottom: 0.0,
        left: 0.0,
        right: 0.0,
        height: 60.0,
        zIndex: 100,
        backgroundColor: Colors.whiteColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        borderTopColor: 'rgba(128, 128, 128, 0.1)',
        borderTopWidth: 1.0,
        elevation: 2.0
    },
    iconStyle: {
        width: 24.0,
        height: 24.0,
        resizeMode: 'contain',
    },
    exitInfoWrapStyle: {
        backgroundColor: Colors.blackColor,
        position: "absolute",
        bottom: 20,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
    },
    uploadIconWrapStyle: {
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
        borderColor: Colors.whiteColor,
        borderWidth: 4.0,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3.0,
        bottom: 25.0,
        backgroundColor: Colors.primaryColor
    }
})