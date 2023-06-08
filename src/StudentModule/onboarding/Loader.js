import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { colors } from '../../styles';

const SkeletonComponent = () => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
       
       <View style={styles.titleSkeleton} />
            <View style={styles.descriptionSkeleton} /> 
    <Pressable style={styles.container}>
      <View style={styles.card}>
        <SkeletonPlaceholder>
          <View style={styles.imageContainer} />
        </SkeletonPlaceholder>
        <View style={styles.contentContainer}>
          <SkeletonPlaceholder>
            <View style={styles.titleSkeleton} />
            <View style={styles.descriptionSkeleton} />
          </SkeletonPlaceholder>
        </View>
      </View>
    </Pressable>
    
    <Pressable style={styles.container}>
      <View style={styles.card}>
        <SkeletonPlaceholder>
          <View style={styles.imageContainer} />
        </SkeletonPlaceholder>
        <View style={styles.contentContainer}>
          <SkeletonPlaceholder>
            <View style={styles.titleSkeleton} />
            <View style={styles.descriptionSkeleton} />
          </SkeletonPlaceholder>
        </View>
      </View>
    </Pressable>
    
    <Pressable style={styles.container}>
      <View style={styles.card}>
        <SkeletonPlaceholder>
          <View style={styles.imageContainer} />
        </SkeletonPlaceholder>
        <View style={styles.contentContainer}>
          <SkeletonPlaceholder>
            <View style={styles.titleSkeleton} />
            <View style={styles.descriptionSkeleton} />
          </SkeletonPlaceholder>
        </View>
      </View>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 10,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 5,
    padding: 10,
    height: 85,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  imageContainer: {
    width: '25%',
    height: 90,
    borderRadius: 8,
  },
  contentContainer: {
    marginLeft: -15,
    width: '75%',
    padding: 5,
  },
  titleSkeleton: {
    width: '70%',
    height: 16,
    borderRadius: 4,
    marginBottom: 5,
  },
  descriptionSkeleton: {
    width: '100%',
    height: 14,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default SkeletonComponent;
