import React from "react";

import { View } from "react-native";

import PassengersButton from "./PassengersButton";

import Class from "./Class";

const Row4 = (props) => {
  return (
    <View style={{ flexDirection: "row", marginTop: "4%" }}>
      <PassengersButton
        setIsPassengersModalOpen={props.setIsPassengersModalOpen}
        adults={props.adults}
        children={props.children}
      />
      <Class />
    </View>
  );
};

export default Row4;
