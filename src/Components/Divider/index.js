import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    marginHorizontal:10,
    borderBottomColor: '#292929',
    borderBottomWidth: 1,
    marginVertical: 10, // Adjust margin as needed
  },
});

export default Divider;
