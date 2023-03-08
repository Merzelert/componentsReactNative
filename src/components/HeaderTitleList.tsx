import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    title: string;
}

export const HeaderTitleList = ({title}: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 10}}>
            <Text style={{
                ...styles.title,
                color: '#5856D6',
                }}>{title}</Text>
        </View>
    );
};
