import { StyleSheet, View, Text, Image } from 'react-native';

export default function First() {
  return (
    <View>
        <Text style={styles.text1}>Coming Soon</Text>
        <Text style={styles.text2}>Bringing</Text>
        <Text style={styles.text3}>Muslims Together</Text>

        <View>
            <Image source={require('../assets/apple-store.png')} resizeMode='contain' style={{height: 40,width: 100, marginLeft: 85, marginTop: 10}}/>
        </View>

        <View>
            <Image source={require('../assets/google-play.png')} resizeMode='contain' style={{height: 50,width: 100, marginLeft: 195, marginTop: -46}}/>
        </View>

        <View>
            <Image source={require('../assets/landing-image-1.png')} resizeMode='contain' style={{ width: 350, marginTop: -130, marginLeft: 20}}/>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 50,
    fontWeight: 'bold'
  },
  text2: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 20,
    fontWeight: 'bold'
  },
  text3: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 2,
    fontWeight: 'bold'
  },
});
