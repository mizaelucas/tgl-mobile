import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import CartInfo from './CartInfo';
import Total from './Total';
import Save from './Save';

const numbers = '01, 02, 03, 01, 02, 03, 01, 02, 03, 01, 02, 03, 01, 02, 03, 01, 02, 03';

export default function Cart({ navigation }: DrawerContentComponentProps): JSX.Element {
    const navigate = () => {navigation.navigate('Home')};

    return (
        <View style={{ flex: 1 }}>
            <Foundation name='x' size={25} color='#B5C401' style={{ alignSelf: 'flex-end', padding: 20, marginTop: 25 }} onPress={() => {navigation.closeDrawer()}} />
            <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                <MaterialCommunityIcons name='cart-outline' size={35} color='#B5C401' />
                <Text style={{ fontSize: 22, fontStyle: 'italic', fontWeight: 'bold', color: '#707070', paddingLeft: 10 }}>CART</Text>
            </View>
            <ScrollView style={{ padding: 10 }}>
                <CartInfo />
            </ScrollView>
            <Total />
            <Save />
        </View>
    );
};


