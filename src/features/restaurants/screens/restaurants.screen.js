import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components";
import { ResaturantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
`;

export const RestaurantsScreen = () => {
  const RestaurantContext = useContext(RestaurantContext);
  console.log(RestaurantContext);

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
        ]}
        renderItem={() => <ResaturantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ margin: 12 }}
      />
    </SafeArea>
  );
};
