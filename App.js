import React from 'react';
import { useState } from 'react';
import {SafeAreaView, } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

 
 
export default function App() {
 
  const [tasks] = useState([
    'Do laundry',
    'Go to park',
    'Walk dog'
  ]);
 
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm />
        </SafeAreaView>
    );
}

