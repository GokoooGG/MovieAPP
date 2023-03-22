import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import CircularProgress from 'react-native-circular-progress-indicator';

import YoutubePlayer from "react-native-youtube-iframe";
import ImageColors from 'react-native-image-colors';
import HomeContainer from '../components/Container/HomeContainer';
import { getMovieData, getMovieVideo, imagePath, getMovieCredit } from '../services';
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
  const [credits, setCredits] = useState<any>([])
  const [colors, setColors] = useState<any>(initialState)

  useEffect(() => {

    initTrailers()
    initData()
    initCredit()

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
          colorOne: result.average,
          colorTwo: result.darkVibrant,
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
  const initCredit = async () => {
    const credit = await getMovieCredit(route.params?.id, selected)
    setCredits(credit.crew)
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
          style={{ height: 200, backgroundColor: colors?.colorOne }}
          style2={{ marginLeft: -30 }}
          style3={{ marginLeft: 50 }}
          linearG={true}
          lineargColor={colors?.colorOne} >
          <View style={styles.viewImage}>
            <ImageBackground
              source={{ uri: imagePath + movie?.poster_path }}
              resizeMode='contain'
              imageStyle={{ borderRadius: 10 }}
              style={styles.image}
            >
            </ImageBackground>
          </View>
        </HomeContainer>

        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: colors?.colorOne }}>
          <Text style={styles.textHead}>{movie?.original_title}</Text>

          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20 }}>
            <View style={styles.viewCircle}>
              <CircularProgress
                value={Math.round(movie?.vote_average * 10)}
                radius={35}
                activeStrokeWidth={6}
                inActiveStrokeWidth={6}
                progressValueStyle={{ color: 'white' }}
                valueSuffix={'%'}
              />
            </View>

            <Text style={{ paddingLeft: 10, paddingRight: 70, fontSize: 18, fontWeight: "900", color: "white" }}>Users Score</Text>

            <Pressable onPress={() => {
              if (trailer == undefined) {
                Alert.alert("No Video Avaliable");
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

        <View style={[styles.viewSec, { backgroundColor: colors.colorOne }]}>
          <Text style={styles.textsub}>{date} {'\u2B24'} {Hour}h {Second}s</Text>
          <Text style={styles.textsub}>{movie?.genres?.map((item: any) => (item.name + "-"))}</Text>
        </View>

        <View style={[styles.viewMain, { backgroundColor: colors.colorOne, paddingTop: 10 }]}>
          <Text style={[styles.textsub, { fontStyle: "italic", color: "lightgrey" }]}>{movie?.tagline}</Text>
          <Text style={[styles.textsub, { fontWeight: "700", fontSize: 20, paddingTop: 10 }]}>Overview</Text>
          <Text style={[styles.textsub, { paddingBottom: 30 }]}>{movie?.overview}</Text>
        </View>

        <View style={[styles.viewMain, { backgroundColor: colors.colorOne, paddingBottom: 10 }]}>
          {
            credits?.map((item: any) => (
              item.job == "Director" &&
              <>
                <Text style={[styles.textsub, { fontWeight: "700", paddingBottom: 5 }]}>Director </Text>
                <Text style={[styles.textsub, { paddingBottom: 10 }]}>{item.name}</Text>
              </>
            ))
          }

          {
            credits?.map((item: any) => (
              item.job == "Writer" &&
              <>
                <Text style={[styles.textsub, { fontWeight: "700", paddingBottom: 5 }]}>Writer </Text>
                <Text style={[styles.textsub, { paddingBottom: 10 }]}>{item.name}</Text>
              </>
            ))
          }
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewMain: {
    paddingLeft: 20,
    paddingHorizontal: 20,
  },
  viewSec: {
    alignItems: "center",
    borderTopWidth: .5,
    borderBottomWidth: .8,
    paddingVertical: 10,

  },
  viewImage: {
    marginTop: 20,
    height: 150,
    width: 100
  },
  textHead: {
    fontWeight: '600',
    fontSize: 25,
    color: 'white',
    marginVertical: 10,
  },
  textsub: {
    fontSize: 18,
    color: "white",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  viewCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    backgroundColor: theme.colors.tmdbDarkBlue,
    borderRadius: 100,
    marginLeft: -35
  },
  textPercent: {
    position: 'absolute',
    fontSize: 13,
    right: 12,
    color: 'white'
  },
});

export default MovieDetail