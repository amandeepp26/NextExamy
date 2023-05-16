// import Home from '../home/Home';
// import Search from '../search/Search';
// import Saved from '../saved/Saved';
// import Account from '../account/Account'
// import NavigatorView from './RootNavigation' 
// import SearchLocality from '../search/SearchLocality';

import TeacherTests from "../TeacherModule/Test/Tests";
import TeacherVideos from "../TeacherModule/Video/Videos";
import TeacherChat from "../TeacherModule/chat/Chat";
import Home from "../TeacherModule/home/Home";


const homeIcon = require('@images/home.png');
const chatIcon = require('@images/chat.png');
const videoIcon = require('@images/video.png');
const testIcon = require('@images/test.png');




const tabNavigationDataTeacherModule = [
  {
    name: 'HOME',
    component: Home,
    icon: homeIcon,
  },
  {
    name:"CHAT",
    component: TeacherChat,
    icon: chatIcon,
  },
  {
    name:"VIDEO",
    component:TeacherVideos,
    icon: videoIcon,
  },
  {
    name:"TESTS",
    component:TeacherTests,
    icon: testIcon,
  }
  
];

export default tabNavigationDataTeacherModule;