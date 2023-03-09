/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { View } from 'react-native';
import { FadeInimage } from '../components/FadeInimage';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 10; i++) {
            newArray[i] = numbers.length + i;
        }
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 300);
    };

    const renderItem = (item: number) => {
        return (
            <FadeInimage
                uri={`https://picsum.photos/id/${item}/500/300`}
                style={{
                    width: '100%',
                    height: 300,
                }}
            />
        );
    };

    // <Image
    //             source={{ uri: `https://picsum.photos/id/${item}/500/300` }}
    //             style={{
    //                 width: '100%',
    //                 height: 300,
    //             }}
    //         />

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={() => (
                    <View style={{ marginHorizontal: 20 }}>
                        <HeaderTitle title="Infinite Scroll" />
                    </View>
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ActivityIndicator size={40} color="grey" />
                    </View>
                )}
            />
        </View>
    );
};
