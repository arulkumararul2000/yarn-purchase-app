import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,TextInput,Alert
} from 'react-native';
// import InputTextField from '../../components/InputTextField';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');


  const Login = async() =>{
    
    if(username == '' || password == '' ||company == '' || branch == '' || year == ""){
       Alert.alert('Please fill the details...');
       return;
    }
   try{
     const resp = await Axios.post('http://192.168.1.3:5000/api/signin',{
        username,password,company,branch,year
    });
    if(resp.data.error){
        alert(resp.data.error);
        console.log(resp.data.error);
    }else{
    console.log(resp.data);
        // await AsyncStorage.setItem("token",JSON.stringify(resp.data));
        navigation.navigate('Menu');
    }
  
   }catch(err){
    alert(err);
    console.log(err);
   }  
}

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Set')}>
            <Icon style={styles.icon} name="settings" size={29} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={styles.Image}
              source={require('../../images/wins-soft.png')}
            />
            <Text
              style={[
                styles.text,
                {marginTop: 20, fontSize: 18, fontWeight: '500'},
              ]}>
              YARN PURCHASE
            </Text>
          </View>

          <View>
          <Text style={styles.inputTitle}>UserName</Text>
          <TextInput style={styles.input} value={username} onChangeText={text=>setUsername(text)}  />
            
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true}  value={password} onChangeText={text=>setPassword(text)}  />
              <Text style={styles.inputTitle}>Company</Text>
              <TextInput style={styles.input} value={company} onChangeText={text=>setCompany(text)}  />
              <Text style={styles.inputTitle}>Branch</Text>
              <TextInput style={styles.input} value={branch} onChangeText={text=>setBranch(text)}  />
              <Text style={styles.inputTitle}>Year</Text>
              <TextInput style={styles.input} value={year} onChangeText={text=>setYear(text)}  />

            <TouchableOpacity style={styles.submitContainer} onPress={Login}>
              <Text
                style={[
                  styles.text,
                  {color: '#ffff', fontWeight: '600', fontSize: 16},
                ]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  header: {},
  title: {
    color: '#1D2029',
  },
  text: {
    color: '#1D2029',
  },
  icon: {
    marginLeft: 15,
    marginTop: 14,
    color: '#03045E',
  },
  submitContainer: {
    backgroundColor: '#0077B6',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0077B6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  footer: {},
  input:{
    paddingHorizontal:13,
    paddingVertical:5,
    color:"#1D2029",
    fontSize:16,
    borderWidth:1,
    borderRadius:5,
    backgroundColor:"#c0e6ed",
    borderColor:"#90E0EF",
    shadowColor: "#0077B6",
    shadowOffset: {width: 0,height: 5,},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 8,
},  
inputTitle:{
  color:"#0077B6",
  fontSize:16,
  fontWeight:"800",
  marginTop:15,
  marginBottom:5
},
});

export default Login;


