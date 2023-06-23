import {View, Text, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../styles';
import {Icon} from 'react-native-elements';
import styles from '../../navigation/styles';

export default function TermsandCondition({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={style.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              onPress={() => navigation.goBack()}
              name="chevron-left"
              type="ionicons"
              size={25}
            />
            <Text style={styles.h4}>Terms and Conditions</Text>
          </View>
        </View>
        <ScrollView>
        <View
          style={{
            backgroundColor: colors.white,
            marginTop: 5,
            paddingBottom:15,
            flex: 1,
          }}>
          <Text style={[styles.h6, {lineHeight: 22, paddingHorizontal: 10}]}>
            Terms and Conditions{'\n'}
            {'\n'}
            Please read these terms and conditions carefully before using
            NextExamy mobile app. By accessing or using the app, you agree to be
            bound by these terms and conditions. If you do not agree with any
            part of these terms and conditions, please refrain from using the
            app.{'\n'}
            {'\n'}
            1. Account Registration: In order to access certain features of
            NextExamy, you may need to create an account. You are responsible
            for maintaining the confidentiality of your account information and
            agree to provide accurate and up-to-date details during
            registration.{'\n'}
            {'\n'}
            2. User Responsibilities: You are solely responsible for your use of
            NextExamy and any content you post or share. You agree to use the
            app for lawful purposes and not to engage in any activities that may
            violate applicable laws or infringe upon the rights of others.{'\n'}
            {'\n'}
            3. Intellectual Property: All content and materials available on
            NextExamy, including but not limited to text, graphics, logos,
            images, videos, and software, are the property of NextExamy or its
            licensors. You may not modify, reproduce, distribute, or create
            derivative works of such content without explicit permission.{'\n'}
            {'\n'}
            4. Privacy and Data Security: NextExamy respects your privacy and
            implements measures to protect your personal information. By using
            the app, you acknowledge and agree to the collection, storage, and
            use of your data as outlined in our Privacy Policy.{'\n'}
            {'\n'}
            5. Third-Party Links and Content: NextExamy may contain links to
            third-party websites or resources. We are not responsible for the
            availability, accuracy, or content of such external sites. Any
            reliance on third-party content is at your own risk.{'\n'}
            {'\n'}
            6. Limitation of Liability: NextExamy strives to provide accurate
            and reliable information, but we make no warranties or
            representations regarding the completeness, accuracy, or reliability
            of the content. Your use of the app is at your own risk.{'\n'}
            {'\n'}
            7. Modification of Terms: NextExamy reserves the right to modify
            these terms and conditions at any time. Any changes will be
            effective immediately upon posting. Continued use of the app after
            changes constitutes your acceptance of the modified terms.{'\n'}
            {'\n'}
            Please review the full Terms and Conditions on our website for
            detailed information. If you have any questions or concerns, please
            contact us at support@nextexamy.com.{'\n'}
            {'\n'}
            Thank you for choosing NextExamy. Happy learning!
          </Text>
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
});
