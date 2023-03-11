import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function Footer() {
  return (
    <View>
        <View style={styles.facebook}>
            <Image source={require('../assets/facebook.png')} style={{ width: 30, height:30, marginTop: 7, marginLeft: 8 }}/>
        </View>

        <View style={styles.twitter}>
            <Image source={require('../assets/twitter.png')} style={{ width: 30, height:30, marginTop: 7, marginLeft: 8 }}/>
        </View>

        <View style={styles.instagram}>
            <Image source={require('../assets/instagram.png')} style={{ width: 30, height:30, marginTop: 7, marginLeft: 8 }}/>
        </View>

        <View style={styles.tiktok}>
            <Image source={require('../assets/tiktok.png')} style={{ width: 30, height:30, marginTop: 7, marginLeft: 8 }}/>
        </View>

        <View style={styles.youtube}>
            <Image source={require('../assets/youtube.png')} style={{ width: 30, height:30, marginTop: 7, marginLeft: 8 }}/>
        </View>

        <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 50}}
/>

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
  },
  facebook: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    marginTop: -120,
    marginLeft: 50
  },
  twitter: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    marginTop: -52,
    marginLeft: 112
  },
  instagram: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    marginTop: -50,
    marginLeft: 174
  },
  tiktok: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    marginTop: -50,
    marginLeft: 236
  },
  youtube: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    marginTop: -50,
    marginLeft: 298
  },

});
