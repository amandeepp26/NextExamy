import {View, Text, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../styles';
import {Icon} from 'react-native-elements';
import styles from '../../navigation/styles';
import Header from '../../components/Header';

export default function AboutUs({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={styles.container}>
        {/* Header */}
        <Header title={'About Us'} navigation={navigation}/>
        <ScrollView>
        <View
          style={{
            backgroundColor: colors.white,
            paddingTop: 5,
            paddingBottom:15,
            flex: 1,
          }}>
            <Text style={[styles.h6, { lineHeight: 22, paddingHorizontal: 10 }]}>
          Welcome to NextExamy!{'\n'}
          {'\n'}
          At NextExamy, we are dedicated to transforming the way students learn and prepare for their exams. Our mission is to provide an innovative and comprehensive platform that empowers students to achieve their academic goals and excel in their exams.{'\n'}
          {'\n'}
          NextExamy is designed to cater to students of all levels, whether you're in high school, college, or pursuing professional certifications. We understand the challenges students face in today's fast-paced educational landscape, and we aim to make the learning process efficient, engaging, and enjoyable.{'\n'}
          {'\n'}
          Key Features of NextExamy:{'\n'}
          {'\n'}
          1. Extensive Study Resources: Gain access to a vast library of study materials, including textbooks, e-books, lecture notes, practice exams, and interactive quizzes. Our collection covers a wide range of subjects and topics, ensuring that you have the resources you need to succeed.{'\n'}
          {'\n'}
          2. Personalized Learning Experience: We believe that every student is unique, which is why NextExamy offers personalized learning paths tailored to your individual needs and learning style. Our intelligent algorithms analyze your performance and provide recommendations for targeted study materials and practice exercises to optimize your learning journey.{'\n'}
          {'\n'}
          3. Interactive Study Tools: Engage in interactive learning experiences with our comprehensive set of study tools. Take advantage of features such as flashcards, educational videos, concept maps, and virtual simulations to deepen your understanding of complex concepts.{'\n'}
          {'\n'}
          4. Exam Preparation Made Easy: Prepare for exams with confidence using NextExamy's exam preparation resources. Access a wide range of past papers, mock tests, and exam-specific tips and strategies. Track your progress, identify areas for improvement, and enhance your exam performance.{'\n'}
          {'\n'}
          5. Collaborative Learning Community: Connect and collaborate with fellow students through our vibrant learning community. Participate in discussion forums, join study groups, and share knowledge and insights. Engage in healthy competition through leaderboards and challenge your peers to excel academically.{'\n'}
          {'\n'}
          6. Seamless Mobile Experience: NextExamy is built for mobile, allowing you to learn anytime, anywhere. Our user-friendly interface ensures a seamless experience across devices, enabling you to make the most of your study time on the go.{'\n'}
          {'\n'}
          7. Continuous Learning Support: Our commitment to your success extends beyond the platform. We provide regular updates, educational resources, and expert advice to keep you informed and motivated throughout your learning journey.{'\n'}
          {'\n'}
          Join NextExamy today and unlock your full academic potential. Embrace a new era of learning that is dynamic, interactive, and tailored to your needs. Let us be your trusted companion in your quest for knowledge and excellence.{'\n'}
          {'\n'}
          Start your learning journey with NextExamy and embark on a path to academic success!
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
