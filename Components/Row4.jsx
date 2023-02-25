import React from "react";

import { View } from "react-native";

import Passengers from "./Passengers";

import Class from "./Class";

const Row4 = (props) => {
  return (
    <View style={{ flexDirection: "row", marginTop: "4%" }}>
      <Passengers setIsPassengersModalOpen={props.setIsPassengersModalOpen} />
      <Class />
    </View>
  );
};

export default Row4;
