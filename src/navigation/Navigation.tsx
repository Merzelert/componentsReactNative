import React, { useContext } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullRefreshScreen } from '../screens/PullRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlideScreen } from '../screens/SlideScreen';
import { ThemeChangeScreen } from '../screens/ThemeChangeScreen';

const Stack = createStackNavigator();

export const Navigation = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.colors.background,
        }}>
            <NavigationContainer
                theme={theme}
            >
                <Stack.Navigator
                    initialRouteName="HomeScreen"
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            //backgroundColor: 'white',
                        },
                    }}
                >
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
                    <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
                    <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
                    <Stack.Screen name="AlertScreen" component={AlertScreen} />
                    <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
                    <Stack.Screen name="PullRefreshScreen" component={PullRefreshScreen} />
                    <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
                    <Stack.Screen name="ModalScreen" component={ModalScreen} />
                    <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
                    <Stack.Screen name="SlideScreen" component={SlideScreen} />
                    <Stack.Screen name="ThemeChangeScreen" component={ThemeChangeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};
