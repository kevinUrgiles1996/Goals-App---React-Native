import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoal = goal => {
    setGoals(previuosGoals => [...previuosGoals, goal]);
    setModalVisible(false);
  };

  const deleteGoal = id => {
    const filteredGoals = goals.filter(goal => goal.id !== id);
    setGoals(filteredGoals);
  };

  const cancelGoal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.mainTitle}>GOALS APP</Text>
      <Button title='Add Goal' onPress={() => setModalVisible(true)} />
      <GoalInput
        addGoal={addGoal}
        visible={modalVisible}
        cancelAction={cancelGoal}
      />
      <View>
        <FlatList
          data={goals}
          renderItem={itemData => (
            <GoalItem item={itemData.item} deleteGoal={deleteGoal} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.longPress}>
          Press and hold and item to delete it
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 25,
    textAlign: 'center',
    padding: 15
  },
  screen: {
    padding: 50,
    height: '100%'
  },
  info: {
    position: 'absolute',
    bottom: '5%',
    right: 50,
    width: '100%'
  },
  longPress: {
    color: 'white',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center'
  }
});
