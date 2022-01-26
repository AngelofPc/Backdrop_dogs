import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

const windowWidth = Dimensions.get('window').width;

const GridItem = ({ url, name, onPress, faveStatus }) => {
  return (
    <View style={styles.container}>
      <View>
        <FastImage
          style={styles.image}
          source={{
            uri: url,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.info}>
          <Text ellipsizeMode="clip" numberOfLines={3} style={styles.text}>
            {name}
          </Text>
          <TouchableOpacity onPress={onPress}>
            {faveStatus ? (
              <Icon name="heart" size={20} color="#DE0202" />
            ) : (
              <Icon name="hearto" size={20} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

GridItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  onPress: PropTypes.func,
  faveStatus: PropTypes.bool,
};

export default GridItem;

const styles = StyleSheet.create({
  container: { flexDirection: 'column', justifyContent: 'space-between', margin: 10, flex: 1 },
  image: { width: windowWidth / 2.6, height: 160, borderRadius: 10 },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    width: windowWidth / 2.6,
  },
  text: {
    marginBottom: 20,
    fontFamily: 'SFProDisplay-Medium',
    width: '80%',
    fontSize: 18,
    fontWeight: '400',
  },
});
