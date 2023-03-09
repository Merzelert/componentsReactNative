import React, { useContext } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { TouchableOpacity, View, Text } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ThemeChangeScreen = () => {

    const { setLightTheme, setDarkTheme, theme:{colors}  } = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Theme Change" />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={setLightTheme}
                style={{
                    backgroundColor: colors.primary,
                    height: 50,
                    width: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center',
                    }}
                >Light</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={setDarkTheme}
                style={{
                    backgroundColor: colors.primary,
                    height: 50,
                    width: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center',
                    }}
                >Dark</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};
