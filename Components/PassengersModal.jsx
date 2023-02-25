import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const CloseButton = (props) => {
  const styles = StyleSheet.create({
    closeButton: {
      zIndex: 1,
      backgroundColor: "#EE2A00",
      height: width * 0.13,
      width: width * 0.13,
      borderRadius: width * 0.065,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "3%",
      left: "8%",
    },
  });
  return (
    <TouchableOpacity
      style={styles.closeButton}
      activeOpacity={0.6}
      onPress={() => props.setIsPassengersModalOpen(false)}
    >
      <Ionicons name="close" size={width * 0.12} color={"#FFFFFF"} />
    </TouchableOpacity>
  );
};

const PlusButton = (props) => {
  const styles = StyleSheet.create({
    plusButton: {
      backgroundColor: "#64B154",
      height: width * 0.13,
      width: width * 0.13,
      borderRadius: width * 0.065,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <TouchableOpacity
      style={styles.plusButton}
      activeOpacity={0.6}
      onPress={() => {
        props.setAdults(props.adults + 1);
      }}
    >
      <Ionicons name="add" size={width * 0.12} color={"#FFFFFF"} />
    </TouchableOpacity>
  );
};

const MinusButton = (props) => {
  const styles = StyleSheet.create({
    minusButton: {
      backgroundColor: "#EE2A00",
      height: width * 0.13,
      width: width * 0.13,
      borderRadius: width * 0.065,
      alignItems: "center",
      justifyContent: "center",
    },
    disabledMinusButton: { backgroundColor: "#F4F4F4" },
  });
  return (
    <TouchableOpacity
      style={[
        styles.minusButton,
        props.adults == 1 && styles.disabledMinusButton,
      ]}
      activeOpacity={0.6}
      onPress={() => {
        props.setAdults(props.adults - 1);
      }}
      disabled={props.adults === 1}
    >
      <Ionicons name="remove" size={width * 0.12} color={"#FFFFFF"} />
    </TouchableOpacity>
  );
};

const PassengerCounter = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",

      marginTop: "5%",
    },
    text: { fontSize: width * 0.08 },
    adultCounter: { fontSize: width * 0.08, marginHorizontal: "3%" },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.type}

        {props.type === "Adults" ? "(+12)" : "(0-11)"}
      </Text>

      <PlusButton adults={props.adults} setAdults={props.setAdults} />
      <Text style={styles.adultCounter}>{props.adults}</Text>
      <MinusButton adults={props.adults} setAdults={props.setAdults} />
    </View>
  );
};

const PassengersModal = (props) => {
  const styles = StyleSheet.create({
    modal: {
      flex: 1,

      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={props.isPassengersModalOpen}
        onRequestClose={() => {
          props.setIsPassengersModalOpen(false);
        }}
      >
        <CloseButton
          setIsPassengersModalOpen={props.setIsPassengersModalOpen}
        />
        <View style={styles.modal}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: width * 0.1,
              marginTop: "25%",
            }}
          >
            Passengers
          </Text>
          <PassengerCounter
            type={"Adults"}
            adults={props.adults}
            setAdults={props.setAdults}
          />

          <PassengerCounter
            type={"Children"}
            adults={props.adults}
            setAdults={props.setAdults}
          />
        </View>
      </Modal>
    </View>
  );
};

export default PassengersModal;
