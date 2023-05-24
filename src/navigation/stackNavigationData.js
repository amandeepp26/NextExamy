import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {colors, fonts} from '../styles';

import TabNavigator from './MainTabNavigator';
import ParticularSubjectClass from '../StudentModule/home/ParticularSubjectClass';
import SavedVideos from '../StudentModule/video/SavedVideos';
import FreeVideos from '../StudentModule/video/FreeVideos';
import ParticularVideo from '../StudentModule/video/ParticularVideo';
import TestQuestions from '../StudentModule/Test/TestQuestions';
import Notes from '../StudentModule/notes/Notes';
import Syllabus from '../StudentModule/syllabus/Syllabus';
import SubTopics from '../StudentModule/syllabus/SubTopics';
import TopicLists from '../StudentModule/Topics/TopicLists';
import EditProfile from '../StudentModule/Account/EditProfile';
import Subscription from '../StudentModule/home/Subscription';
import ChatMessage from '../StudentModule/chat/ChatMessage';
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
import Account from '../StudentModule/Account/Account';

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

const logo = require('@images/logoIcon.png');

const StackNavigationData = [
  {
    name: 'Home',
    component: TabNavigator,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'ParticularSubjectClass',
    component: ParticularSubjectClass,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'SavedVideos',
    component: SavedVideos,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'FreeVideos',
    component: FreeVideos,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'ParticularVideo',
    component: ParticularVideo,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'TestInstructions',
    component: TestInstructions,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'TestQuestions',
    component: TestQuestions,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Notes',
    component: Notes,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Syllabus',
    component: Syllabus,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'SubTopics',
    component: SubTopics,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'TopicLists',
    component: TopicLists,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Account',
    component: Account,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'EditProfile',
    component: EditProfile,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Notification',
    component: Notification,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'HelpandSupport',
    component: HelpandSupport,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'MyLearnings',
    component: MyLearnings,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'TestReview',
    component: TestReview,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'LiveClass',
    component: LiveClass,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Subscription',
    component: Subscription,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'ChatMessage',
    component: ChatMessage,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'VideoRateReview',
    component: VideoRateReview,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Search',
    component: Search,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'Live',
    component: Live,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'MockTest',
    component: MockTest,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'SubjectWiseTest',
    component: SubjectWiseTest,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'UpcomingLive',
    component: UpcomingLive,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
  {
    name: 'CompleteProfile',
    component: CompleteProfile,
    headerLeft: null,
    headerBackground: {source: logo},
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.white,
      fontSize: 18,
    },
  },
];

export default StackNavigationData;
