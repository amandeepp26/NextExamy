import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { colors } from '../../styles';

const SkeletonComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: colors.white }}>
        <Text style={[styles.h3, { padding: 20 }]}>Tests</Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: colors.white,
          marginTop: 5,
          marginBottom: 50,
        }}>
        <View
          style={{
            marginTop: 10,
            backgroundColor: colors.white,
            paddingBottom: 20,
          }}>
          <View style={{ paddingLeft: 12 }}>
            <Text
              style={[
                styles.h3,
                { fontWeight: '700', color: colors.primaryBlue, marginTop: 10,marginLeft:0 },
              ]}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item width={150} height={25} borderRadius={4} />
              </SkeletonPlaceholder>
            </Text>
            <Text style={[styles.h4, { fontWeight: '700',marginTop:10 }]}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item width={150} height={25} borderRadius={4} />
              </SkeletonPlaceholder>
            </Text>
            {/* subjects */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              {/* Placeholder for subjects */}
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={120}
                  height={32}
                  borderRadius={25}
                  marginRight={8}
                />
              </SkeletonPlaceholder>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={120}
                  height={32}
                  borderRadius={25}
                  marginRight={8}
                />
              </SkeletonPlaceholder>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={120}
                  height={32}
                  borderRadius={25}
                  marginRight={8}
                />
              </SkeletonPlaceholder>
            </ScrollView>
          </View>
          {/* Placeholder for topics */}
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={'95%'}
              height={90}
              borderRadius={5}
              marginTop={10}
              marginBottom={10}
              alignSelf='center'
            />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
              width={'95%'}
              height={90}
              borderRadius={5}
              marginTop={10}
              marginBottom={10}
              alignSelf='center'
            />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
              width={'95%'}
              height={90}
              borderRadius={5}
              marginTop={10}
              marginBottom={10}
              alignSelf='center'
            />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
              width={'95%'}
              height={90}
              borderRadius={5}
              marginTop={10}
              marginBottom={10}
              alignSelf='center'
            />
          </SkeletonPlaceholder>
          <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
              width={'95%'}
              height={90}
              borderRadius={5}
              marginTop={10}
              marginBottom={10}
              alignSelf='center'
            />
          </SkeletonPlaceholder>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  h3: {
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    color: colors.black,
  },
  h4: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
  p: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
});

export default SkeletonComponent;
