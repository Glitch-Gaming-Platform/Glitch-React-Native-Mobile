import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, TouchableOpacity, Image as ReactImage, ScrollView, FlatList } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { TabView, TabBar } from 'react-native-tab-view';
import { Canvas, ColorMatrix, Image, useImage } from '@shopify/react-native-skia';

const { width, height } = Dimensions.get('window');

const filtersList = [
    {
        id: '1',
        filterName: 'Normal',
        filterColors: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    },
    {
        id: '2',
        filterName: 'Clarendon',
        filterColors: [1, 0, 0, 0, 0, -0.2, 1.0, 0.3, 0.1, 0, -0.1, 0, 1, 0, 0, 0, 0, 0, 1, 0]
    },
    {
        id: '3',
        filterName: 'Skyline',
        filterColors: [1.5, 0, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 0, 1, 0],
    },
    {
        id: '4',
        filterName: 'Moon',
        filterColors: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    },
    {
        id: '5',
        filterName: 'Juno',
        filterColors: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, -0.2, 0.2, 0.1, 0.4, 0, 0, 0, 0, 1, 0]
    },
    {
        id: '6',
        filterName: 'Gingham',
        filterColors: [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, .5, 0, 0, 0, 0, 1, 0],
    },
    {
        id: '7',
        filterName: 'Lark',
        filterColors: [1, 0, 0, 0, 0, -0.4, 1.3, -0.4, 0.2, -0.1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
    },
];

const editOptionsList = [
    {
        id: '1',
        editOptionIcom: require('../../assets/images/icons/adjust.png'),
        optionName: 'Adjust'
    },
    {
        id: '2',
        editOptionIcom: require('../../assets/images/icons/brightness.png'),
        optionName: 'Brightness'
    },
    {
        id: '3',
        editOptionIcom: require('../../assets/images/icons/contrast.png'),
        optionName: 'Contrast'
    },
    {
        id: '4',
        editOptionIcom: require('../../assets/images/icons/curves.png'),
        optionName: 'Curves'
    },
    {
        id: '5',
        editOptionIcom: require('../../assets/images/icons/crop.png'),
        optionName: 'Crop'
    },
    {
        id: '6',
        editOptionIcom: require('../../assets/images/icons/rotate.png'),
        optionName: 'Rotate'
    },
    {
        id: '7',
        editOptionIcom: require('../../assets/images/icons/blur.png'),
        optionName: 'Blur'
    },
    {
        id: '8',
        editOptionIcom: require('../../assets/images/icons/perspective.png'),
        optionName: 'Perspective'
    },
];

const PostFilterScreen = ({ navigation, route }) => {

    const selectedPhoto = route.params.selectedPhoto;
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Filter' },
        { key: 'second', title: 'Edit' },
    ]);

    const [selectedColorMatric, setSelectedColorMatric] = useState(filtersList[0].filterColors)

    const image = useImage(selectedPhoto);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {postPoster()}
                {filterAndEditTab()}
            </View>
        </SafeAreaView>
    )

    function FilterInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { setSelectedColorMatric(item.filterColors) }}
                style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: Sizes.fixPadding, }}
            >
                <Text style={{ ...Fonts.blackColor16SemiBold, marginBottom: Sizes.fixPadding, }}>
                    {item.filterName}
                </Text>
                <Canvas style={{ width: width / 3.5, height: width / 3.5 }}>
                    {image && (
                        <Image
                            image={image}
                            fit="cover"
                            width={width / 3.5}
                            height={width / 3.5}
                        >
                            <ColorMatrix matrix={item.filterColors} />
                        </Image>
                    )}
                </Canvas>
            </TouchableOpacity>
        )
        return (
            <View style={{ flex: 1, }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlatList
                        horizontal
                        data={filtersList}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, paddingHorizontal: Sizes.fixPadding, }}
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
        )
    }

    function EditInfo() {
        return (
            <View style={{ flex: 1, }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.editOptionsWrapStyle}>
                        {
                            editOptionsList.map((item) => (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => { }}
                                    key={`${item.id}`}
                                    style={{ alignItems: 'center', width: width / 4.8, marginBottom: Sizes.fixPadding * 2.0 }}
                                >
                                    <ReactImage
                                        source={item.editOptionIcom}
                                        style={{ width: 25.0, height: 25.0, resizeMode: 'contain' }}
                                    />
                                    <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding - 8.0, ...Fonts.blackColor14Regular }}>
                                        {item.optionName}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }

    function filterAndEditTab() {
        const renderScene = ({ route, jumpTo }) => {
            switch (route.key) {
                case 'first':
                    return FilterInfo();
                case 'second':
                    return EditInfo();
            }
        };
        return (
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                swipeEnabled={false}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        indicatorStyle={{ height: 1.5, backgroundColor: Colors.primaryColor, bottom: -1.5 }}
                        style={styles.tabBarStyle}
                        renderLabel={({ route, focused }) => (
                            <Text
                                style={focused ? { ...Fonts.primaryColor16SemiBold } : { ...Fonts.lightGrayColor16SemiBold }}>
                                {route.title}
                            </Text>
                        )}
                    />
                )}
            />
        )
    }

    function postPoster() {
        return (
            <Canvas style={{ height: height / 3.0 }}>
                {image && (
                    <Image
                        image={image}
                        fit="cover"
                        x={20}
                        y={20}
                        width={width - 40}
                        height={height / 3.0}
                    >
                        <ColorMatrix matrix={selectedColorMatric} />
                    </Image>
                )}
            </Canvas>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <MaterialIcons name="arrow-forward" size={22} color={Colors.blackColor} onPress={() => { navigation.push('PostCaptionAndTagFriend', { selectedPhoto: selectedPhoto }) }} />
            </View>
        )
    }
}

export default PostFilterScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    editOptionsWrapStyle: {
        marginTop: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    tabBarStyle: {
        elevation: 0.0,
        backgroundColor: Colors.whiteColor,
        marginHorizontal: Sizes.fixPadding * 2.0,
        borderBottomColor: Colors.lightGrayColor,
        borderBottomWidth: 1.5,
    }
})