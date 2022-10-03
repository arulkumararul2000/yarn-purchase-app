import React from "react";
import { StyleSheet,View,Text,TextInput } from "react-native";

export default function InputTextField({
   title, value,placeholderText,isSecure,onChangeText,props
}){

    return(
            <View>
                <Text style={styles.inputTitle}>{title}</Text>
                <TextInput 
                    placeholder={placeholderText}
                    secureTextEntry={isSecure}
                    onChangeText={onChangeText}
                    value={value}
                    style={styles.input}
                    {...props}>
                    
                </TextInput>
            </View>
    )
    
}

const styles = StyleSheet.create({
    inputTitle:{
        color:"#0077B6",
        fontSize:16,
        fontWeight:"800",
        marginTop:15,
        marginBottom:5
    },
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
    }
})