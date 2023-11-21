import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = React.useState('');
    return(
        <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Add new task..."
            onChangeText={(text) => setTaskText(text)}
            value={taskText}
        />
        <Button title="Add Task" onPress={() => addTask(taskText)} />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 25,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 8,
        marginRight: 15,
        textDecorationColor:'black',
    },
})