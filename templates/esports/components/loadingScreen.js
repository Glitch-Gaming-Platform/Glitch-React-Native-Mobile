import React, { useEffect } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import { Colors } from "../constants/styles";

const LoadingScreen = ({ navigation }) => {

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                OpenSans_Regular: require("../assets/fonts/OpenSans-Regular.ttf"),
                OpenSans_Medium: require("../assets/fonts/OpenSans-Medium.ttf"),
                OpenSans_SemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
                OpenSans_Bold: require("../assets/fonts/OpenSans-Bold.ttf"),
                OpenSans_ExtraBold: require("../assets/fonts/OpenSans-ExtraBold.ttf"),
            });
            navigation.navigate('Splash');
        }
        loadFont();
    })
    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }} />
    )
}

export default LoadingScreen;