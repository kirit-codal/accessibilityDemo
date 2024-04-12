import {
  View,
  Text,
  SafeAreaView,
  Button,
  AccessibilityInfo,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [isBoldTextEnabled, setIsBoldTextEnabled] = useState(false);
  const [isGrayscaleEnabled, setIsGrayscaleEnabled] = useState(false);
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

      // whenever invert colors is currently enabled.
      const a1 = await AccessibilityInfo.isScreenReaderEnabled();
      console.log('---- a1', a1);
    };

    getAccessibilityInfo();
  }, []);

  console.log('isBoldTextEnabled', isBoldTextEnabled);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.lablview}>
          <Text>Bold Text</Text>
        </View>

        <View style={styles.containerText}>
          <Text>Bold Text</Text>
          <Text>{isBoldTextEnabled.toString()}</Text>
        </View>
        <View style={styles.lablview}>
          <Text>
            Samrt Invert use the dark color style except for image, media.
          </Text>
        </View>

        <View style={styles.containerText}>
          <Text>Samrt Invert</Text>
          <Text>{isInvertColorsEnabled.toString()}</Text>
        </View>
      </ScrollView>

      {/* <TouchableOpacity
        accessible={true}
        accessibilityLabel="Simple text"
        accessibilityRole="button"
        onPress={() => {
          console.log('Press me');
        }}>
        <View>
          <Text>Press me!</Text>
        </View>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'cyan',
    marginHorizontal: 20,
  },
  lablview: {marginHorizontal: 20, paddingVertical: 10},
});
