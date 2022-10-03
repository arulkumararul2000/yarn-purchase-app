import React, { Component } from 'react';
import {ScrollView,Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Menu = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>

                <View style={styles.header}>
                    <Text style={styles.text}>Admin - Admin</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Icon style={styles.lo_icon} name="logout" size={26} />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.shape_container}>
                    <TouchableOpacity style={styles.shape} onPress={() => navigation.navigate('PurchaseOpenMode')}>
                        <Icon style={styles.icon} name="shopping-cart" size={40} />
                        <Text style={styles.icon_text}>Purchase Receipt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shape} onPress={() => navigation.navigate('Returnopenmode')}>
                        <Icon style={styles.icon} name="storefront" size={40} />
                        <Text style={styles.icon_text}>Return Receipt</Text>
                    </TouchableOpacity>
                </View>
            
            </View>    
            
            <View style={styles.footer}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1 
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#00B4D8",
        paddingHorizontal:30,
        marginBottom:50,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,
    },
    lo_icon:{
        color:"#03045E",
        marginTop:16,
        marginBottom:16,
    },
    text:{
        marginTop:24,
        marginBottom:7,
        fontSize:13,
        fontWeight:"700",
        color:"#1D2029",
    },
    shape_container:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingHorizontal:20,
        marginTop:200,
        marginBottom:30
    },
    shape:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#00B4D8",
        width: 130,
        height: 130,
        borderRadius:15,
        margin:10,
        shadowColor: "#0077B6",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    icon:{
        color:'#03045E',
    },
    icon_text:{
        fontSize:14,
        color:"#1D2029",
        fontWeight:"500",
        textAlign:"center",
        paddingHorizontal:20
    },
    footer:{
        height: 94,
        backgroundColor:"#00B4D8",
        paddingHorizontal:30,
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
    },
})

export default Menu;
