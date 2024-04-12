import {
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  AccessibilityInfo,
} from 'react-native';
import React, {useEffect} from 'react';

const AccessibilityAnnouncement = () => {
  useEffect(() => {
    AccessibilityInfo.announceForAccessibilityWithOptions(
      'Appt announcement',
      true,
    );
  }, []);
  return (
    <SafeAreaView style={styles.containerStyle}>
      <ScrollView style={styles.scrollStyle}>
        <Text
          accessible={false}
          style={{
            fontSize: 30,
          }}>
          {`\u2022`}
          <Text
            style={{
              fontSize: 18,
            }}>
            Post a message by announceForAccessibility. it will read the message
            aloud.
          </Text>
        </Text>

        <Text accessible={false} style={styles.codeblock}>
          {`AccessibilityInfo.announceForAccessibility('Appt announcement');`}
        </Text>
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
  scrollStyle: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  codeblock: {
    marginVertical: 10,
    padding: 10,
    color: 'rgba(82, 145, 248, 1)',
    fontFamily: 'name-of-monospace-font',
    borderColor: 'rgba(82, 145, 248, 1)',
    backgroundColor: 'rgba(26,26,27,1)',
  },
});

export default AccessibilityAnnouncement;
