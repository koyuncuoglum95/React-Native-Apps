import React, { useState } from 'react';
import { StyleSheet, View,  FlatList, Button } from 'react-native';
import { GoalItem } from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (goalTitle) => {
    // Adding out inputs into courseGoals array
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle } ]);

    setShowModal(false);
  }

  const deleteGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const cancelGoalHandler = () => {
    setShowModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goals' onPress={() => setShowModal(true)} />
        <GoalInput onAddGoal={addGoalHandler} show={showModal} onCancel={cancelGoalHandler}/>
      <FlatList
      keyExtractor={(item, index) => item.id} 
      data={courseGoals} 
      renderItem={itemData => <GoalItem title={itemData.item.value} onDelete={deleteGoalHandler} onGoalId={itemData.item.id}/>}
      />
      </View>
  );
}

const styles =  StyleSheet.create({
  screen: {
    padding: 50
  }
});