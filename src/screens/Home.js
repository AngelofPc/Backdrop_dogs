import { FlatList, StyleSheet, Text, RefreshControl, View } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ListItem from '../components/ListItem';
import { favDog, getDogsFromApi, unFavDog } from '../redux/actions';
import Loading from '../components/Loading';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();

  const dogs = useSelector((state) => state.user.dogs);
  const favourites = useSelector((state) => state.user.favourites);

  useEffect(() => {
    getDogsFromApi(dispatch);
  }, [dispatch]);

  const faveStatus = (dog) => {
    if (favourites.filter((item) => item.id === dog.id).length > 0) {
      return true;
    }
    return false;
  };

  const renderItem = ({ item }) => (
    <ListItem
      name={item.name}
      item={item}
      onPress={() => {
        faveStatus(item) ? unFavDog(item, dispatch) : favDog(item, dispatch);
      }}
      faveStatus={faveStatus(item)}
    />
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getDogsFromApi(dispatch);
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Dogs</Text>
      {dogs.length < 1 ? (
        <Loading />
      ) : (
        <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          data={dogs}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingTop: 40, paddingHorizontal: 20 },
  text: { marginBottom: 20, fontFamily: 'SFProDisplay-Bold', fontWeight: 'bold', fontSize: 18 },
});
