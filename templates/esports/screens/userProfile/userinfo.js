import { StyleSheet, Text, View } from 'react-native';
import { Fonts, Sizes } from '../../constants/styles';

const UserInfo = ({ user, navigation }) => {

    return (
        <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <View style={{ flex: 1, }}>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor18SemiBold }}>
                        Tina Shah
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Regular }}>
                        Artist
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.blackColor14Regular }}>
                        Art + Prints + Workshops
                    </Text>
                    <Text numberOfLines={1}>
                        <Text style={{ ...Fonts.blackColor14Regular }}>
                            Find me on { }
                        </Text>
                        <Text style={{ ...Fonts.blueColor14Regular }}>
                            @samantha___
                        </Text>
                    </Text>
                    <Text numberOfLines={1}>
                        <Text style={{ ...Fonts.blackColor14Regular }}>
                            Website: { }
                        </Text>
                        <Text style={{ ...Fonts.blueColor14Regular }}>
                            www.officialtinashah.com
                        </Text>
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { userStoryAvailable ? navigation.push('OpenStory') : null }}
                    style={{ ...styles.userImageWrapStyle, borderColor: userStoryAvailable ? Colors.primaryColor : Colors.lightGrayColor, }}
                >
                    <Image
                        source={require('../../assets/images/users/user11.png')}
                        style={{ width: width / 4.35, height: width / 4.35, borderRadius: (width / 4.35) / 2.0 }}
                    />
                </TouchableOpacity>
            </View>
            <Text style={{ ...Fonts.blackColor14Regular }}>
                Followed by Followed by alicia___ , isha.__ , officialjoyjain_ and 27 more
            </Text>
        </View>
    );
}

export default UserInfo;

const styles = StyleSheet.create({
    userImageWrapStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        width: width / 4.0,
        height: width / 4.0,
        borderRadius: (width / 4.0) / 2.0,
        backgroundColor: Colors.whiteColor
    }
})