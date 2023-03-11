import { StyleSheet, View, Image, Button, TouchableOpacity, Text } from 'react-native';

export default function Header() {
  return (
    <View >
        <View style={styles.image}>
            <Image source={require('../assets/logo1.png')}/>
        </View>

        <TouchableOpacity style={styles.contact}>
            <Text style={{color: 'white', fontSize: 15, marginTop: 13, marginLeft: 16}}>Contact us</Text>
            <Image source={require('../assets/contact-icon.png')} resizeMode='contain' style={{ height: 15, marginLeft:80, marginTop: -17.5 }}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginLeft: 15,
    marginTop: 40,
  },
  contact: {
    marginLeft: 235,
    marginTop: -40,
    width: 140,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'black',
  }
});
