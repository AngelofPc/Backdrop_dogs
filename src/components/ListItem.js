import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/AntDesign';

const ListItem = ({ item, onPress, faveStatus }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <FastImage
          style={styles.image}
          source={{
            uri: item.url,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.text}>{item.breeds[0].name}</Text>
      </View>
      <TouchableOpacity testID="actionButton" onPress={onPress}>
        {faveStatus ? (
          <Icon name="heart" size={20} color="#DE0202" />
        ) : (
          <Icon name="hearto" size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
  faveStatus: PropTypes.bool,
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  text: { fontFamily: 'SFProDisplay-Bold', fontWeight: '500', fontSize: 16 },
  imageView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: { width: 50, height: 50, borderRadius: 10, marginRight: 20 },
});
