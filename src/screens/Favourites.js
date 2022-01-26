import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import GridItem from '../components/GridItem';
import { favDog, getDogsFromApi, unFavDog } from '../redux/actions';

const Favourites = () => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.user.favourites);

  const faveStatus = (dog) => {
    if (favourites.filter((item) => item.id === dog.id).length > 0) {
      return true;
    }
    return false;
  };
  const renderItem = ({ item }) => (
    <GridItem
      item={item}
      name={item.breeds[0].name}
      url={item.url}
      onPress={() => {
        faveStatus(item) ? unFavDog(item, dispatch) : favDog(item, dispatch);
      }}
      faveStatus={faveStatus(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dogs I Like</Text>
      <FlatList
        numColumns={2}
        data={favourites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingTop: 40, paddingHorizontal: 20 },
  text: { marginBottom: 20, fontFamily: 'SFProDisplay-Medium', fontSize: 18, fontWeight: 'bold' },
});
