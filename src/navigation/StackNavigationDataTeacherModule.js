import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { colors, fonts } from '../styles';

import TabNavigator from './MainTabNavigator';
import UpcomingClassesList from '../TeacherModule/home/UpcomingClassesList';
import LiveClassesList from '../TeacherModule/LiveClass/LiveClassesList';
import TeacherChatMessage from '../TeacherModule/chat/ChatMessage';
import VideoTopicLists from '../TeacherModule/Video/VideoTopicList';

// const headerLeftComponent = (props) => {
//   return (
//     <TouchableOpacity
//       onPress={props.onPress}
//       style={{
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//       }}
//     >
//       <Image
//         source={require('../../../assets/images/settings.png')}
//         resizeMode="contain"
//         style={{
//           width: 22,
//           height: 22,
//           tintColor: '#1F1F1F',
//         }}
//       />
//     </TouchableOpacity>
//   )
// }

const logo = require('@images/logoIcon.png')

const StackNavigationDataTeacherModule = [
    {
      name: 'Home',
      component: TabNavigator,
      headerLeft: null,
      headerBackground: { source: logo },
      headerTitleStyle: {
        fontFamily: fonts.primaryRegular,
        color: colors.white,
        fontSize: 18,
      },
    },
    {
      name: 'UpcomingClassesList',
      component: UpcomingClassesList,
      headerLeft: null,
      headerBackground: { source: logo },
      headerTitleStyle: {
        fontFamily: fonts.primaryRegular,
        color: colors.white,
        fontSize: 18,
      },
    },
    {
      name: 'LiveClassesList',
      component: LiveClassesList,
      headerLeft: null,
      headerBackground: { source: logo },
      headerTitleStyle: {
        fontFamily: fonts.primaryRegular,
        color: colors.white,
        fontSize: 18,
      },
    },
    {
      name: 'ChatMessage',
      component: TeacherChatMessage,
      headerLeft: null,
      headerBackground: { source: logo },
      headerTitleStyle: {
        fontFamily: fonts.primaryRegular,
        color: colors.white,
        fontSize: 18,
      },
    },
    {
      name: 'VideoTopicList',
      component: VideoTopicLists,
      headerLeft: null,
      headerBackground: { source: logo },
      headerTitleStyle: {
        fontFamily: fonts.primaryRegular,
        color: colors.white,
        fontSize: 18,
      },
    },
  ];
  

export default StackNavigationDataTeacherModule;
