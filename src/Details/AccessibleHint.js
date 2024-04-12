import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const AccessibleHint = ({navigation}) => {
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
            Accessibility hints are announced by the screen reader.
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
            Accessibility hints have an extra information of the element.
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
            Users can turn off/on accessibility hints.
          </Text>
        </Text>

        <Text accessible={false} style={styles.codeblock}>
          {`<TouchableOpacity
          accessible={true}
          accessibilityLabel="Go back"
          accessibilityHint="Navigates to the previous screen"
          onPress={() => {
            navigation.goBack();
          }}
        />`}
        </Text>

        {/* code */}

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          accessibilityLabel="Go back"
          accessibilityHint="Navigates to the previous screen">
          <Text style={styles.buttonText}>Go back</Text>
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

export default AccessibleHint;
