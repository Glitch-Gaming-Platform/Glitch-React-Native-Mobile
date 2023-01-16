import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { createRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Fonts, Colors, Sizes } from '../../constants/styles';

const Story2Screen = ({ navigation, route }) => {

    const selectedColors = route.params.selectedColors;
    const [storyValue, setStoryValue] = useState(route.params.storyValue);

    const inputRef = createRef();

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <LinearGradient
                colors={selectedColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1, justifyContent: 'space-between' }}
            >
                {header()}
                {contentInfo()}
                {shareStoryButton()}
            </LinearGradient>
        </SafeAreaView>
    )

    function shareStoryButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('BottomTabBar') }}
                style={styles.shareStoryButtonStyle}
            >
                <Text style={{ ...Fonts.primaryColor16SemiBold }}>
                    Share Story
                </Text>
            </TouchableOpacity>
        )
    }

    function content() {
        return (
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    ref={inputRef}
                    value={storyValue}
                    onChangeText={(value) => setStoryValue(value)}
                    style={{ ...Fonts.whiteColor20ExtraBold, textAlign: 'center', marginHorizontal: Sizes.fixPadding * 2.0 }}
                    multiline
                    cursorColor={Colors.whiteColor}
                />
            </View>
        )
    }

    function contentInfo() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                >
                    {content()}
                </ScrollView>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="close" size={24} color={Colors.whiteColor} onPress={() => { navigation.pop() }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { inputRef.current.focus() }}
                    >
                        <Image
                            source={require('../../assets/images/icons/editStory.png')}
                            style={styles.iconStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { inputRef.current.focus() }}
                        style={{ marginHorizontal: Sizes.fixPadding + 5.0 }}
                    >
                        <Image
                            source={require('../../assets/images/icons/text.png')}
                            style={styles.iconStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { inputRef.current.focus() }}
                    >
                        <Image
                            source={require('../../assets/images/icons/sticker.png')}
                            style={styles.iconStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Story2Screen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding + 5.0,
        marginTop: (Sizes.fixPadding * 2.0) + StatusBar.currentHeight
    },
    iconStyle: {
        width: 18.0,
        height: 18.0,
        resizeMode: 'contain',
        tintColor: Colors.whiteColor
    },
    shareStoryButtonStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding,
        alignSelf: 'flex-end',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 4.0,
        marginTop: Sizes.fixPadding + 5.0,
    }
})