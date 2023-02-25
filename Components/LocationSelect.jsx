import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const LocationSelectButtons = (props) => {
  const styles = StyleSheet.create({
    container: {
      paddingLeft: "4%",
      paddingVertical: "1.2%",
      backgroundColor: "#F4F4F4",

      borderTopLeftRadius: props.type === "Departure" ? width * 0.03 : 0,
      borderTopRightRadius: props.type === "Departure" ? width * 0.03 : 0,
      borderBottomLeftRadius: props.type === "Arrival" ? width * 0.03 : 0,
      borderBottomRightRadius: props.type === "Arrival" ? width * 0.03 : 0,
      borderTopWidth: props.type === "Arrival" ? width * 0.001 : 0,
      borderColor: "#afafaf",
    },
    textsmall: {
      color: "#afafaf",
      fontFamily: "Roboto",

      fontSize: width * 0.03,

      marginLeft: "2%",
    },
    textbig: {
      fontSize: width * 0.045,

      marginLeft: "2%",
    },
  });

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <Text style={styles.textsmall}>
        {props.type === "Departure" ? "From" : "To"}
      </Text>

      <Text style={styles.textbig}>{props.type}</Text>
    </TouchableOpacity>
  );
};

const SwitchButton = () => {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      zIndex: 1,
      bottom: "30%",
      right: "7%",
      backgroundColor: "#64B154",
      borderRadius: width * 0.055,
      height: width * 0.11,
      width: width * 0.11,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Ionicons
        name="swap-vertical-outline"
        size={width * 0.055}
        color="#F4F4F4"
      />
    </TouchableOpacity>
  );
};

const LocationSelect = () => {
  return (
    <View
      style={{
        width: "100%",
        alignItem: "center",
        justifyContent: "center",
        marginTop: "4%",
      }}
    >
      <SwitchButton />
      <LocationSelectButtons type={"Departure"} />

      <LocationSelectButtons type={"Arrival"} />
    </View>
  );
};

export default LocationSelect;
