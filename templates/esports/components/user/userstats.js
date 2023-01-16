import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Fonts } from "../../constants/styles";


const UserStats = ({user, navigation}) => {

    return(
        <View style={styles.userPostsAndFollowersRelatedInfoWrapStyle}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ ...Fonts.blackColor16Bold }}>
                        105
                    </Text>
                    <Text numberOfLines={1} style={{ maxWidth: width / 4.3, ...Fonts.grayColor14Regular }}>
                        posts
                    </Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ ...Fonts.blackColor16Bold }}>
                        59
                    </Text>
                    <Text numberOfLines={1} style={{ maxWidth: width / 4.3, ...Fonts.grayColor14Regular }}>
                        videos
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.push('Followers') }} style={{ alignItems: 'center', }}>
                    <Text style={{ ...Fonts.blackColor16Bold }}>
                        850k
                    </Text>
                    <Text numberOfLines={1} style={{ maxWidth: width / 4.3, ...Fonts.grayColor14Regular }}>
                        followers
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.push('Followings') }} style={{ alignItems: 'center', }}>
                    <Text style={{ ...Fonts.blackColor16Bold }}>
                        542
                    </Text>
                    <Text numberOfLines={1} style={{ maxWidth: width / 4.3, ...Fonts.grayColor14Regular }}>
                        following
                    </Text>
                </TouchableOpacity>
            </View>
    );
}

export default UserStats;

const styles = StyleSheet.create({
    userPostsAndFollowersRelatedInfoWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: Sizes.fixPadding * 2.0,
    }
})