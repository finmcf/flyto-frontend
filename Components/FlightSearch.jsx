import React from "react";
import { TouchableOpacity, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const FlightSearch = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        width: "100%",
        alignItems: "center",
        backgroundColor: "#64B154",
        borderRadius: width * 0.02,
        paddingVertical: "4%",
        marginTop: "5%",
      }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>Search</Text>
    </TouchableOpacity>
  );
};

export default FlightSearch;
