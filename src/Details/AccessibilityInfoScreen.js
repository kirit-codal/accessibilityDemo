import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  AccessibilityInfo,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const AccessibilityInfoScreen = () => {
  const [isBoldTextEnabled, setIsBoldTextEnabled] = useState(false);
  const [isInvertColorsEnabled, setIsInvertColorsEnabled] = useState(false);

  useEffect(() => {
    const getAccessibilityInfo = async () => {
      // whenever bold text is currently enabled.
      const boldText = await AccessibilityInfo.isBoldTextEnabled();
      setIsBoldTextEnabled(boldText);

      // whenever invert colors is currently enabled.
      const isInvertColorsEnabled =
        await AccessibilityInfo.isInvertColorsEnabled();
      setIsInvertColorsEnabled(isInvertColorsEnabled);
    };

    getAccessibilityInfo();
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
            Whenever bold text is currently enabled/disable.
          </Text>
        </Text>

        <View style={styles.containerText}>
          <Text>Bold Text</Text>
          <Text>{isBoldTextEnabled.toString()}</Text>
        </View>

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
            Whenever invert colors is currently enabled.
          </Text>
        </Text>

        <View style={styles.containerText}>
          <Text>Inverted Color</Text>
          <Text>{isInvertColorsEnabled.toString()}</Text>
        </View>
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
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'cyan',
    marginHorizontal: 20,
    marginTop: 20,
  },
  lablview: {marginHorizontal: 20, paddingVertical: 10},
});

export default AccessibilityInfoScreen;
