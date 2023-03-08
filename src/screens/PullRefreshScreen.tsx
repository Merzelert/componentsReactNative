import React, { useState } from 'react';
import { RefreshControl, ScrollView, View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

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
                    tintColor="#5856D6" // iOS
                    title="Refreshing..." // iOS
                    titleColor="#5856D6" // iOS
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to Refresh" />
                {
                    data && <Text style={styles.title}>{data}</Text>
                }
            </View>
        </ScrollView>
    );
};
