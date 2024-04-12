import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const List = ({navigation}) => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <ScrollView style={styles.scrollStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AccessibleBool');
          }}
          style={styles.touchListStyle}>
          <Text style={{fontSize: 18}}>Accessibile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AscLabel');
          }}
          style={styles.touchListStyle}>
          <Text style={{fontSize: 18}}>Accessibility Label</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AccessibleHint');
          }}
          style={styles.touchListStyle}>
          <Text style={{fontSize: 18}}>Accessiblility Hint</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AccessibleRole');
          }}
          style={styles.touchListStyle}>
          <Text style={{fontSize: 18}}>Accessiblility Role</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AccessibilityAnnouncement');
          }}
          style={styles.touchListStyle}>
          <Text style={{fontSize: 18}}>Accessibility Announcement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AccessibilityInfoScreen');
          }}
          style={styles.touchListStyle}>
          <Text style={{fontSize: 18}}>Accessibility Info</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touchListStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'azure',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  containerStyle: {
    backgroundColor: 'aquamarine',
    flex: 1,
  },
  scrollStyle: {flexGrow: 1, paddingVertical: 10},
});

export default List;
