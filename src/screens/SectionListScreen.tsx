/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { SectionList, View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitleList } from '../components/HeaderTitleList';
import { ItemSeparator } from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: 'DC Comics',
        data: ['Batman', 'Superman', 'Robin', 'Supergirl', 'Flash', 'Joker', 'Black Adam', 'Shazam', 'Lex Lutton', 'Wonder Woman', 'Bear', 'Aquaman', 'Cyborg', 'Green Lantern', 'Martian Manhunter', 'Green Arrow', 'Hawkman', 'Hawkgirl', 'Zatanna', 'Black Canary', 'Blue Beetle', 'Firestor'],
    },
    {
        casa: 'Marvel Comics',
        data: ['Antman', 'Thor', 'Spiderman', 'Galactus', 'Hulk', 'Wolverine', 'Deadpool', 'Cyclops', 'Storm', 'Cable', 'Magneto', 'Gambit', 'Nightcrawler', 'Colossus', 'Wolverine', 'Cyclops'],
    },
    {
        casa: 'Anime',
        data: ['Kenshin', 'Goku', 'Saitama', 'Vegeta', 'Naruto', 'Luffy', 'Ichigo', 'Sasuke', 'Sakura', 'Kakashi', 'Gon'],
    },
];

export const SectionListScreen = () => {
    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={() => HeaderTitleList({ title: 'Section List' })}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 70 }}>
                        <HeaderTitleList title={'Total de casas: ' + casas.length} />
                    </View>
                )}
                stickySectionHeadersEnabled={true}
                renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item}</Text>}
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <HeaderTitleList title={section.casa} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <View style={{ backgroundColor: 'white', marginTop: 15 }}>
                        <Text style={{ fontSize: 15 }}>
                            {`Total Items: ${section.data.length}`}
                        </Text >
                    </View>
                )}
                ItemSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};
