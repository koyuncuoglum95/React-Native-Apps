import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

export default function Second() {
  return (
    <View>
        <Text style={styles.text1}>Coming Soon</Text>
        <Text style={styles.text2}>Get Notified</Text>
        <Text style={styles.text3}>When We Luanch</Text>

        <View>
            <TextInput style={styles.input}></TextInput>
        </View>

        <TouchableOpacity>
            <Text style={{backgroundColor: 'black', color: 'white', width: 120, height: 31, borderRadius: 20, marginLeft: 222, marginTop: -47, fontSize: 20}}>   Notify Me</Text>
         </TouchableOpacity>

         <Text style={{textAlign:'center'}}>*Don't worry, we won't spam you</Text>

        <View>
            <Image source={require('../assets/landing-image-2.png')} resizeMode='contain' style={{ width: 350, marginTop: -120, marginLeft: 20}}/>
        </View>

  
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: -80,
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 300,
    marginLeft: 47
  },

});
