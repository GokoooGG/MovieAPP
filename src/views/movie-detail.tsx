import * as React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeContainer from '../components/Container/HomeContainer';
import { imagePath } from '../services';

function MovieDetail({ route }: any) {

  const data = route.params?.data



  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView >
        <HomeContainer source={{uri:imagePath + data.backdrop_path}}  style={{ height: 250 }} style2={{ paddingHorizontal: 20 }} >
        <View style={styles.view}>
                <ImageBackground
                    source={{ uri:imagePath+data.poster_path }}
                    resizeMode='contain'
                    imageStyle={{ borderRadius: 10 }}
                    style={styles.image}
                >
                </ImageBackground>
            </View>
        </HomeContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop:20,
    height:150,
    width:100
  },
  text: {
      fontWeight: '700',
      fontSize: 50,
      color: 'white',
  },
  image: {
      flex: 1,
      justifyContent: 'center',
  },
});

export default MovieDetail