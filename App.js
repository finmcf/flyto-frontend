import { Text, View, ScrollView } from "react-native";

import { useState } from "react";

import Header from "./Components/Header";

import OneWayOrReturn from "./Components/OneWayOrReturn";

import DateSelectorButtons from "./Components/DateSelectorButtons";

import LocationSelect from "./Components/LocationSelect";

import FlightSearch from "./Components/FlightSearch";

import Row4 from "./Components/Row4";

import PassengersModal from "./Components/PassengersModal copy";

import ClassModal from "./Components/ClassModal";
import DateModal from "./Components/DateModal";

import LocationModal from "./Components/LocationModal";

import SearchResults from "./Components/SearchResults";

export default function App() {
  const formattedDate = new Date().toISOString().slice(0, 10);

  const [departureLocation, setDepartureLocation] = useState("");

  const [arrivalLocation, setArrivalLocation] = useState("");

  const [isDepartureLocationModalOpen, setIsDepartureLocationModalOpen] =
    useState(false);

  const [isArrivalLocationModalOpen, setIsArrivalLocationModalOpen] =
    useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [departureDate, setDepartureDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const [returnDate, setReturnDate] = useState(null);

  const [departureButtonPressed, setDepartureButtonPressed] = useState(false);

  const [oneWayOrReturnSelected, setOneWayOrReturnSelected] =
    useState("One Way");

  const [isPassengersModalOpen, setIsPassengersModalOpen] = useState(false);

  const [isClassModalOpen, setIsClassModalOpen] = useState(false);

  const [isDepartureDateModalOpen, setIsDepartureDateModalOpen] =
    useState(false);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

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

            paddingHorizontal: "8%",
          }}
        >
          <OneWayOrReturn
            oneWayOrReturnSelected={oneWayOrReturnSelected}
            setOneWayOrReturnSelected={setOneWayOrReturnSelected}
          />
          <LocationSelect
            setIsDepartureLocationModalOpen={setIsDepartureLocationModalOpen}
            setIsArrivalLocationModalOpen={setIsArrivalLocationModalOpen}
          />

          <DateSelectorButtons
            oneWayOrReturnSelected={oneWayOrReturnSelected}
            setIsDepartureDateModalOpen={setIsDepartureDateModalOpen}
            setDepartureButtonPressed={setDepartureButtonPressed}
            departureDate={departureDate}
            returnDate={returnDate}
          />

          <Row4
            setIsPassengersModalOpen={setIsPassengersModalOpen}
            setIsClassModalOpen={setIsClassModalOpen}
            adults={adults}
            children={children}
          />

          <FlightSearch />
          <Text>{oneWayOrReturnSelected}</Text>

          <PassengersModal
            isModalOpen={isPassengersModalOpen}
            setIsModalOpen={setIsPassengersModalOpen}
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
          />

          <ClassModal
            isModalOpen={isClassModalOpen}
            setIsModalOpen={setIsClassModalOpen}
          />
          <DateModal
            oneWayOrReturnSelected={oneWayOrReturnSelected}
            isModalOpen={isDepartureDateModalOpen}
            setIsModalOpen={setIsDepartureDateModalOpen}
            departureDate={departureDate}
            setDepartureDate={setDepartureDate}
            returnDate={returnDate}
            setReturnDate={setReturnDate}
            departureButtonPressed={departureButtonPressed}
            setDepartureButtonPressed={setDepartureButtonPressed}
          />

          <LocationModal
            isModalOpen={isDepartureLocationModalOpen}
            setIsModalOpen={setIsDepartureLocationModalOpen}
          />

          <SearchResults />
        </View>
      </View>
    </ScrollView>
  );
}
