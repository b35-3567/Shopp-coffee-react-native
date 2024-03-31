import {
  TouchableOpacity,
  StyleSheet, Text, View,
  Image,
  Animated, Dimensions
} from 'react-native'
import React, { useRef } from 'react'
import Songs from './Songs'
import { usePlayTrack } from './Service'
const { width, height } = Dimensions.get('window');
import Slider from '@react-native-community/slider';
import TrackPlayer, { State } from 'react-native-track-player';


const Screen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const songSlider = useRef(null);

  const {
    onSeekTo,
    onTogglePlayTrack,
    onSkipToNext,
    onSkipToPrevious,
    playBackState,
    duration,
    position,
    trackArtist,
    trackArtwork,
    trackTitle,
  } = usePlayTrack(Songs);
  console.log('playBackState', playBackState);

  const renderSongs = ({ item, index }) => {
    return (
      <Animated.View style={style.mainWrapper}>
        <View style={[style.imageWrapper, style.elevation]}>
          {
            trackArtwork && <Image
              source={{ uri: trackArtwork }}
              style={style.musicImage}
            />
          }
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.mainContainer}>
        {/* Image */}
        <Animated.FlatList
          ref={songSlider}
          renderItem={renderSongs}
          data={Songs}
          keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX },
                },
              },
            ],
            { useNativeDriver: true },
          )}
        />
        <View>
          <Text style={[style.songContent, style.songTitle]}>{trackTitle} </Text>
          <Text style={[style.songContent, style.songArtist]}>{trackArtist}</Text>
        </View>
        <View>
          <Slider
            style={style.progressBar}
            value={position}
            minimumValue={0}
            maximumValue={duration}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#fff"
            onSlidingComplete={async value => {
              onSeekTo(value);
            }}
          />
          <View style={style.progressLevelDuraiton}>
            <Text style={style.progressLabelText}>
              {new Date(position * 1000).toLocaleTimeString().substring(3)}
            </Text>
            <Text style={style.progressLabelText}>
              {new Date((duration - position) * 1000)
                .toLocaleTimeString()
                .substring(3)}
            </Text>
          </View>
        </View>
        <View style={style.musicControlsContainer}>
          <TouchableOpacity onPress={() => onSkipToPrevious()}>
            <Text style={[style.songContent, style.songTitle]}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onTogglePlayTrack}>
            {
              playBackState === State.Playing ? <Text style={[style.songContent, style.songTitle]}>Pause</Text> : <Text style={[style.songContent, style.songTitle]}>Play</Text>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSkipToNext()}>
            <Text style={[style.songContent, style.songTitle]}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Screen


const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#222831',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    borderTopColor: '#393E46',
    borderWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },

  bottomIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  mainWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  imageWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  elevation: {
    elevation: 5,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  songContent: {
    textAlign: 'center',
    color: '#EEEEEE',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  songArtist: {
    fontSize: 16,
    fontWeight: '300',
  },

  progressBar: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLevelDuraiton: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#FFF',
  },

  musicControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    width: '60%',
  },
});
