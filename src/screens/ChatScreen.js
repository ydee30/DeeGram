import { StyleSheet, View, Text, ImageBackground,FlatList } from 'react-native'
import bg from '../../assets/images/wallpaper.png'
import messages from '../../assets/data/messages.json'
import Message from '../Components/Message'

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style= {styles.bg}>
      <FlatList 
      data = {messages} 
      renderItem= {({item}) => <Message message = {item} />}  
      style = {styles.list}
      inverted
      />
    
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },

    list: {
        padding: 10,
        color: 'white',
    },
});

export default ChatScreen