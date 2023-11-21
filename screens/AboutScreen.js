import React from 'react';
import { View, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({ navigation }){
    return(
        <MainLayout>
            <View>
                <Text>To Do App</Text>
                <Text>Sarbjeet Brar</Text>
                <Text> 20 / 11 / 2023 </Text>
                <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
    );
}