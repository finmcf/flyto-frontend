import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Calendar, CalendarList } from "react-native-calendars";

import DoneButton from "./DoneButton";

const { width, height } = Dimensions.get("window");

import ModalContainer from "./ModalContainer";

import CustomDatePicker from "./CustomDatePicker";
// Define a MyDatePicker component that renders the DatePicker component
// and handles the selected date
const DateModal = (props) => {
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear(),
    today.getMonth() + 12,
    today.getDate()
  );
  const maxDateString = maxDate.toISOString().slice(0, 10);
  const todayString = today.toISOString().slice(0, 10);

  return (
    // Use a View component to wrap the DatePicker component

    <ModalContainer
      isModalOpen={props.isModalOpen}
      setIsModalOpen={props.setIsModalOpen}
    >
      <View
        style={{
          width,
          height: height * 0.85,
          borderColor: "#595454",

          borderBottomWidth: 1,
        }}
      >
        <CalendarList
          minDate={todayString}
          maxDate={maxDateString}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={0}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={12}
        />
      </View>
      <DoneButton setIsModalOpen={props.setIsModalOpen} marginTop="10%" />
    </ModalContainer>
  );
};

export default DateModal;
