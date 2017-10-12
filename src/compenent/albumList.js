import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import  {log}  from '../utility/logger';
import AlbumDetail from './AlbumDetail';

class CAlbumList extends Component {
  state ={ albums: [] };

  //called just when the app starts
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => this.setState({ albums: response.data }));
    log('before mounting')
  }
  renderAlbum() {
    log(this.state.albums);
    return this.state.albums.map(iterator =>
       <AlbumDetail key={iterator.title} albumDetail= {iterator}></AlbumDetail> )
  }

  render() {

    return <ScrollView>{this.renderAlbum()}</ScrollView>
  }

}
export default CAlbumList;
