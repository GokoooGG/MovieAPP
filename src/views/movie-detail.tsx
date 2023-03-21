import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import CircularProgress from 'react-native-circular-progress-indicator';

import YoutubePlayer from "react-native-youtube-iframe";
import ImageColors from 'react-native-image-colors';
import HomeContainer from '../components/Container/HomeContainer';
import { getMovieData, getMovieVideo, imagePath } from '../services';
import theme from '../utils/theme';


const initialState = {
  colorOne: "",
  colorTwo: "",
}



function MovieDetail({ route }: any) {

  const selected = route.params?.selected

  const [trailer, setTrailer] = useState<any>([])
  const [isVisible, setVisible] = useState(false)
  const [movie, setMovieData] = useState<any>([])
  const [colors, setColors] = useState<any>(initialState)

  useEffect(() => {

    initTrailers()
    initData()


  }, [])

  useEffect(() => {
    if (movie) {
      fetchColors()
    }
  }, [movie])

  const fetchColors = async () => {
    const imgPath = imagePath + movie?.poster_path;
    const result = await ImageColors.getColors(imgPath, {
      fallback: '#000000',
      quality: 'low',
      pixelSpacing: 5,
      cache: true,
    })

    switch (result.platform) {
      case 'android':
        // android result properties
        setColors({
          colorOne: result.lightVibrant,
          colorTwo: result.average,
        })
        break
      case 'ios':
        // iOS result properties
        setColors({
          colorOne: result.background,
          colorTwo: result.detail,
        })
        break
      default:
        throw new Error('Unexpected platform key')
    }
  }


  const initTrailers = async () => {
    const trailerData = await getMovieVideo("movie", route.params?.id)
    setTrailer(trailerData.results.at(-1))
  }
  const initData = async () => {
    const movieData = await getMovieData(route.params?.id, selected)
    setMovieData(movieData)
  }


  let re = /\-/gi
  let date = (movie?.release_date?.replace(re, "/") || movie?.first_air_date?.replace(re, "/"))

  let Hour = Math.round(movie?.runtime / 60 || movie?.episode_run_time / 60)
  let Second = (movie?.runtime % 60 || movie?.episode_run_time % 60)


  return (

    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView >
        <HomeContainer
          source={{ uri: imagePath + movie?.backdrop_path }}
          style={{ height: 200, backgroundColor: colors.colorOne }}
          style2={{ marginLeft: -30 }}
          style3={{ marginLeft: 50 }}
          linearG={true}
          lineargColor={colors.colorOne} >
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

        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: colors.colorOne }}>
          <Text style={styles.text}>{movie?.original_title}</Text>

          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20 }}>
            <View style={styles.viewCircle}>
              <CircularProgress
                value={Math.round(movie?.vote_average * 10)}
                radius={30}
                activeStrokeWidth={6}
                inActiveStrokeWidth={6}
                progressValueStyle={{ color: 'white', paddingRight: 8 }}
              />
              <Text style={styles.textPercent}>%</Text>
              <Text style={{ position: "absolute", paddingLeft: 160, fontSize: 16, fontWeight: "900", color: "black" }}>Users Score</Text>
            </View>
            <Pressable onPress={() => {
              if (trailer == undefined) {
                Alert.alert("No Vieo Avaliable");
              } else {
                setVisible(true)
              }
            }}>
              <Text style={styles.textsub}>Play Trailer</Text>
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

        </View>

        <View style={{  alignItems: "center", backgroundColor: colors.colorOne, borderTopWidth: .5, borderBottomWidth: .5, paddingVertical:10 }}>
          <Text style={styles.textsub}>{date} {'\u2B24'} {Hour}h {Second}s</Text>
          <Text style={styles.textsub}>{movie?.genres?.map((item: any) => (item.name + "-"))}</Text>
        </View>

        <View>
          <Text style={{ fontWeight: "700", fontSize: 20, color: "black" }}>Overview</Text>
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
    fontWeight: '600',
    fontSize: 25,
    color: 'black',
    marginVertical: 10,
  },
  textsub: {
    fontSize: 16,
    color: "black",
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
    marginRight: 150,
    marginLeft: -20
  },
  textPercent: {
    position: 'absolute',
    fontSize: 13,
    right: 12,
    color: 'white'
  },
});

export default MovieDetail