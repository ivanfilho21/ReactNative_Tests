import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StatusBar, Text, Button, ScrollView, StyleSheet } from "react-native";
import Logo from "./src/components/Logo";
import MovieItem from "./src/components/MovieItem";
import Tmdb from "./src/Tmdb";

export default function App() {
  const [page, setPage] = useState(1)
  const [movieList, setMovieList] = useState([]);

  const loadAll = async () => {
    let list = await Tmdb.getPopular(page);
    let results = list.results;
    let union = movieList.concat(results);
    setMovieList(union);
    setPage(page + 1);
    // console.log(union);
  }

  useEffect(() => {
    loadAll();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#151515"
        // barStyle="dark-content"
        style="dark"
      />

      <Logo />

      <ScrollView>
        <Text style={styles.category}>Popular</Text>

        <View style={styles.movies}>
        {movieList && movieList.length > 0 && movieList.map((item, key) => (
          <MovieItem key={key} imgPath={`${Tmdb.getImgPath()}${item.poster_path}`} />
        ))}
        </View>

        <View style={{marginTop: 12, marginBottom: 32, alignItems: "center"}}>
          <Button title="Load More" onPress={() => {loadAll()}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#454545",
  },
  text: {
    color: "white",
  },
  button: {
    alignSelf: "center",
    width: "fit-to-content",
  },
  category: {
    marginTop: 12,
    marginBottom: 12,
    marginStart: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: "white",
  },
  movies: {
    marginTop: 0,
    paddingEnd: 12,
    paddingBottom: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
});
