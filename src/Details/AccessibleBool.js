import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const AccessibleBool = () => {
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
            The default value of the accessible is true for each element.
          </Text>
        </Text>

        <Text accessible={false} style={styles.codeblock}>
          {`<TouchableOpacity
          accessible={false}>
          <Text style={styles.buttonText}>Press me!</Text>
        </TouchableOpacity>`}
        </Text>

        {/* code */}

        <TouchableOpacity
          accessible={false}
          accessibilityLabel="accessibilityLabel">
          <Text style={styles.buttonText}>Press me!</Text>
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

export default AccessibleBool;
