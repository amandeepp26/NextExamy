// import Home from '../home/Home';
// import Search from '../search/Search';
// import Saved from '../saved/Saved';
// import Account from '../account/Account'
// import NavigatorView from './RootNavigation' 
// import SearchLocality from '../search/SearchLocality';

import Chat from "../chat/Chat";
import Home from "../home/Home";
import Splash from "../Splash/Splash";
import Tests from "../Test/Tests";
import Videos from "../video/Videos";


const homeIcon = require('@images/home.png');
const chatIcon = require('@images/chat.png');
const videoIcon = require('@images/video.png');
const testIcon = require('@images/test.png');




const tabNavigationData = [
  {
    name: 'Home',
    component: Home,
    icon: homeIcon,
  },
  {
    name:"Chat",
    component: Chat,
    icon: chatIcon,
  },
  {
    name:"Video",
    component:Videos,
    icon: videoIcon,
  },
  {
    name:"Tests",
    component:Tests,
    icon: testIcon,
  }
  
];

export default tabNavigationData;