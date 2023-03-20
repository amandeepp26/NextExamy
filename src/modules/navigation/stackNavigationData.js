import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { colors, fonts } from '../../styles';

import TabNavigator from './MainTabNavigator';

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

const StackNavigationData = [
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
  
  // {
  //   name:"Notifications",
  //   component:Notifications
  // }
  
]

export default StackNavigationData;
