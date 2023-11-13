import React from 'react';
import { useState } from 'react';
import {SafeAreaView, } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

 
 
export default function App() {
 
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to park',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
 
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
        </SafeAreaView>
    );
}



