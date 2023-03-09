import React, { useContext, useState } from 'react';
import { RefreshControl, ScrollView, View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const { theme: { colors } } = useContext(ThemeContext);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Finishing refresh');
            setRefreshing(false);
            setData('Data from server');
        }, 3000);
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={50} // iOS
                    progressBackgroundColor="red" // iOS
                    colors={['white', 'red', 'orange']} // Android
                    tintColor= {colors.text} // iOS
                    title="Refreshing..." // iOS
                    titleColor={colors.text} // iOS
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to Refresh" />
                {
                    data && <Text style={{...styles.title, color: colors.text}}>{data}</Text>
                }
            </View>
        </ScrollView>
    );
};
