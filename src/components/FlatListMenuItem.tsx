import React, { useContext } from 'react';
import { MenuItem } from '../interfaces/appInterfaces';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.dispatch(
                CommonActions.navigate({
                    name: menuItem.component,
                })
            )}
        >

            <View style={styles.container}>

                <Icon
                    name={menuItem.icon}
                    size={23}
                    color={colors.primary}
                />
                <Text style={{
                    ...styles.itemText,
                    color: colors.text,
                }}
                >{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                {/* Este view es para que el icono de la derecha se quede al final de la fila */}
                <Icon
                    name="chevron-forward-outline"
                    size={23}
                    color={colors.primary}
                />
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    },
});
