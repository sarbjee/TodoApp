import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

export default function App() {
    return (
        <SafeAreaView>
            <ToDoList />
            <ToDoForm />
        </SafeAreaView>
    );
}
