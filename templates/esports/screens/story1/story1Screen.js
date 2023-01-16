import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Fonts, Colors, Sizes } from '../../constants/styles';

const colorsList = [
    {
        id: '1',
        colors: ['#00D2FF', '#3A7BD5'],
    },
    {
        id: '2',
        colors: ['#00F5A0', '#00D9F5'],
    },
    {
        id: '3',
        colors: ['#C84E89', '#F15F79'],
    },
    {
        id: '4',
        colors: ['#9400D3', '#4B0082'],
    },
    {
        id: '5',
        colors: ['#0052D4', '#6FB1FC'],
    },
    {
        id: '6',
        colors: ['#FFE000', '#799F0C'],
    },
    {
        id: '7',
        colors: ['#603813', '#B29F94'],
    },
];

const Story1Screen = ({ navigation }) => {

    const [selectedColors, setSelectedColors] = useState(colorsList[0].colors);
    const [storyValue, setStoryValue] = useState('Hello 🖐');

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
                {colorsInfo()}
            </LinearGradient>
        </SafeAreaView>
    )

    function colorsInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedColors(item.colors)}
                style={{ borderRadius: 15.0, marginHorizontal: Sizes.fixPadding - 5.0, }}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={item.colors}
                    style={styles.screenColorsCircleStyle}
                >
                    {
                        selectedColors == item.colors
                            ?
                            <MaterialIcons name="check" size={24} color={Colors.whiteColor} />
                            :
                            null
                    }
                </LinearGradient>
            </TouchableOpacity>
        )
        return (
            <View style={{ alignItems: 'center', marginBottom: Sizes.fixPadding * 4.0, marginTop: Sizes.fixPadding + 5.0 }}>
                <FlatList
                    data={colorsList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding + 5.0 }}
                />
            </View>
        )
    }

    function content() {
        return (
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    value={storyValue}
                    onChangeText={(value) => setStoryValue(value)}
                    style={{ ...Fonts.whiteColor20ExtraBold, textAlign: 'center', marginHorizontal: Sizes.fixPadding * 2.0 }}
                    multiline
                    autoFocus={storyValue == '' ? true : false}
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
                <Text
                    onPress={() => { navigation.push('Story2', { selectedColors: selectedColors, storyValue: storyValue }) }}
                    style={{ ...Fonts.whiteColor14SemiBold }}
                >
                    Done
                </Text>
            </View>
        )
    }
}

export default Story1Screen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding + 5.0,
        marginTop: (Sizes.fixPadding * 2.0) + StatusBar.currentHeight
    },
    screenColorsCircleStyle: {
        width: 30.0,
        height: 30.0,
        borderRadius: 15.0,
        borderWidth: 1.5,
        borderColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center'
    }
})