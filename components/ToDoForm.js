import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'

export default function ToDoForm() {
    return(
        <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Add as new task..."/>
        <Button title="Add List" />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input:{
        alignContent:'center',
        fontStyle:'italic',
        
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,


    }

})