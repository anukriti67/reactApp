import React from 'react'
import { View ,Text,Image} from 'react-native'
import CardSection from './cardSection'
import Card from './card'

const AlbumDetail = ({albumDetail}) => {
  const {title,artist,thumbnail_image,image} = albumDetail
  const {albumContainerStyling,ImageStyling,ContainerImageStyling,
       TextHeaderStyling,ConverImageStyling} = styles
  return <View>
<Card>
<CardSection>
<View style = {ContainerImageStyling}>
<Image style={ImageStyling} source={{uri:thumbnail_image}}/>
</View>
<View style = {albumContainerStyling}>
<Text style={TextHeaderStyling}>{title}</Text>
<Text>{artist}</Text>
</View>
</CardSection>
<CardSection>
<Image source ={{uri: image}} style = {ConverImageStyling}/>
</CardSection>
</Card></View>
}

const styles={
  albumContainerStyling : {
    flexDirection:'column',
    justifyContent:'space-around'
  },
  ImageStyling: {
    height:50,
    width:50
  },
  ContainerImageStyling: {
    margin:5,
    justifyContent:'center',
    alignItems:'center'
  },
  TextHeaderStyling:{
    fontSize:18
  },
  ConverImageStyling:{
    height:300,
    width:300
  }

}
export default AlbumDetail;
