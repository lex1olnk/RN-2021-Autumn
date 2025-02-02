import React, {useEffect} from 'react';
import {Shadow} from 'react-native-shadow-2';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {checkItem} from '../../store/tasks';

const Lab2 = () => {
  const data = useSelector(state => state.data.value);
  const dispatch = useDispatch();

  const content = () => {
    return (
      <ScrollView>
        {data.map(item => {
          return (
            <View style={styles.shadowsDiv}>
              <Shadow
                distance={2}
                startColor={'#00000040'}
                finalColor={'#00000000'}
                offset={[3, 3]}>
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.item,
                    item.checked ? {backgroundColor: '#95D133'} : undefined,
                  ]}
                  onPress={() => {
                    dispatch(checkItem(item.id));
                  }}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: item.picture,
                    }}
                  />
                  <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
              </Shadow>
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <LinearGradient colors={['#6991F5', '#ffffff']}>
      <SafeAreaView style={styles.main}>
        <View>{data ? content() : <ActivityIndicator color={'red'} />}</View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {height: '100%'},

  item: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shadowsDiv: {
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },

  title: {
    width: 310,
    fontFamily: 'vibur-regular',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },

  img: {
    height: 260,
    width: 310,
    margin: 10,
    borderColor: '#151E1F',
    borderWidth: 0.8,
    borderRadius: 6,
  },
});

export default Lab2;
