import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const storyOptions = [
    {
        id: '1',
        icon: require('../../assets/images/icons/text.png'),
        option: 'Text Story',
        color1: '#00D2FF',
        color2: '#3A7BD5',
    },
    {
        id: '2',
        icon: require('../../assets/images/icons/camera.png'),
        option: 'Camera',
        color1: '#F857A6',
        color2: '#FF5858',
    },
    {
        id: '3',
        icon: require('../../assets/images/icons/music.png'),
        option: 'Music',
        color1: '#FFE259',
        color2: '#FFA751',
    },
    {
        id: '4',
        icon: require('../../assets/images/icons/selfi.png'),
        option: 'Selfie',
        color1: '#799F0C',
        color2: '#ACBB78',
    },
    {
        id: '5',
        icon: require('../../assets/images/icons/boomerang.png'),
        option: 'Boomerang',
        color1: '#4CB8C4',
        color2: '#3CD3AD',
    },
];

const galleryImages = [
    {
        id: '1',
        image: require('../../assets/images/gallery/gallery1.png'),
    },
    {
        id: '2',
        image: require('../../assets/images/gallery/gallery2.png'),
    },
    {
        id: '3',
        image: require('../../assets/images/gallery/gallery3.png'),
    },
    {
        id: '4',
        image: require('../../assets/images/gallery/gallery4.png'),
    },
    {
        id: '5',
        image: require('../../assets/images/gallery/gallery5.png'),
    },
    {
        id: '6',
        image: require('../../assets/images/gallery/gallery6.png'),
    },
    {
        id: '7',
        image: require('../../assets/images/gallery/gallery7.png'),
    },
    {
        id: '8',
        image: require('../../assets/images/gallery/gallery8.png'),
    },
    {
        id: '9',
        image: require('../../assets/images/gallery/gallery9.png'),
    },
    {
        id: '10',
        image: require('../../assets/images/gallery/gallery10.png'),
    },
    {
        id: '11',
        image: require('../../assets/images/gallery/gallery11.png'),
    },
    {
        id: '12',
        image: require('../../assets/images/gallery/gallery12.png'),
    },
    {
        id: '13',
        image: require('../../assets/images/gallery/gallery13.png'),
    },
    {
        id: '14',
        image: require('../../assets/images/gallery/gallery14.png'),
    },
    {
        id: '15',
        image: require('../../assets/images/gallery/gallery15.png'),
    },
    {
        id: '16',
        image: require('../../assets/images/gallery/gallery1.png'),
    },
    {
        id: '17',
        image: require('../../assets/images/gallery/gallery16.png'),
    },
    {
        id: '18',
        image: require('../../assets/images/gallery/gallery17.png'),
    },
];

const CreateStoryScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {storyOptionsInfo()}
                {galleryInfo()}
            </View>
        </SafeAreaView>
    )

    function galleryInfo() {
        const renderItem = ({ item }) => (
            <Image
                source={item.image}
                style={styles.galleryImageStyle}
            />
        )
        return (
            <View style={{ flex: 1, }}>
                <Text style={{ marginBottom: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.blackColor18SemiBold }}>
                    Gallery
                </Text>
                <FlatList
                    data={galleryImages}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding + 5.0, paddingBottom: Sizes.fixPadding }}
                />
            </View>
        )
    }

    function storyOptionsInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('Story1') }}
                style={{ marginHorizontal: Sizes.fixPadding - 5.0, borderRadius: Sizes.fixPadding, }}
            >
                <LinearGradient
                    colors={[item.color2, item.color1,]}
                    start={{ x: 1, y: 1, }}
                    style={styles.storyOptionWrapStyle}
                >
                    <Image
                        source={item.icon}
                        style={styles.storyOptionIconStyle}
                    />
                    <Text style={{ ...Fonts.whiteColor14SemiBold }}>
                        {item.option}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
        return (
            <View>
                <FlatList
                    data={storyOptions}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: Sizes.fixPadding * 2.0, paddingHorizontal: Sizes.fixPadding + 5.0 }}
                />
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="close" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ marginHorizontal: Sizes.fixPadding, ...Fonts.blackColor20SemiBold }}>
                    Create Story
                </Text>
            </View>
        )
    }
}

export default CreateStoryScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3.0,
        backgroundColor: Colors.whiteColor,
        padding: Sizes.fixPadding + 5.0
    },
    storyOptionWrapStyle: {
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding,
        alignItems: 'center',
        height: 100.0,
        justifyContent: 'flex-end',
        minWidth: 90.0,
    },
    storyOptionIconStyle: {
        marginBottom: Sizes.fixPadding - 5.0,
        width: 28.0,
        height: 25.0,
        resizeMode: 'contain',
        tintColor: Colors.whiteColor
    },
    galleryImageStyle: {
        width: '100%',
        maxWidth: (width / 3.0) - 20.0,
        height: height / 6.0,
        flex: 1,
        marginHorizontal: Sizes.fixPadding - 5.0,
        marginBottom: Sizes.fixPadding
    }
})