import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { Menu } from 'react-native-material-menu';

const { width, height } = Dimensions.get('window');

const photosList = [
    {
        id: '1',
        photo: require('../../assets/images/gallery/gallery18.png'),
    },
    {
        id: '2',
        photo: require('../../assets/images/gallery/gallery19.png'),
    },
    {
        id: '3',
        photo: require('../../assets/images/gallery/gallery20.png'),
    },
    {
        id: '4',
        photo: require('../../assets/images/gallery/gallery21.png'),
    },
    {
        id: '5',
        photo: require('../../assets/images/gallery/gallery22.png'),
    },
    {
        id: '6',
        photo: require('../../assets/images/gallery/gallery23.png'),
    },
    {
        id: '7',
        photo: require('../../assets/images/gallery/gallery24.png'),
    },
    {
        id: '8',
        photo: require('../../assets/images/gallery/gallery25.png'),
    },
    {
        id: '9',
        photo: require('../../assets/images/gallery/gallery26.png'),
    },
    {
        id: '10',
        photo: require('../../assets/images/gallery/gallery27.png'),
    },
    {
        id: '11',
        photo: require('../../assets/images/gallery/gallery28.png'),
    },
    {
        id: '12',
        photo: require('../../assets/images/gallery/gallery29.png'),
    },
];

const photoOptions = ['Photos', 'Gallery', 'Camera', 'Crop Images'];

const PostScreen = ({ navigation }) => {

    const [visible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(photoOptions[0]);
    const [selectedImage, setSelectedImage] = useState(photosList[0].photo)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {postPoster()}
                {photoOptionsInfo()}
                {photosInfo()}
            </View>
        </SafeAreaView>
    )

    function photosInfo() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { setSelectedImage(item.photo) }}
                style={{ flex: 1, margin: Sizes.fixPadding - 9.0, maxWidth: width / 3.4, }}
            >
                <Image
                    source={item.photo}
                    style={{ height: width / 3.3, width: '100%', }}
                />
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={photosList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                numColumns={3}
                contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding * 2.0, }}
            />
        )
    }

    function photoOptionsInfo() {
        return (
            <Menu
                visible={visible}
                anchor={
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { setVisible(true) }}
                        style={styles.photoOptionWrapStyle}
                    >
                        <Text style={{ ...Fonts.blackColor16SemiBold }}>
                            {selectedOption}
                        </Text>
                        <MaterialIcons name="arrow-drop-down" size={26} color={Colors.blackColor} />
                    </TouchableOpacity>
                }
                onRequestClose={() => { setVisible(false) }}
            >
                <View style={{ marginVertical: Sizes.fixPadding - 4.0, minWidth: 150.0, }}>
                    {
                        photoOptions.map((item, index) => (
                            <Text
                                key={`${index}`}
                                style={{ ...Fonts.blackColor16SemiBold, marginHorizontal: Sizes.fixPadding, marginVertical: Sizes.fixPadding - 6.0, }}
                                onPress={() => {
                                    setSelectedOption(item)
                                    setVisible(false)
                                }}
                            >
                                {item}
                            </Text>
                        ))
                    }
                </View>
            </Menu>
        )
    }

    function postPoster() {
        return (
            <Image
                source={selectedImage}
                style={styles.postImageStyle}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="close" size={24} color={Colors.blackColor} onPress={() => { navigation.pop() }} />
                    <Text style={{ marginHorizontal: Sizes.fixPadding, ...Fonts.blackColor20SemiBold }}>
                        New Post
                    </Text>
                </View>
                <MaterialIcons name="arrow-forward" size={24} color={Colors.blackColor} onPress={() => { navigation.push('PostFilter', { selectedPhoto: selectedImage }) }} />
            </View>
        )
    }
}

export default PostScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        paddingVertical: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    postImageStyle: {
        height: height / 3.0,
        alignSelf: 'center',
        width: width - 40,
        marginTop: Sizes.fixPadding * 2.0,
    },
    photoOptionWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        alignSelf: 'flex-start',
        marginVertical: Sizes.fixPadding
    }
})