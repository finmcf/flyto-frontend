import { Text, View, ScrollView } from "react-native";

import { useState } from "react";

import Header from "./Components/Header";

import OneWayOrReturn from "./Components/OneWayOrReturn";

import DateSelectorButtons from "./Components/DateSelectorButtons";

import LocationSelect from "./Components/LocationSelect";

import FlightSearch from "./Components/FlightSearch";

import Row4 from "./Components/Row4";

import PassengersModal from "./Components/PassengersModal";

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [oneWayOrReturnSelected, setOneWayOrReturnSelected] =
    useState("One Way");

  const [isPassengersModalOpen, setIsPassengersModalOpen] = useState(false);

  const [adults, setAdults] = useState(1);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,

          paddingHorizontal: "8%",
        }}
      >
        <Header />

        <View
          style={{
            flex: 1,

            paddingHorizontal: "5%",
          }}
        >
          <OneWayOrReturn
            oneWayOrReturnSelected={oneWayOrReturnSelected}
            setOneWayOrReturnSelected={setOneWayOrReturnSelected}
          />
          <LocationSelect />

          <DateSelectorButtons
            oneWayOrReturnSelected={oneWayOrReturnSelected}
          />

          <Row4 setIsPassengersModalOpen={setIsPassengersModalOpen} />

          <FlightSearch />
          <Text>{oneWayOrReturnSelected}</Text>

          <PassengersModal
            isPassengersModalOpen={isPassengersModalOpen}
            setIsPassengersModalOpen={setIsPassengersModalOpen}
            adults={adults}
            setAdults={setAdults}
          />
        </View>
      </View>
    </ScrollView>
  );
}
