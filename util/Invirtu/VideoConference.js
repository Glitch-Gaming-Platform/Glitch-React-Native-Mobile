
import { WebView } from 'react-native-webview';

const VideoConferencing = ({ id, auth_token }) => {


    console.log({ 
        uri: 'https://widgets.bingewave.com/webrtc/' +id,
        headers :{ "Authorization": auth_token} 
    });
    return (
        <>
            <WebView
                source={{ 
                    uri: 'https://widgets.bingewave.com/webrtc/' +id,
                    headers :{ "Authorization": auth_token} 
                }}
                headers={ {"Authorization": auth_token} }
                useWebKit={true}
                originWhitelist={['*']}
                allowsInlineMediaPlayback={true}
                mediaCapturePermissionGrantType={true}
                javaScriptEnabled={true}
                mediaPlaybackRequiresUserAction={false}
            />
        </>
    )
}

export default VideoConferencing;