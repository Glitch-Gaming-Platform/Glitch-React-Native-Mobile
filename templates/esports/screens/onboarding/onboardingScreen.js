import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, FlatList, Image, BackHandler } from 'react-native'
import React, { useState, useCallback, createRef, } from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { useFocusEffect } from '@react-navigation/native';
import Screens from '../../../../util/Screens';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {

    const onboardingScreenList = [
        {
            id: '1',
            onboardingImage: require('../../assets/images/onboarding/onboarding1.png'),
            onboardingTitle: 'Find More Friends',
            onboardingDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum tellus varius neque congue amet fames nisi, egestas.',
        },
        {
            id: '2',
            onboardingImage: require('../../assets/images/onboarding/onboarding2.png'),
            onboardingTitle: 'Capture Your Best Moments',
            onboardingDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum tellus varius neque congue amet fames nisi, egestas.',
        },
        {
            id: '3',
            onboardingImage: require('../../assets/images/onboarding/onboarding3.png'),
            onboardingTitle: 'Share Your Stroy',
            onboardingDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum tellus varius neque congue amet fames nisi, egestas.',
        },
    ];

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
        setBackClickCount(1);
        setTimeout(() => {
            setBackClickCount(0)
        }, 1000)
    }

    const listRef = createRef();
    const [backClickCount, setBackClickCount] = useState(0);
    const [currentScreen, setCurrentScreen] = useState(0);

    const scrollToIndex = ({ index }) => {
        listRef.current.scrollToIndex({ animated: true, index: index });
        setCurrentScreen(index);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.secondaryColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.secondaryColor} />
            <View style={{ flex: 1, }}>
                {onboardingScreenContent()}
            </View>
            {indicators()}
            {skipNextAndIndicatorsInfo()}
            {exitInfo()}
        </SafeAreaView>
    )

    function skipNextAndIndicatorsInfo() {
        return (
            <View style={{ ...styles.indicatorButtonAndSkipWrapStyle, flexDirection: 'row' }}>
                <Text
                    onPress={() => currentScreen == 2 ? null : navigation.push(Screens.getAuthLogin())}
                    style={{ ...Fonts.whiteColor16Bold }}
                >
                    {currentScreen == 2 ? '' : 'Skip'}
                </Text>
                <Text
                    onPress={() => { currentScreen == 2 ? navigation.push(Screens.getAuthLogin()) : scrollToIndex({ index: currentScreen + 1 }) }}
                    style={{ ...Fonts.primaryColor16Bold }}
                >
                    {currentScreen == 2 ? 'Login' : 'Next'}
                </Text>
            </View>
        )
    }

    function indicators() {
        return (
            <View style={{ ...styles.indicatorWrapStyle, }}>
                {
                    onboardingScreenList.map((item, index) => {
                        return (
                            <View
                                key={`${item.id}`}
                                style={{
                                    ...currentScreen == index ? styles.selectedIndicatorStyle : styles.indicatorStyle,
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }

    function onboardingScreenContent() {
        const renderItem = ({ item }) => {
            return (
                <View style={styles.onboardingContentStyle}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={item.onboardingImage}
                            style={{ width: '70%', height: height / 3.0, resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                        <Text
                            numberOfLines={1}
                            style={{ marginBottom: Sizes.fixPadding - 5.0, textAlign: 'center', ...Fonts.whiteColor20SemiBold }}
                        >
                            {item.onboardingTitle}
                        </Text>
                        <Text style={{ textAlign: 'center', ...Fonts.whiteColor14Regular }}>
                            {item.onboardingDescription}
                        </Text>
                    </View>
                </View>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    ref={listRef}
                    data={onboardingScreenList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    scrollEventThrottle={32}
                    pagingEnabled
                    onMomentumScrollEnd={onScrollEnd}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    function onScrollEnd(e) {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        setCurrentScreen(pageNum);
    }

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

}

export default OnboardingScreen;

const styles = StyleSheet.create({
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
    },
    selectedIndicatorStyle: {
        marginHorizontal: Sizes.fixPadding - 7.0,
        width: 25.0,
        height: 8.0,
        borderRadius: 15.0,
        backgroundColor: Colors.primaryColor
    },
    indicatorStyle: {
        marginHorizontal: Sizes.fixPadding - 7.0,
        width: 8.0,
        height: 8.0,
        borderRadius: 4.0,
        backgroundColor: Colors.whiteColor
    },
    indicatorWrapStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    indicatorButtonAndSkipWrapStyle: {
        margin: Sizes.fixPadding * 2.0,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    onboardingContentStyle: {
        flex: 1,
        width: width,
        height: '100%',
        overflow: 'hidden',
        justifyContent: 'space-between',
    }
})