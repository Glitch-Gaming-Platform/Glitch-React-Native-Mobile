import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const HelpDetailScreen = ({ navigation, route }) => {

    const item = route.params.item;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {helpDetail()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function helpDetail() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding + 5.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor18SemiBold }}>
                    {item.topic}
                </Text>
                {
                    item.topicDetail.map((item, index) => (
                        <Text
                            key={`${index}`}
                            style={{ ...Fonts.grayColor14Regular, marginBottom: Sizes.fixPadding - 5.0, }}
                        >
                            {item}
                        </Text>
                    ))
                }
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Help
                </Text>
            </View>
        )
    }
}

export default HelpDetailScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    }
})