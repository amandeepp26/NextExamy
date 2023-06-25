import {View, Text, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../styles';
import {Icon} from 'react-native-elements';
import styles from '../../navigation/styles';
import moment from 'moment';
import Header from '../../components/Header';

export default function PrivacyPolicy({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}

        <Header title={'Privacy Policy'} navigation={navigation}/>

        <ScrollView>
        <View
          style={{
            backgroundColor: colors.white,
            paddingTop: 5,
            paddingBottom:15,
            flex: 1,
          }}>
          <Text style={[styles.h6, {lineHeight: 22, paddingHorizontal: 10}]}>
            Privacy Policy{'\n'}
            {'\n'}
            Effective Date: {moment().format('DD/MMM/YYYY')}{'\n'}
            {'\n'}
            At NextExamy, we prioritize the privacy and security of our users.
            This Privacy Policy outlines how we collect, use, and protect your
            personal information when you use the NextExamy mobile app. By using
            the app, you consent to the practices described in this policy.
            {'\n'}
            {'\n'}
            1. Information Collection: We may collect personal information such
            as your name, email address, and educational background when you
            create an account or voluntarily provide it. We also collect usage
            data and analytics to improve the app's functionality and user
            experience.{'\n'}
            {'\n'}
            2. Use of Information: The information we collect is used to
            personalize your learning experience, provide relevant content and
            recommendations, and improve our services. We may also use your
            information to communicate important updates and announcements.
            {'\n'}
            {'\n'}
            3. Data Sharing: We do not sell, rent, or disclose your personal
            information to third parties without your consent, except as
            required by law or to provide you with requested services. We may
            share anonymized and aggregated data for statistical analysis and
            research purposes.{'\n'}
            {'\n'}
            4. Data Security: We employ industry-standard security measures to
            protect your personal information from unauthorized access,
            alteration, or disclosure. However, please note that no data
            transmission over the internet or electronic storage method can
            guarantee absolute security.{'\n'}
            {'\n'}
            5. Cookies and Tracking Technologies: NextExamy may use cookies and
            similar tracking technologies to enhance your app experience and
            collect information about your usage patterns. You can manage your
            cookie preferences through your device settings.{'\n'}
            {'\n'}
            6. Third-Party Services: NextExamy may integrate with third-party
            services or include links to external websites. We are not
            responsible for the privacy practices or content of such third
            parties. We recommend reviewing their respective privacy policies.
            {'\n'}
            {'\n'}
            7. Children's Privacy: NextExamy does not knowingly collect personal
            information from children under the age of 13. If you believe that
            your child has provided us with their information without your
            consent, please contact us immediately.{'\n'}
            {'\n'}
            8. Changes to the Privacy Policy: NextExamy reserves the right to
            update or modify this Privacy Policy at any time. We will notify you
            of significant changes through the app or other means. Continued use
            of the app after changes constitutes your acceptance of the updated
            policy.{'\n'}
            {'\n'}
            For more information about our privacy practices, including how to
            exercise your rights and contact us with questions or concerns,
            please review the full Privacy Policy on our website.{'\n'}
            {'\n'}
            Thank you for trusting NextExamy with your personal information. We
            are committed to protecting your privacy and providing a secure
            learning environment.{'\n'}
            {'\n'}
            If you have any questions or need further assistance, please contact
            us at privacy@nextexamy.com.{'\n'}
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
