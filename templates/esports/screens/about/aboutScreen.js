import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';

const companyPolicies = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut blandit donec libero urna eu sodales gravida. Iaculis pharetra ullamcorper sed pulvinar vitae cursus semper.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sit ante tristique nisi venenatis purus nulla. Amet consequat ut est faucibus elementum venenatis hendrerit tempor. Urna, fermentum blandit congue eget imperdiet at amet magna nisi.',
];

const termsOfUses = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut blandit donec libero urna eu sodales gravida. Iaculis pharetra ullamcorper sed pulvinar vitae cursus semper.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sit ante tristique nisi venenatis purus nulla. Amet consequat ut est faucibus elementum venenatis hendrerit tempor. Urna, fermentum blandit congue eget imperdiet at amet magna nisi.',
];

const AboutScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {companyPoliciesInfo()}
                    {termsOfUseInfo()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function termsOfUseInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding - 6.0, ...Fonts.blackColor18SemiBold }}>
                    Terms of Use
                </Text>
                {
                    termsOfUses.map((item, index) => (
                        <Text
                            key={`${index}`}
                            style={{ ...Fonts.grayColor14Regular, marginBottom: Sizes.fixPadding - 7.0 }}
                        >
                            {item}
                        </Text>
                    ))
                }
            </View>
        )
    }

    function companyPoliciesInfo() {
        return (
            <View style={{ marginVertical: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding - 6.0, ...Fonts.blackColor18SemiBold }}>
                    Company Policies
                </Text>
                {
                    companyPolicies.map((item, index) => (
                        <Text
                            key={`${index}`}
                            style={{ ...Fonts.grayColor14Regular, marginBottom: Sizes.fixPadding - 7.0 }}
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
                    About
                </Text>
            </View>
        )
    }
}

export default AboutScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    }
})