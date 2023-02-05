import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  Searchbar,
  List,
  Avatar,
  Button,
  Card,
  Text,
} from "react-native-paper";

const movies = [
  {
    id: "1",
    title: "The Godfather",
  },
  {
    id: "2",
    title: "The Shawshank Redemption",
  },
  {
    id: "3",
    title: "The Dark Knight",
  },
  {
    id: "4",
    title: "The Lord of the Rings: The Return of the King",
  },
  {
    id: "5",
    title: "Pulp Fiction",
  },
  {
    id: "6",
    title: "The Good, the Bad and the Ugly",
  },
  {
    id: "7",
    title: "Fight Club",
  },
  {
    id: "8",
    title: "The Lord of the Rings: The Fellowship of the Ring",
  },
  {
    id: "9",
    title: "Forrest Gump",
  },
  {
    id: "10",
    title: "Inception",
  },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <List.Section>
          <List.Subheader>Search results</List.Subheader>

          {movies.map((movies) => (
            <List.Item key={movies.id} title={movies.title} />
          ))}

          <Card>
            <Card.Title
              title="Hello World"
              subtitle="This card design was copied from react-native-paper"
            />
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Content>
              <Text variant="labelSmall">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Text>
            </Card.Content>
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </List.Section>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
