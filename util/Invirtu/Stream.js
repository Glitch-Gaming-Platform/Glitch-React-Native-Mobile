
import { WebView } from 'react-native-webview';

const Broadcast = ({ id, auth_token }) => {


    return (
        <>
            <WebView
                source={{ 
                    uri: 'https://widgets.bingewave.com/stream/' +id,
                    headers :{ "Authorization": auth_token} 
                }}
                headers={ {"Authorization": auth_token} }
                useWebKit={true}
                originWhitelist={['*']}
                allowsInlineMediaPlayback={true}
                mediaCapturePermissionGrantType={true}
                javaScriptEnabled={true}
                allowsFullscreenVideo={true}
                mediaPlaybackRequiresUserAction={false}
            />
        </>
    )
}

export default Broadcast;