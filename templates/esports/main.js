import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { LogBox, Dimensions } from 'react-native';
import LoadingScreen from "./components/loadingScreen";
import BottomTabBarScreen from "./components/bottomTabBarScreen";
import SearchScreen from './screens/search/searchScreen';
import SearchDetailScreen from './screens/searchDetail/searchDetailScreen';
import CreateStoryScreen from './screens/createStory/createStoryScreen';
import Story1Screen from './screens/story1/story1Screen';
import Story2Screen from './screens/story2/story2Screen';
import OpenStoryScreen from './screens/openStory/openStoryScreen';
import UserProfileScreen from './screens/userProfile/userProfileScreen';
import FollowersScreen from './screens/followers/followersScreen';
import FollowingsScreen from './screens/followings/followingsScreen';
import PostsScreen from './screens/posts/postsScreen';
import VideosScreen from './screens/videos/videosScreen';
import FollowRequestScreen from './screens/followRequests/followRequestScreen';
import CommentsScreen from './screens/comments/commentsScreen';
import PostScreen from './screens/post/postScreen';
import PostFilterScreen from './screens/postFilter/postFilterScreen';
import PostCaptionAndTagFriendScreen from './screens/postCaptionAndTagFriend/postCaptionAndTagFriendScreen';
import ChatScreen from './screens/chat/chatScreen';
import VideoCallScreen from './screens/videoCall/videoCallScreen';
import CallScreen from './screens/call/callScreen';
import SearchChatScreen from './screens/searchChat/searchChatScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './components/customDrawerScreen';
import { BottomBarIndexContext, BottomBarIndexProvider } from './components/botomTabBarIndexContext';
import { useContext } from 'react';
import EditProfileScreen from './screens/editProfile/editProfileScren';
import UserActivityScreen from './screens/userActivity/userActivityScreen';
import AccountPrivacyScreen from './screens/accountPrivacy/accountPrivacyScreen';
import BlockAccountsScreen from './screens/blockAccounts/blockAccountsScreen';
import LinkAccountsScreen from './screens/linkAccounts/linkAccountsScreen';
import AboutScreen from './screens/about/aboutScreen';
import HelpScreen from './screens/help/helpScreen';
import HelpDetailScreen from './screens/helpDetail/helpDetailScreen';
import SplashScreen from './screens/splashScreen';
import OnboardingScreen from './screens/onboarding/onboardingScreen';
import SigninScreen from './screens/auth/signinScreen';
import SignupScreen from './screens/auth/signupScreen';
import VerificationScreen from './screens/auth/verificationScreen';
import Screens from '../../util/Screens';
import WatchScreen from './screens/watch/watchscreen';
import HomeScreen from './screens/home/homeScreen';
import CreateBroadcastScreen from './screens/videoCall/create';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MessageScreen from './screens/message/messageScreen';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const { width } = Dimensions.get('window');

const DrawerNavigation = () => {

    const { index } = useContext(BottomBarIndexContext);

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerPosition: 'right',
                drawerStyle: { width: width - 90.0, },
                swipeEnabled: index == 5 ? true : false,
            }}
        >
            <Drawer.Screen name="DrawerMain" component={BottomTabBarScreen} options={{ ...TransitionPresets.DefaultTransition, }} />
        </Drawer.Navigator>
    )
}

const Main = () => {


    return (
        <BottomBarIndexProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                >
                    <Stack.Screen name="Loading" component={LoadingScreen} />
                    <Stack.Screen name="Splash" component={SplashScreen} options={{ ...TransitionPresets.DefaultTransition }} />
                    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                    <Stack.Screen name={Screens.getAuthLogin()} component={SigninScreen} options={{ ...TransitionPresets.DefaultTransition }} />
                    <Stack.Screen name={Screens.getAuthRegister()}  component={SignupScreen} />
                    <Stack.Screen name="Verification" component={VerificationScreen} />

                    
                    <Stack.Screen name={Screens.getHome()} component={HomeScreen} />
                    <Stack.Screen name={Screens.getWatchStreams()} component={WatchScreen} />  

                    <Stack.Screen name={Screens.getCreateStream()} component={CreateBroadcastScreen} />

                    
                    <Stack.Screen name="Message" component={MessageScreen} />
                    
                    <Stack.Screen name="BottomTabBar" component={DrawerNavigation} />
                    <Stack.Screen name="Search" component={SearchScreen} />
                    <Stack.Screen name="SearchDetail" component={SearchDetailScreen} />
                    <Stack.Screen name="CreateStory" component={CreateStoryScreen} />
                    <Stack.Screen name="Story1" component={Story1Screen} />
                    <Stack.Screen name="Story2" component={Story2Screen} />
                    <Stack.Screen name="OpenStory" component={OpenStoryScreen} />
                    <Stack.Screen name="UserProfile" component={UserProfileScreen} />
                    <Stack.Screen name="Followers" component={FollowersScreen} />
                    <Stack.Screen name="Followings" component={FollowingsScreen} />
                    <Stack.Screen name="Posts" component={PostsScreen} />
                    <Stack.Screen name="Videos" component={VideosScreen} />
                    <Stack.Screen name="FollowRequest" component={FollowRequestScreen} />
                    <Stack.Screen name="Comments" component={CommentsScreen} />
                    <Stack.Screen name="Post" component={PostScreen} />
                    <Stack.Screen name="PostFilter" component={PostFilterScreen} />
                    <Stack.Screen name="PostCaptionAndTagFriend" component={PostCaptionAndTagFriendScreen} />
                    <Stack.Screen name="Chat" component={ChatScreen} />
                    <Stack.Screen name="VideoCall" component={VideoCallScreen} />
                    <Stack.Screen name="Call" component={CallScreen} />
                    <Stack.Screen name="SearchChat" component={SearchChatScreen} />
                    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                    <Stack.Screen name="UserActivity" component={UserActivityScreen} />
                    <Stack.Screen name="AccountPrivacy" component={AccountPrivacyScreen} />
                    <Stack.Screen name="BlockAccounts" component={BlockAccountsScreen} />
                    <Stack.Screen name="LinkAccounts" component={LinkAccountsScreen} />
                    <Stack.Screen name="About" component={AboutScreen} />
                    <Stack.Screen name="Help" component={HelpScreen} />
                    <Stack.Screen name="HelpDetail" component={HelpDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </BottomBarIndexProvider>
    );
}

export default Main;