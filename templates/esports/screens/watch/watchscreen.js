import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Fonts, Sizes } from '../../constants/styles'
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';
import Requests from "../../../../util/Requests";
import Video from "../../components/streams/video";


const WatchScreen = (props) => {

    console.log("Proprs");
    console.log(props);

    let navigation = props.navigation;
    
    let stream_id = props.route.params.stream_id;
    const [stream, setStream] = useState(null);
    const [video, setVideo] = useState(null);

    useEffect(() => {

        if (stream_id) {
            Requests.eventsView(stream_id).then(response => {

                console.log(response);
                setStream(response.data);

                let recording = response.data.recordings[0];

                //want to show the longest recording if multiple
                if (response.data.recordings.length > 1) {

                    response.data.recordings.forEach((item, index) => {

                        try {
                            if (item.runtime && recording.runtime && parseFloat(item.runtime) > parseFloat(recording.runtime)) {
                                recording = item;
                            }
                        } catch (e) {
                            console.error(e);
                        }

                    });
                }

                setVideo(<Video recording={recording} />);


            }).catch(error => {
                console.log(error);
            });
        } else {
            alert("No Stream ID");
        }


    }, []);


    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.blackColor} onPress={() => navigation.pop()} />
                <Text style={{ flex: 1, marginHorizontal: Sizes.fixPadding - 5.0, ...Fonts.blackColor20SemiBold }}>
                    realtinashah
                </Text>
            </View>
        )
    }


    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
               {header()}
               {video}
            </View>
        </SafeAreaView>
    );




};

export default WatchScreen;

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        padding: Sizes.fixPadding * 2.0,
    },
    videoInfoWrapStyle: {
        position: 'absolute',
        bottom: 0.0,
        right: 0.0,
        left: 0.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0
    },
    userImageStyle: {
        width: 35.0,
        height: 35.0,
        borderRadius: 17.5,
        borderColor: Colors.whiteColor,
        borderWidth: 0.5,
    },
    videoLikeShareAndCmtInfoWrapStyle: {
        marginTop: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})