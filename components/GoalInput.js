import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

export const GoalInput = ({ addGoal, visible, cancelAction }) => {
  const [goal, setGoal] = useState('');

  const addItem = () => {
    if (goal !== '') {
      const newGoal = {
        id: `${Math.random()}}`,
        message: goal
      };
      addGoal(newGoal);
      setGoal('');
    } else {
      alert('Please type a goal');
    }
  };

  const cancelActionHandler = () => {
    cancelAction();
    setGoal('');
  };

  return (
    <Modal style={styles.modal} animationType='slide' visible={visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Insert a goal'
          style={styles.input}
          onChangeText={text => setGoal(text)}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color='red' title='CANCEL' onPress={cancelActionHandler} />
          </View>
          <View style={styles.button}>
            <Button color='green' title='ADD' onPress={addItem} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  modal: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  },
  button: {
    width: '25%'
  }
});

export default GoalInput;
