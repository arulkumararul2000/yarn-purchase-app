import React, { Component } from 'react';
import {Image,ScrollView,Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import InputTextField from '../../components/InputTextField';


const Set = ({navigation}) => {
  return(
    <ScrollView >  
      <View style={styles.container}>
        <View style={{marginTop:60,alignItems:"center",justifyContent:"center",}}>
          <Image style={styles.Image} source={require("../../images/wins-soft.png")}/>
          <Text style={[styles.text,{marginTop:40, fontSize:22, fontWeight:"500"}]}>Select ERP</Text>
        </View>

        <View>
          <InputTextField title="Name of ERP" placeholderText='Enter ERP Name'></InputTextField>
          <InputTextField style={{marginTop:30,}}title="IP Address" placeholderText='Enter IP Address'></InputTextField>

          <TouchableOpacity style={styles.submitContainer} onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.text,{color:"#ffff",fontWeight:"600",fontSize:20}]}>Set</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:30,
    marginBottom:50
  },
  title:{
    color:"#1D2029",
  },
  text:{
    color:"#1D2029"
  },
  submitContainer:{
    backgroundColor:"#0077B6",
    borderRadius:10,
    paddingVertical:10,
    marginTop:35,
    marginHorizontal:20,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#0077B6",
    shadowOffset: {width: 0,height: 5,},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  }
})

export default Set;
