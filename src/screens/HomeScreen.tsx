/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import { View, FlatList } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                // Las flatlist son como los listview de android pero con mejoras de performance y más flexibles, cuentan con un scroll infinito y se componen de un array de objetos que se renderizan en cada item de la lista
                data={menuItems} // Aquí se le pasa el array de objetos
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />} // Aquí se le pasa la función que se encargará de renderizar cada item de la lista
                keyExtractor={(item) => item.name} // Aquí se le pasa la función que se encargará de asignar una key a cada item de la lista
                ListHeaderComponent={() => HeaderTitle({title:'Menu Options'})} // Aquí se le pasa la función que se encargará de renderizar el header de la lista
                showsVerticalScrollIndicator={false} // Aquí se le pasa un booleano que indica si se mostrará o no el scroll vertical
                ItemSeparatorComponent={ItemSeparator} // Aquí se le pasa la función que se encargará de renderizar el separador de cada item de la lista
            />
        </View>
    );
};

