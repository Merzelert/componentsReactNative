import React from 'react';
import { View, Button, Alert } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            'Title',
            'This is the message',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel'),
                    style: 'destructive',
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK'),
                },
            ],
        );
    };

    const showPrompt = () => {
        Alert.prompt(
            'Title',
            'This is the message',
            (text: string) => console.log('Text:', text),
            'plain-text',
        );
    };

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />

            <Button
                title="Show Alert"
                onPress={showAlert}
            />

            <Button
                title="Show Prompt"
                onPress={showPrompt}
            />
        </View>
    );
};
