import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons } from '@expo/vector-icons';
import { BarChart } from "react-native-chart-kit";

const { width } = Dimensions.get('window');

const UserActivityScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {timeInfo()}
                {chartInfo()}
            </View>
        </SafeAreaView>
    )

    function chartInfo() {

        const data = {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    data: [50, 80, 60, 70, 30, 40, 50],
                }
            ]
        };

        const chartConfig = {
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            fillShadowGradient: Colors.primaryColor,
            fillShadowGradientOpacity: 1,
            color: (opacity = 1) => `rgba(6, 131, 160, ${opacity})`,
            barPercentage: 0.7,
            barRadius: 5,
            decimalPlaces: 0,
            formatTopBarValue: (topBarValue) => `${topBarValue}m`,
            width: width - 40,
            formatYLabel: (yLabel) => `${yLabel}m`,
            verticalLabelRotation: 60,
            labelColor: (opacity = 1) => `rgba(183, 183, 183, ${opacity})`,
        };

        return (
            <View style={{ width: width - 40.0, alignSelf: 'center', }}>
                <BarChart
                    style={{ right: 10.0, }}
                    data={data}
                    width={width - 40}
                    height={220}
                    chartConfig={chartConfig}
                    showBarTops={false}
                    fromZero
                    withInnerLines={false}
                    showValuesOnTopOfBars={true}
                />
            </View>
        )
    }

    function timeInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    Time on Social Media
                </Text>
                <View style={{ marginVertical: Sizes.fixPadding * 2.0, alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', ...Fonts.primaryColor20Bold }}>
                        1h 20min
                    </Text>
                    <Text style={{ textAlign: 'center', ...Fonts.grayColor16SemiBold }}>
                        Daily Average
                    </Text>
                    <Text style={{ textAlign: 'center', ...Fonts.grayColor14Regular }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse est integer semper justo ut ultrices Tristique urna in ultrices.
                    </Text>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    Your Activity
                </Text>
            </View>
        )
    }
}

export default UserActivityScreen

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    }
})