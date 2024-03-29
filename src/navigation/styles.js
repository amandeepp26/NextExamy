import { StyleSheet } from 'react-native';
import { fonts, dimens, colors } from '../styles';

export default StyleSheet.create({
  menuTitle: {
    marginLeft: 20,
    color: '#0B0B0B',
    fontFamily: fonts.primarySemiBold,
    fontSize: 12,
    textAlign: 'center',
  },
  container:{
    flex:1,
    backgroundColor:colors.lightGray
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: -15,
    flexDirection: 'row',
  },
  iconView: {
    alignItems: 'center',
    padding: 10,
    // marginLeft:10,
    left: Platform.OS == 'ios' ? 15 : 8,
    borderRadius: 20,
    marginTop: Platform.OS == 'ios' ? 20 : 0,
  },

  arrowIconView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:10
  },

  userName: {
    color: colors.white,
    fontSize: 13,
    fontFamily: fonts.primarySemiBold,
  },
  divider: {
    borderBottomColor: '#00000019',
    borderBottomWidth: 0.5,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    width: '100%',
    height: dimens.width * 0.3,
    backgroundColor: colors.blue,
    marginTop: -10,
  },
  userLogo: {
    width: dimens.width * 0.2,
    height: dimens.width * 0.2,
    borderRadius: dimens.width * 0.2 / 2,
  },
  icon: {
    width: dimens.width * 0.05,
    height: dimens.width * 0.05,
    resizeMode: 'contain',
  },
  appVersionText: {
    fontFamily: fonts.primarySemiBold,
    fontSize: 10,
    padding: 5,
    alignSelf: 'flex-end',
    color: colors.blue,
  },
  tabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical:5,
    flexDirection:'row',
    borderRadius:20
  },
  tabBarIcon: {
    width: 20,
    height: 20,
    tintColor:colors.gray
  },
  tabBarIconFocused: {
    width: 21,
    height: 21,
    tintColor: colors.primaryBlue,
  },
  
  h1: {
    color: colors.black,
    fontSize: 26,
    fontWeight:"bold",
    fontFamily: fonts.primaryBold
  },
  h2: {
    color: colors.black,
    fontSize: 24,
    fontFamily: fonts.primarySemiBold
  },
  h3: {
    color: colors.black,
    fontSize: 20,
    fontFamily: fonts.primarySemiBold
  },
  h4: {
    color: colors.black,
    fontSize: 18,
    fontFamily: fonts.primarySemiBold
  },
  h5: {
    color: colors.black,
    fontSize: 17,
    fontFamily: fonts.primaryBold
  },
  h6: {
    color: colors.black,
    fontSize: 15,
    fontFamily: fonts.primaryMedium,
   
  },
  p: {
    fontSize: 13,
    color: colors.gray,
    fontFamily: fonts.primaryRegular
  },
});