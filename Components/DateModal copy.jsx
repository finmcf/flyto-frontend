import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Calendar } from "react-native-calendars";

const { width } = Dimensions.get("window");

import ModalContainer from "./ModalContainer";

// Define a MyDatePicker component that renders the DatePicker component
// and handles the selected date
const DateModal = (props) => {
  // Initialize a selectedDate state variable with today's date
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = new Date();
  // Define a function to handle the selected date

  const CustomDayComponent = ({ date, state }) => {
    return <Day style={styles.dayContainer} textStyle={styles.dayText} />;
  };

  // Define a styles object using the StyleSheet.create method

  // Render the MyDatePicker component
  return (
    // Use a View component to wrap the DatePicker component

    <ModalContainer
      isModalOpen={props.isModalOpen}
      setIsModalOpen={props.setIsModalOpen}
    >
      <View style={styles.container}>
        <Calendar
          style={styles.calendar}
          minDate={new Date()}
          maxDate={
            new Date(new Date().setFullYear(new Date().getFullYear() + 1))
          }
          theme={{
            selectedDayBackgroundColor: "blue",
            todayTextColor: "red",
            arrowColor: "green",
            textDayFontSize: width * 0.07, // Change font size of the day text
            textMonthFontSize: 30, // Change font size of the month text
            textDayMarginVertical: 0,
          }}
        />
      </View>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    height: "100%",
    width: "100%",

    backgroundColor: "red",

    overflow: "hidden",
  },
});

export default DateModal;
