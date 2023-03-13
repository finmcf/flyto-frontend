import React, { useRef, useState } from "react";
import {
  PanResponder,
  View,
  Animated,
  Modal,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

import CloseButton from "./CloseButton";

import ModalContainer from "./ModalContainer";

import FlatListItem from "./FlatListItem";

import DoneButton from "./DoneButton";

const flightClasses = [
  { id: "ECONOMY", name: "Economy" },
  { id: "PREMIUM_ECONOMY", name: "Premium Economy" },
  { id: "BUSINESS", name: "Business Class" },
  { id: "FIRST", name: "First Class" },
];

const { width } = Dimensions.get("window");

const ClassModal = (props) => {
  const styles = StyleSheet.create({});

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ borderColor: "red", borderTopWidth: 1, marginTop: "30%" }}
    >
      <Text style={{ fontSize: width * 0.07 }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ModalContainer
      isModalOpen={props.isModalOpen}
      setIsModalOpen={props.setIsModalOpen}
    >
      <CloseButton setIsModalOpen={props.setIsModalOpen} />

      <FlatList
        data={flightClasses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{
          marginVertical: 20,
          borderBottomColor: "red",
          borderBottomWidth: 1,
        }}
      />
      <DoneButton setIsModalOpen={props.setIsModalOpen} marginTop="40%" />
    </ModalContainer>
  );
};

export default ClassModal;
