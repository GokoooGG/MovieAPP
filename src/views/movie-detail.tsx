import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import CircularProgress from 'react-native-circular-progress-indicator';

import YoutubePlayer from "react-native-youtube-iframe";
import HomeContainer from '../components/Container/HomeContainer';
import { getMovieData, getMovieVideo, imagePath } from '../services';
import theme from '../utils/theme';

function MovieDetail({ route }: any) {

  const id = route.params?.id

  const [trailer, setTrailer] = useState<any>([])
  const [isVisible, setVisible] = useState(false)
  const [movie, setMovieData] = useState<any>([])

  useEffect(() => {

    initTrailers()
    initData()

  }, [])


  const initTrailers = async () => {
    const trailerData = await getMovieVideo("movie", route.params?.id)
    setTrailer(trailerData.results.at(-1))
  }
  const initData = async () => {
    const movieData = await getMovieData(route.params?.id)
    setMovieData(movieData)
  }


  let re = /\-/gi
  let date = movie?.release_date?.replace(re, "/")

  let Hour = Math.round(movie?.runtime / 60)
  let Second = movie?.runtime % 60


  return (

    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView >
        <HomeContainer source={{ uri: imagePath + movie?.backdrop_path }} style={{ height: 200 }} style2={{ paddingHorizontal: 20 }} >
          <View style={styles.view}>
            <ImageBackground
              source={{ uri: imagePath + movie?.poster_path }}
              resizeMode='contain'
              imageStyle={{ borderRadius: 10 }}
              style={styles.image}
            >
            </ImageBackground>
          </View>
        </HomeContainer>

        <View>
          <Text>{movie?.original_title}</Text>
          <View style={styles.viewCircle}>
            <CircularProgress
              value={Math.round(movie?.vote_average * 10)}
              radius={30}
              activeStrokeWidth={6}
              inActiveStrokeWidth={6}
              progressValueStyle={{ color: 'white', paddingRight: 8 }}
            />
            <Text style={styles.textPercent}>%</Text>
          </View>
          <Pressable onPress={() => {
            if (trailer == undefined) {
              Alert.alert("No Vieo Avaliable");
            } else {
              setVisible(true)
            }
          }}>
            <Text>Play Trailer</Text>
          </Pressable >
          <Modal visible={isVisible} transparent={true} onRequestClose={() => { setVisible(false) }} >
            <Pressable
              onPress={() => setVisible(false)}
              style={{
                flex: 1, backgroundColor: 'rgba(0,0,0, 0.75)',
                justifyContent: 'center',
                alignItems: 'center'
              }} >
              <View onStartShouldSetResponder={(event) => true}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                }}>
                <YoutubePlayer
                  height={300}
                  width={400}
                  play={false}
                  videoId={trailer?.key} />
              </View>
            </Pressable>
          </Modal>
        </View>

        <View>
          <Text>{date} - {Hour}h {Second}s {movie?.genres?.map((item: any) => (item.name+" "))}</Text>
        </View>

      <View>
        <Text style={{fontWeight:"700",fontSize:20,color:"black"}}>Overview</Text>
        <Text>{movie?.overview}</Text>

      </View>

      </ScrollView> 
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    height: 150,
    width: 100
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
  viewCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    backgroundColor: theme.colors.tmdbDarkBlue,
    borderRadius: 100,
  },
  textPercent: {
    position: 'absolute',
    fontSize: 13,
    right: 12,
    color: 'white'
  },
});

export default MovieDetail