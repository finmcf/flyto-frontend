import React from "react";

import { View, StyleSheet, Text } from "react-native";

const SearchResults = () => {
  return (
    <View styles={styles.searchContainer}>
      <Text styles={styles.searchText}>tet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: { backgroundColor: "red", width: 100, height: 100 },
  searchText: { color: "#64B154", fontSize: 20 },
});

export default SearchResults;
