import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from "../navigation/DrawerNavigator";
import { Text, View } from 'react-native';

export default function DashboardScreen() {
        return (
            <NavigationContainer>
                <DrawerNavigator />
            </NavigationContainer>
        );
}