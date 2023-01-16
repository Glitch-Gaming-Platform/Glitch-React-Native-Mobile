import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Dimensions, ImageBackground } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const { width, } = Dimensions.get('window');

const filterOptionsList = ['Style', 'Travel', 'Nature', 'Decore', 'Art', 'Animal', 'Beauty'];

const publicPostsList = [
    {
        id: '1',
        image: require('../../assets/images/publicPosts/post1.png'),
        isVideo: false,
    },
    {
        id: '2',
        image: require('../../assets/images/publicPosts/post2.png'),
        isVideo: false,
    },
    {
        id: '3',
        image: require('../../assets/images/publicPosts/post3.png'),
        isVideo: true,
    },
    {
        id: '4',
        image: require('../../assets/images/publicPosts/post4.png'),
        isVideo: false,
    },
    {
        id: '5',
        image: require('../../assets/images/publicPosts/post5.png'),
        isVideo: false,
    },
    {
        id: '6',
        image: require('../../assets/images/publicPosts/post6.png'),
        isVideo: false,
    },
    {
        id: '7',
        image: require('../../assets/images/publicPosts/post8.png'),
        isVideo: false,
    },
    {
        id: '8',
        image: require('../../assets/images/publicPosts/post9.png'),
        isVideo: false,
    },
    {
        id: '9',
        image: require('../../assets/images/publicPosts/post10.png'),
        isVideo: false,
    },
    {
        id: '10',
        image: require('../../assets/images/publicPosts/post11.png'),
        isVideo: false,
    },
    {
        id: '11',
        image: require('../../assets/images/publicPosts/post12.png'),
        isVideo: false,
    },
    {
        id: '12',
        image: require('../../assets/images/publicPosts/post13.png'),
        isVideo: false,
    },
    {
        id: '13',
        image: require('../../assets/images/publicPosts/post14.png'),
        isVideo: true,
    },
    {
        id: '14',
        image: require('../../assets/images/publicPosts/post15.png'),
        isVideo: false,
    },
    {
        id: '15',
        image: require('../../assets/images/publicPosts/post16.png'),
        isVideo: false,
    },
    {
        id: '16',
        image: require('../../assets/images/publicPosts/post17.png'),
        isVideo: false,
    },
    {
        id: '17',
        image: require('../../assets/images/publicPosts/post18.png'),
        isVideo: false,
    },
    {
        id: '18',
        image: require('../../assets/images/publicPosts/post19.png'),
        isVideo: false,
    },
    {
        id: '19',
        image: require('../../assets/images/publicPosts/post20.png'),
        isVideo: false,
    },
    {
        id: '20',
        image: require('../../assets/images/publicPosts/post21.png'),
        isVideo: false,
    },
    {
        id: '21',
        image: require('../../assets/images/publicPosts/post22.png'),
        isVideo: false,
    },
    {
        id: '22',
        image: require('../../assets/images/publicPosts/post23.png'),
        isVideo: false,
    },
    {
        id: '23',
        image: require('../../assets/images/publicPosts/post24.png'),
        isVideo: false,
    },
    {
        id: '24',
        image: require('../../assets/images/publicPosts/post25.png'),
        isVideo: false,
    },
];

const SearchScreen = ({ navigation }) => {

    const [selectedFilterOptionIndex, setSelectedFilterOptionIndex] = useState(0);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                <View style={{ backgroundColor: Colors.whiteColor, elevation: 3.0, }}>
                    {backArrow()}
                    {searchTab()}
                </View>
                {filterOptions()}
                {publicPosts()}
            </View>
        </SafeAreaView>
    )

    function publicPosts() {
        return (
            <ScrollView contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding * 2.0 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        {publicPostsList
                            .filter((_, i) => i % 3 === 0)
                            .map((item, index) =>
                            (
                                <ImageBackground
                                    key={`${item.id}`}
                                    source={item.image}
                                    style={{
                                        ...styles.publicPostsImageStyle,
                                        height: item.isVideo
                                            ?
                                            ((((width - 40) / 2.0) * ((Math.floor(Math.random() * 150) + 50) / 145))) >= ((width / 3.0) - 15)
                                                ?
                                                (((width - 40) / 2.0) * ((Math.floor(Math.random() * 150) + 50) / 145))
                                                :
                                                ((width / 3.0) - 15)
                                            :
                                            ((width / 3.0) - 15),
                                        minHeight: ((width / 3.0) - 15),
                                    }}
                                >
                                    {
                                        item.isVideo
                                            ?
                                            <Text style={{ margin: Sizes.fixPadding - 5.0, ...Fonts.whiteColor16SemiBold }}>
                                                Video
                                            </Text>
                                            :
                                            null
                                    }
                                </ImageBackground>
                            ))}
                    </View>
                    <View>
                        {publicPostsList
                            .filter((_, i) => i % 3 === 1)
                            .map((item, index) =>
                            (
                                <ImageBackground
                                    key={`${item.id}`}
                                    source={item.image}
                                    style={{
                                        ...styles.publicPostsImageStyle,
                                        height: item.isVideo
                                            ?
                                            ((((width - 40) / 2.0) * ((Math.floor(Math.random() * 150) + 50) / 145))) >= ((width / 3.0) - 15)
                                                ?
                                                (((width - 40) / 2.0) * ((Math.floor(Math.random() * 150) + 50) / 145))
                                                :
                                                ((width / 3.0) - 15)
                                            :
                                            ((width / 3.0) - 15),
                                        minHeight: ((width / 3.0) - 15),
                                    }}
                                >
                                    {
                                        item.isVideo
                                            ?
                                            <Text style={{ margin: Sizes.fixPadding - 5.0, ...Fonts.whiteColor16SemiBold }}>
                                                Video
                                            </Text>
                                            :
                                            null
                                    }
                                </ImageBackground>
                            ))}
                    </View>
                    <View>
                        {publicPostsList
                            .filter((_, i) => i % 3 === 2)
                            .map((item) =>
                            (
                                <ImageBackground
                                    key={`${item.id}`}
                                    source={item.image}
                                    style={{
                                        ...styles.publicPostsImageStyle,
                                        height: item.isVideo
                                            ?
                                            ((((width - 40) / 2.0) * ((Math.floor(Math.random() * 150) + 50) / 145))) >= ((width / 3.0) - 15)
                                                ?
                                                (((width - 40) / 2.0) * ((Math.floor(Math.random() * 150) + 50) / 145))
                                                :
                                                ((width / 3.0) - 15)
                                            :
                                            ((width / 3.0) - 15),
                                    }}
                                >
                                    {
                                        item.isVideo
                                            ?
                                            <Text style={{ margin: Sizes.fixPadding - 5.0, ...Fonts.whiteColor16SemiBold }}>
                                                Video
                                            </Text>
                                            :
                                            null
                                    }
                                </ImageBackground>
                            ))}
                    </View>
                </View>
            </ScrollView>
        )
    }

    function filterOptions() {
        const renderItem = ({ item, index }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedFilterOptionIndex(index)}
                style={{
                    borderColor: selectedFilterOptionIndex == index ? Colors.primaryColor : Colors.lightGrayColor,
                    ...styles.filterOptionWrapStyle,
                }}>
                <Text style={selectedFilterOptionIndex == index ? { ...Fonts.primaryColor16SemiBold } : { ...Fonts.lightGrayColor16SemiBold }}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
        return (
            <View>
                <FlatList
                    data={filterOptionsList}
                    keyExtractor={(index) => `${index}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding + 5.0, paddingVertical: Sizes.fixPadding }}
                />
            </View>
        )
    }

    function searchTab() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('SearchDetail') }}
                style={styles.searchTabWrapStyle}
            >
                <MaterialIcons name='search' color={Colors.grayColor} size={20} />
                <Text style={{ ...Fonts.grayColor14Regular, marginHorizontal: Sizes.fixPadding }}>
                    Search here...
                </Text>
            </TouchableOpacity>
        )
    }

    function backArrow() {
        return (
            <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} style={{ margin: 20.0 }} onPress={() => navigation.pop()} />
        )
    }
}

export default SearchScreen

const styles = StyleSheet.create({
    searchTabWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding + 5.0,
    },
    filterOptionWrapStyle: {
        borderWidth: 1.0,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding - 5.0,
    },
    publicPostsImageStyle: {
        width: (width / 3.0) - 15,
        marginBottom: Sizes.fixPadding - 7.0,
        justifyContent: 'flex-end',
    }
})