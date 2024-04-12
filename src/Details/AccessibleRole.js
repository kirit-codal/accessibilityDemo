import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
  Linking,
  View,
} from 'react-native';
import React from 'react';

const AccessibleRole = () => {
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
            An accessibility role helps users to understand the purpose of
            elements on the screen.
          </Text>
        </Text>

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
            There is different available roles include button, header, link and
            image, etc.
          </Text>
        </Text>

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
            The screen reader announces the role of elements. if the role is
            button that an action will be performed on activation.
          </Text>
        </Text>

        <Text accessible={false} style={styles.codeblock}>
          {`<TouchableOpacity
          accessible={true}
          accessibilityLabel="Go back"
          accessibilityRole="button"
          onPress={() => {
            console.log('Navigates to the previous screen');
          }}
        />`}
        </Text>

        {/* code */}

        {/* <TouchableOpacity
          accessible={true}
          accessibilityLabel="Go back"
          accessibilityRole="button">
          <Text accessible={false} style={styles.buttonText}>
            Go back
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          accessible={true}
          accessibilityRole="button"
          onPress={async () => {
            const url = 'https://www.google.com';
            const supported = await Linking.canOpenURL(url);
            if (supported) {
              await Linking.openURL(url);
            }
          }}
          accessibilityLabel="Double tap to open"
          accessibilityHint="External link">
          <Text>Appt</Text>
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

export default AccessibleRole;
