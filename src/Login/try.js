import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Try() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json.products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(data);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data.length === 0 ? (
          <Text>No data available</Text>
        ) : (
          data.map((product, index) => (
            <View key={index}>
              <Text style={styles.title}>{product.title}</Text>
              <Text>{product.brand}</Text>
            </View>
          ))
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
