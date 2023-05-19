import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import NavigatorView from './RootNavigation';
import {fonts, dimens, colors} from '../styles';

import {createStackNavigator} from '@react-navigation/stack';
// import {logout} from '../auth/session';
// import {skipNow} from '../auth/signin';
import DeviceInfo from 'react-native-device-info';
import styles from './styles';
// import Login from '../auth/Login';
// import OtpVerification from '../auth/OtpVerification';
// import Skip from '../auth/Skip';
import TabNavigator from './MainTabNavigator';
import {Icon} from 'react-native-elements';
import {Linking} from 'react-native';
import Splash from '../StudentModule/Splash/Splash';
import {connect} from 'react-redux';
import Login from '../StudentModule/auth/Login';
import Welcome from '../StudentModule/auth/Welcome';
import Signup from '../StudentModule/auth/SignUp';
import SelectCategory from '../StudentModule/onboarding/SelectCategory';
import SelectSubCategory from '../StudentModule/onboarding/SelectSubCategory';
import ParticularSubjectClass from '../StudentModule/home/ParticularSubjectClass';
import SavedVideos from '../StudentModule/video/SavedVideos';
import FreeVideos from '../StudentModule/video/FreeVideos';
import ParticularVideo from '../StudentModule/video/ParticularVideo';
import TestQuestions from '../StudentModule/Test/TestQuestions';
import Notes from '../StudentModule/notes/Notes';
import Syllabus from '../StudentModule/syllabus/Syllabus';
import SubTopics from '../StudentModule/syllabus/SubTopics';
import TopicLists from '../StudentModule/Topics/TopicLists';
import Account from '../StudentModule/Account/Account';
import EditProfile from '../StudentModule/Account/EditProfile';
import Subscription from '../StudentModule/home/Subscription';
import ChatMessage from '../StudentModule/chat/ChatMessage';
import OtpVerification from '../StudentModule/auth/OtpVerification';
import VideoRateReview from '../StudentModule/video/VideoRateReview';
import Notification from '../StudentModule/Account/Notification';
import HelpandSupport from '../StudentModule/Account/HelpandSupport';
import MyLearnings from '../StudentModule/Account/MyLearnings';
import TestReview from '../StudentModule/Account/TestReview';
import LiveClass from '../StudentModule/Live/LiveClass';
import Search from '../StudentModule/home/Search';
import Live from '../StudentModule/Live/Live';
import TestInstructions from '../StudentModule/Test/TestInstructions';
import MockTest from '../StudentModule/MockTest/MockTest';
import UpcomingLive from '../StudentModule/Live/UpcomingLive';
import CompleteProfile from '../StudentModule/home/CompleteProfile';
import SubjectWiseTest from '../StudentModule/MockTest/SubjectWiseTest';
import TeacherLogin from '../TeacherModule/auth/Login';
import Home from '../TeacherModule/home/Home';
import UpcomingClassesList from '../TeacherModule/home/UpcomingClassesList';
import LiveClassesList from '../TeacherModule/LiveClass/LiveClassesList';
import TeacherChatMessage from '../TeacherModule/chat/ChatMessage';
import VideoTopicLists from '../TeacherModule/Video/VideoTopicList';
import TeacherNotification from '../StudentModule/Account/Notification';
import TeacherHelpandSupport from '../StudentModule/Account/HelpandSupport';
import TeacherTestReview from '../StudentModule/Account/TestReview';
import TeacherAccount from '../TeacherModule/Account/Account';
import TeacherEditProfile from '../TeacherModule/Account/EditProfile';
import TeacherLive from '../TeacherModule/LiveClass/Live';
import MyClassesList from '../TeacherModule/Video/MyClassesList';
import TeacherParticularVideo from '../TeacherModule/Video/ParticularVideo';

function Navigator(props) {
  console.warn('ppppp', props);
  const Stack = createStackNavigator();
  if (!props.authToken && props.skip) {
    if (props.userType === 'Student') {
      return (
        <Stack.Navigator
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OtpVerification" component={OtpVerification} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SelectCategory" component={SelectCategory} />
          <Stack.Screen
            name="SelectSubCategory"
            component={SelectSubCategory}
          />

         
        </Stack.Navigator>
      );
    } else if (props.userType === 'Teacher') {
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={TeacherLogin} />

          {/* <Stack.Screen name="Home" component={TabNavigator} />
          <Stack.Screen
            name="UpcomingClassesList"
            component={UpcomingClassesList}
          />
          <Stack.Screen name="LiveClassesList" component={LiveClassesList} />
          <Stack.Screen name="Live" component={TeacherLive} />
          <Stack.Screen name="ChatMessage" component={TeacherChatMessage} />

        </Stack.Navigator>
      );
    } else {
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      );
    }
  }
  return (
    <NavigatorView />
   
    // <Drawer.Navigator
    //   drawerStyle={{
    //     backgroundColor: '#fff',
    //   }}
    //   drawerContent={navProps => (
    //     <CustomDrawerContent {...props} {...navProps} />
    //   )}>
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: true,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="Homes"
    //     component={NavigatorView}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: true,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="EditAccount"
    //     component={EditAccount}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="PropertyDetail"
    //     component={PropertyDetail}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="PropertyListing"
    //     component={PropertyListing}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="Notifications"
    //     component={Notifications}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="News"
    //     component={News}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="ParticularNews"
    //     component={ParticularNews}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="DeveloperListing"
    //     component={DeveloperListing}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="DeveloperDetail"
    //     component={DeveloperDetail}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="RecentlyViewed"
    //     component={RecentlyViewed}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="ContactedProperties"
    //     component={ContactedProperties}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="AboutUs"
    //     component={AboutUs}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="PrivacyPolicy"
    //     component={PrivacyPolicy}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="Filter"
    //     component={Filter}
    //     {...props}
    //   />
    //   <Drawer.Screen
    //     options={{
    //       swipeEnabled: false,
    //       disableGestures: false,
    //       headerShown: false,
    //     }}
    //     name="SearchList"
    //     component={Search}
    //     {...props}
    //   />
    // </Drawer.Navigator>
  );
}

export default connect(
  state => {
    return {
      authToken: state.session.authToken,
      profile: state.session.profile,
      skip: state.signin.skip,
      userType: state.signin.userType,
    };
  },
  // {
  //   logout,
  //   skipNow,
  // },
)(Navigator);
