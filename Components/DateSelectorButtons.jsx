import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const DateButtons = (props) => {
  const { width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingVertical:
        props.oneWayOrReturnSelected === "Return" ? "4%" : "5.4%",
      backgroundColor: "#F4F4F4",
      borderRadius: width * 0.03,
      marginRight:
        props.oneWayOrReturnSelected === "One Way"
          ? 0
          : props.type === "Departure"
          ? "3%"
          : 0,
      marginLeft: props.type === "Return" ? "3%" : 0,
    },

    oneWayContainer: {
      flexDirection:
        props.oneWayOrReturnSelected === "One Way" ? "row" : "column",
    },

    calendarIcon: { marginRight: "5%" },
    lightText: {
      fontSize: width * 0.03,
      color: "#afafaf",
      fontFamily: "Roboto",
    },
    boldText: {
      fontSize:
        props.oneWayOrReturnSelected === "One Way"
          ? width * 0.054
          : width * 0.045,

      color: "#000",
      fontFamily: "Roboto",
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.oneWayContainer}>
        {props.oneWayOrReturnSelected === "Return" && (
          <Text style={styles.lightText}>{`${props.type} Date`}</Text>
        )}
        {props.oneWayOrReturnSelected === "One Way" && (
          <View style={styles.calendarIcon}>
            <Ionicons name="calendar" size={width * 0.075} />
          </View>
        )}

        <Text style={styles.boldText}>18 Mar 23</Text>
      </View>
    </TouchableOpacity>
  );
};

const DateSelectorButtons = (props) => {
  return (
    <View style={{ flexDirection: "row", marginTop: "4%" }}>
      <DateButtons
        type={"Departure"}
        oneWayOrReturnSelected={props.oneWayOrReturnSelected}
      />
      {props.oneWayOrReturnSelected === "Return" && (
        <DateButtons
          type={"Return"}
          oneWayOrReturnSelected={props.oneWayOrReturnSelected}
        />
      )}
    </View>
  );
};

export default DateSelectorButtons;
