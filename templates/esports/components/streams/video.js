
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, Image } from 'react-native'
import { Colors, Fonts, Sizes } from '../../constants/styles';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player';
import recording_state from '../../../../constants/recording_state';

const Video = (props) => {


    console.log("Proprs");
    console.log(props);
    let video = '';

    let recording = props.recording;

    let height = 400;

    if (recording.video_processing_state == recording_state.FINISHED) {

        video = (
            <View style={{ width: '100%', height: (height - (66 + StatusBar.currentHeight)), }}>
                <View style={{ flex: 1, }}>
                    <VideoPlayer
                        videoProps={{
                            shouldPlay: true,
                            resizeMode: ResizeMode.STRETCH,
                            source: { uri : recording.video_mp4},
                            isLooping: true,
                        }}
                        fullscreen={{
                            inFullscreen: true,
                            visible: true,
                        }}
                        icon={{
                            pause: <MaterialIcons name='pause-circle-filled' color={Colors.whiteColor} size={50} style={{ marginBottom: height / 4.5 }} />,
                            play: <MaterialIcons name='play-circle-filled' color={Colors.whiteColor} size={50} style={{ marginBottom: height / 4.5 }} />,
                        }}
                        slider={{ visible: false, }}
                        timeVisible={false}
                        activityIndicator={{ color: 'transparent', size: 50.0, }}
                    />
                </View>
            </View>
        );

    } else if (recording.video_processing_state == recording_states.UNPROCESSED) {
        video = <Text>Recording requires processing, please check back later.</Text>
    } else if (recording.video_processing_state == recording_state.PROCESSING) {
        video = <Text>Recording is currently processing, please check back soon!</Text>
    } else if (recording.video_processing_state == recording_state.PROBLEM) {
        video = <Text>Recording is currently processing, please check back soon!</Text>
    } else {
        video = <Text>Unkown Processing State.</Text>
    }

    return (
        <>
            {video}
        </>
    )

};

export default Video;

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