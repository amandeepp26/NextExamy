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
import  TeacherLogin from '../TeacherModule/auth/Login';

// const drawerData = [
//   {
//     name: 'Recently Viewed Properties',
//     icon: 'location-outline',
//     screen: 'RecentlyViewed',
//   },
//   {
//     name: 'Saved Properties',
//     icon: 'heart-outline',
//     screen: 'Saved',
//   },
//   {
//     name: 'Contacted Properties',
//     icon: 'chatbubble-ellipses-outline',
//     screen: 'ContactedProperties',
//   },
//   {
//     name: 'Change Email/Phone Number',
//     icon: 'person-outline',
//     screen: 'EditAccount',
//   },
//   // {
//   //   name: 'Change Languages',
//   //   icon: 'language-outline',
//   //   screen: 'Saved',
//   // },
//   // {
//   //   name: 'Help & Support',
//   //   icon: 'mail-outline',
//   //   screen: 'Account',
//   // },
//   {
//     name: 'About Us',
//     icon: 'information-circle-outline',
//     screen: 'AboutUs',
//   },
//   {
//     name: 'Privacy Policy',
//     icon: 'document-outline',
//     screen: 'PrivacyPolicy',
//   },
//   // {
//   //   name: 'Contact Us',
//   //   icon: 'headset-outline',
//   //   screen: 'Saved',
//   // },
//   {
//     name: 'Logout',
//     icon: require('@images/logout.png'),
//   },
// ];

// const Drawer = createDrawerNavigator();

// function CustomDrawerContent(props) {
//   let check =
//     props?.profile?.userID == 12 &&
//     (props?.profile?.roles || []).includes('sales-manager');
//   const data = drawerData
//     .map(item => {
//       if (item.name == 'Employee Tracker') {
//         return check ? item : null;
//       }
//       return item;
//     })
//     .filter(item => item);
//   return (
//     <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
//     <>
//       <DrawerContentScrollView {...props} style={{padding: 0,marginTop:Platform.OS=='ios'?-60:null}}>
//         <StatusBar
//           barStyle="light-content"
//           backgroundColor={colors.blue}
//           translucent={false}
//         />
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             paddingTop: 10,
//             marginHorizontal: 10,
//             paddingBottom: 10,
//             borderBottomWidth: 1,
//             borderColor: '#d3d3d3',
//           }}>
//           <Pressable
//             onPress={() => props.navigation.toggleDrawer()}
//             style={{
//               padding: 5,
//               alignSelf: 'flex-end',
//               backgroundColor: '#f5f5f5',
//               borderRadius: 50,
//             }}>
//             <Icon name="close-outline" type="ionicon" />
//           </Pressable>
//           <Image
//             source={require('../../../assets/images/logo.png')}
//             style={{width: '65%', height: 28, marginLeft: 20}}
//           />
//         </View>
//         <View style={styles.divider} />
//         {data.map((item, idx) => (
//           <>
//             <DrawerItem
//               key={`drawer_item-${item.name}`}
//               label={() => {
//                 if (item.name === 'Logout') {
//                   if (props.profile) {
//                     return (
//                       <View style={styles.menuLabelFlex}>
//                         <Image
//                           style={[styles.icon, {tintColor: colors.themeColor}]}
//                           source={item.icon}
//                         />
//                         <Text
//                           style={[
//                             styles.menuTitle,
//                             {color: colors.themeColor},
//                           ]}>
//                           {item.name}
//                         </Text>
//                       </View>
//                     );
//                   } else {
//                     return (
//                       <View style={styles.menuLabelFlex}>
//                         <Image
//                           style={[styles.icon, {tintColor: colors.black}]}
//                           source={item.icon}
//                         />
//                         <Text
//                           style={[
//                             styles.menuTitle,
//                             item.name === 'Logout' && {
//                               color: colors.black,
//                               fontSize: 16,
//                               // fontWeight: 'bold',
//                             },
//                           ]}>
//                           {'Logout'}
//                         </Text>
//                       </View>
//                     );
//                   }
//                 } else {
//                   return (
//                     <View
//                       style={{
//                         marginHorizontal: -20,
//                         marginRight: -50,
//                         flexDirection: 'row',
//                         width: 300,
//                         alignItems: 'center',
//                       }}>
//                       <Text style={{marginLeft: 10}}>
//                         <Icon
//                           name={item.icon}
//                           color={colors.gray}
//                           size={22}
//                           type="ionicon"
//                         />
//                       </Text>
//                       <View
//                         style={{
//                           flexDirection: 'row',
//                           width: 230,
//                           justifyContent: 'space-between',
//                           alignItems: 'center',
//                         }}>
//                         <Text
//                           style={[styles.h6, {marginLeft: 10, fontSize: 13}]}>
//                           {item.name}
//                         </Text>
//                         <Text style={styles.arrowIconView}>
//                           <Icon
//                             name="chevron-forward-outline"
//                             size={22}
//                             type="ionicon"
//                             color="grey"
//                             //   style={{left: 5, top: 3}}
//                           />
//                         </Text>
//                       </View>
//                     </View>
//                   );
//                 }
//               }}
//               onPress={() => {
//                 if (item.name === 'Logout') {
//                   if (props.profile) {
//                     props.logout();
//                   } else {
//                     props.skipNow(true);
//                   }
//                 } else {
//                   if (item.screen == 'Shops' || item.screen == 'Services') {
//                     props.navigation.navigate(item.screen, {
//                       storeType: item.screen == 'Services' ? 'service' : 'shop',
//                     });
//                   } else {
//                     props.navigation.navigate(item.screen);
//                   }
//                 }
//               }}
//             />
//             <View style={styles.divider} />
//           </>
//         ))}
//       </DrawerContentScrollView>
//       <View style={{alignSelf: 'center', alignItems: 'center'}}>
//         <Text style={[styles.h6, {}]}>Follow us On</Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginTop: 5,
//             width: '50%',
//           }}>
//             <Icon name="logo-facebook" color="grey" type="ionicon" onPress={()=>Linking.openURL('http://facebook.com/estatedekho')} />
//           <Icon name="logo-instagram" color="grey" type="ionicon" onPress={()=>Linking.openURL('http://instagram.com/_u/estatedekho')} />
//           <Icon name="logo-linkedin" type="ionicon" color="grey" onPress={()=>Linking.openURL('http://linkedin.com/company/estatedekho')} />
//           <Icon name="logo-youtube" type="ionicon" color="grey" onPress={()=>Linking.openURL('https://www.youtube.com/channel/UCc8D-HkFc1ZUQFi-qCmaLdA')} />
//         </View>
//       </View>
//       <Text
//         style={
//           styles.appVersionText
//         }>{`App version: ${DeviceInfo.getVersion()}`}</Text>
//     </>
//     </SafeAreaView>
//   );
// }

function Navigator(props) {
  console.warn('ppppp', props);
  if (!props.authToken && props.skip) {
    const Stack = createStackNavigator();
    if (props.userType === 'Student') {
      return (
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OtpVerification" component={OtpVerification} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SelectCategory" component={SelectCategory} />
          <Stack.Screen
            name="SelectSubCategory"
            component={SelectSubCategory}
          />
          <Stack.Screen name="Home" component={TabNavigator} />
          <Stack.Screen
            name="ParticularSubjectClass"
            component={ParticularSubjectClass}
          />
          <Stack.Screen name="SavedVideos" component={SavedVideos} />
          <Stack.Screen name="FreeVideos" component={FreeVideos} />
          <Stack.Screen name="ParticularVideo" component={ParticularVideo} />
          <Stack.Screen name="TestInstructions" component={TestInstructions} />
          <Stack.Screen name="TestQuestions" component={TestQuestions} />
          <Stack.Screen name="Notes" component={Notes} />
          <Stack.Screen name="Syllabus" component={Syllabus} />
          <Stack.Screen name="SubTopics" component={SubTopics} />
          <Stack.Screen name="TopicLists" component={TopicLists} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="HelpandSupport" component={HelpandSupport} />
          <Stack.Screen name="MyLearnings" component={MyLearnings} />
          <Stack.Screen name="TestReview" component={TestReview} />
          <Stack.Screen name="LiveClass" component={LiveClass} />
          <Stack.Screen name="Subscription" component={Subscription} />
          <Stack.Screen name="ChatMessage" component={ChatMessage} />
          <Stack.Screen name="VideoRateReview" component={VideoRateReview} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Live" component={Live} />
          <Stack.Screen name="MockTest" component={MockTest} />
          <Stack.Screen name="SubjectWiseTest" component={SubjectWiseTest} />
          <Stack.Screen name="UpcomingLive" component={UpcomingLive} />
          <Stack.Screen name="CompleteProfile" component={CompleteProfile} />

          {/* <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen
          name="SignupOtpVerification"
          component={SignupOtpVerification}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignupDetails" component={SignupDetails} />
        <Stack.Screen name="Skip" component={Skip} />
        <Stack.Screen name="LookingFor" component={LookingFor} />
        <Stack.Screen name="SelectCity" component={SelectCity} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} />
        <Stack.Screen
          name="SelectPropertyType"
          component={SelectPropertyType}
        />
        <Stack.Screen name="Home" component={TabNavigator} /> */}
        </Stack.Navigator>
      );
    } else if(props.userType === 'Teacher') {
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={TeacherLogin} />
        </Stack.Navigator>
      );
    }
    else{
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          {/* <Stack.Screen name="Signup" component={Signup} /> */}
        </Stack.Navigator>
      );
      
    }
  }
  return (
    <Splash />
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
