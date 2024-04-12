import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from './src/List';
import AscLabel from './src/Details/AscLabel';
import AccessibleBool from './src/Details/AccessibleBool';
import AccessibleHint from './src/Details/AccessibleHint';
import AccessibleRole from './src/Details/AccessibleRole';
import AccessibilityAnnouncement from './src/Details/AccessibilityAnnouncement';
import AccessibilityInfoScreen from './src/Details/AccessibilityInfoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={List}
          options={{title: 'Accessibility'}}
        />
        <Stack.Screen
          name="AscLabel"
          component={AscLabel}
          options={{title: 'Accessibility Label', headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="AccessibleBool"
          component={AccessibleBool}
          options={{title: 'Accessibile', headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="AccessibleHint"
          component={AccessibleHint}
          options={{title: 'Accessible Hint', headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="AccessibleRole"
          component={AccessibleRole}
          options={{title: 'Accessible Role', headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="AccessibilityAnnouncement"
          component={AccessibilityAnnouncement}
          options={{
            title: 'Accessibility Announcement',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="AccessibilityInfoScreen"
          component={AccessibilityInfoScreen}
          options={{
            title: 'Accessibility Info',
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
