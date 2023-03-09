import React, { useContext } from 'react';
import { TextInput, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {

    const { form, onChange, isSub } = useForm({
        name: '',
        email: '',
        phone: '',
        isSub: false,
    });

    const { theme: { colors, dividerColor } } = useContext(ThemeContext);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={styles.globalMargin}>
                    <HeaderTitle title="Text Inputs" />

                    <TextInput
                        style={{ ...stylesScreen.inputStyle, borderColor: dividerColor, color: colors.text }}
                        placeholder="Name"
                        placeholderTextColor={dividerColor}
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'name')}
                    />

                    <TextInput
                        style={{ ...stylesScreen.inputStyle, borderColor: dividerColor, color: colors.text }} placeholder="Email"
                        placeholderTextColor={dividerColor}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={(value) => onChange(value, 'email')}
                    />

                    <TextInput
                        style={{ ...stylesScreen.inputStyle, borderColor: dividerColor, color: colors.text }} placeholder="Phone number"
                        placeholderTextColor={dividerColor}
                        keyboardType="phone-pad"
                        onChangeText={(value) => onChange(value, 'phone')}
                    />

                    <View style={stylesScreen.switchRow}>
                        <Text style={{
                            ...stylesScreen.switchText,
                            color: colors.text,
                            }}>isActive</Text>
                        <CustomSwitch isOn={isSub} onChange={(value: any) => onChange(value, 'isSub')} />
                    </View>
                    <Text style={{
                        ...stylesScreen.inputText,
                        color: colors.text,
                        }}>{JSON.stringify(form, null, 5)}</Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    inputText: {
        marginVertical: 20,
        fontSize: 20,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    switchText: {
        fontSize: 25,
    },
});
