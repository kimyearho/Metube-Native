/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component }  from 'react';
import { ScrollView } from "react-native";
import {
  List,
  ListItem,
  SearchBar
} from "react-native-elements";

import axios from "axios";
import YouTube from 'react-native-youtube'

const API_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyDTveVmzb3_2z1TSO-2fWfKX46Kf7dm0HI";

export default class App extends Component {

  // 생성자
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: '',
      quality: '',
      error: '',
      searchList: []
    };
  }

  changeText() {}
  clearText() {}

  componentDidMount() {
    let url = API_URL.concat(
      `/search?part=snippet&q=Dragonballsuper%20ost&type=playlist&maxResults=30&safeSearch=strict&key=${API_KEY}`
    );
    axios
      .get(url)
      .then(result => {
        this.setState({ searchList: result.data.items });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <SearchBar
          onChangeText={this.changeText}
          onClearText={this.clearText}
          searchIcon={{ size: 24 }}
          lightTheme
          icon={{ type: "font-awesome", name: "search" }}
          placeholder="Search Youtube"
        />
        <YouTube
            videoId="TnzLgoGjUxQ"   // The YouTube video ID
            play={false}             // control playback of video with true/false
            fullscreen={false}       // control whether the video should play in fullscreen or inline
            loop={true}             // control whether the video should loop when ended

            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}

            style={{ alignSelf: 'stretch', height: 300 }}
          />
          <List containerStyle={{ marginTop: 20, marginBottom: 120 }}>
            <ScrollView>
              {this.state.searchList.map(data => (
                <ListItem
                  hideChevron
                  badge={{
                    value: "PLAY LIST",
                    textStyle: { color: "orange" },
                    containerStyle: {
                      marginTop: -5
                      // backgroundColor: "#ffffff"
                    }
                  }}
                  roundAvatar
                  avatar={{ uri: data.snippet.thumbnails.medium.url }}
                  title={data.snippet.title}
                  titleStyle={{ fontSize: 12 }}
                  key={data.etag}
                />
              ))}
            </ScrollView>
          </List>
      </>
    );
  }
}


