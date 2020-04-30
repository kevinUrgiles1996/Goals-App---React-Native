import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  CheckBox
} from 'react-native';

const ListItem = ({ item, deleteGoal }) => {
  const { id, message } = item;
  const [finished, setFinished] = useState(false);

  const getStyle = () =>
    finished ? { textDecorationLine: 'line-through' } : {};

  const deleteItem = () => deleteGoal(id);

  return (
    <TouchableOpacity onLongPress={deleteItem}>
      <View style={styles.item}>
        <Text style={{ ...getStyle(), fontSize: 20 }}>{message}</Text>
        <CheckBox
          value={finished}
          onValueChange={() => setFinished(!finished)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ccc',
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default ListItem;
