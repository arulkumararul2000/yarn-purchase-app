import React, { Component,useState } from 'react';
import {ScrollView,Text,View,TouchableOpacity,StyleSheet,SafeAreaView,TextInput} from 'react-native';


const Purchaseeditentry = ({navigation}) => {

        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.header_text}>Yarn Receipt Details</Text>
                        <Text style={[styles.text,{fontSize:10,paddingTop:20}]}>Edit Entry</Text>
                    </View>
                        <View style={styles.contentContainer}>
                            <View style={styles.detailsContainer}>
                                <View>
                                    <Text style={styles.text}>Quantity</Text>
                                    <View style={styles.detailsText}>
                                        <Text style={styles.text}>1</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.text}>Lot No</Text>
                                    <View style={styles.detailsText}>
                                        <Text style={styles.text}>445</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.detailsContainer}>
                                <View>
                                    <Text style={styles.text}>Wt/Pack</Text>
                                    <View style={styles.detailsText}>
                                        <Text style={styles.text}>60.300</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.text}>No. of Cones/Pack</Text>
                                    <View style={styles.detailsText}>
                                        <Text style={styles.text}>30</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.detailsContainer}>
                                <View>
                                    <Text style={styles.text}>Single Cone/Wt</Text>
                                    <View style={styles.detailsText}>
                                        <Text style={styles.text}>2.010</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.text}>No. of Pack</Text>
                                    <View style={styles.detailsText}>
                                        <Text style={styles.text}>1</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.valuesText}>Exists Values</Text>
                                <View style={styles.valuesBackground}>
                                    <View style={styles.valuesRow}>
                                        <View style={{alignItems:"flex-start"}}>
                                            <Text style={styles.values}>Order With Ex</Text>
                                            <Text style={styles.values}>44</Text>
                                        </View>
                                        <View style={{alignItems:"flex-start"}}>
                                            <Text style={styles.values}>Balance</Text>
                                            <Text style={styles.values}>0</Text>
                                        </View>
                                    </View>
                                    <View style={{justifyContent:"space-evenly"}}>
                                        <View style={{flexDirection:"row",height:35,}}>
                                            <View style={styles.line}></View>
                                        </View>
                                        <View style={{flexDirection:"row",height:35}}>
                                            <View style={styles.line}></View>
                                        </View>
                                    </View>
                                    <View style={styles.valuesRow}>
                                        <View style={{alignItems:"center"}}>
                                            <Text style={styles.values}>Now Received</Text>
                                            <Text style={styles.values}>0</Text>
                                        </View>
                                        <View style={{alignItems:"center"}}>
                                            <Text style={styles.values}>Ex Rec%</Text>
                                            <Text style={styles.values}>0</Text>
                                        </View>
                                    </View>
                                    <View style={{justifyContent:"space-evenly"}}>
                                        <View style={{flexDirection:"row",height:35,}}>
                                            <View style={styles.line}></View>
                                        </View>
                                        <View style={{flexDirection:"row",height:35}}>
                                            <View style={styles.line}></View>
                                        </View>
                                    </View>
                                    <View style={styles.valuesRow}>
                                        <View style={{alignItems:"flex-end"}}>
                                            <Text style={styles.values}>Balance</Text>
                                            <Text style={styles.values}>11</Text>
                                        </View>
                                        <View style={{alignItems:"flex-end"}}>
                                            <Text style={styles.values}>Bal With Ex%</Text>
                                            <Text style={styles.values}>22</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.clearButton}>
                                    <Text style={[styles.text,{color:"#ffff",fontWeight:"600",fontSize:16}]}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.searchButton}>
                                    <Text style={[styles.text,{color:"#ffff",fontWeight:"600",fontSize:16}]}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>   
                    <ScrollView>
                        <View>
                            <View style={styles.footer}>
                                <Text style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginVertical:10,marginRight:20,marginLeft:15}}>S.No</Text>
                                <Text style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginVertical:10,marginRight:45}}>Pack Type</Text>
                                <Text style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginVertical:10,marginRight:20}}>Lot No</Text>
                                <Text style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginVertical:10,marginRight:20}}>Pack No</Text>
                                <Text style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginVertical:10,marginRight:20}}>No of Packs</Text>
                            </View>
                            <View style={styles.recordContainer}>
                                <View style={styles.recordBack}>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:20,marginLeft:20}}>1</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:20}}>WSI/22-23/0000001</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:40}}>44556</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:80}}>45</Text>
                                    </View>
                                    <View>
                                    <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>1</Text>
                                    </View>
                                </View>
                                <View style={styles.recordBack}>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:20,marginLeft:20}}>1</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:20}}>WSI/22-23/0000001</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:40}}>44556</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:80}}>45</Text>
                                    </View>
                                    <View>
                                    <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>1</Text>
                                    </View>
                                </View>
                                <View style={styles.recordBack}>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:20,marginLeft:20}}>1</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:20}}>WSI/22-23/0000001</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:40}}>44556</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:80}}>45</Text>
                                    </View>
                                    <View>
                                    <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>1</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.clearButton} onPress={() => navigation.navigate('Menu')}>
                                    <Text style={[styles.text,{color:"#ffff",fontWeight:"600",fontSize:16}]}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Menu')}>
                                    <Text style={[styles.text,{color:"#ffff",fontWeight:"600",fontSize:16}]}>Apply</Text>
                                </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        marginVertical:10,
        marginHorizontal:20,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#00B4D8",
        paddingHorizontal:20,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,
    },
    header_text:{
        marginTop:18,
        marginBottom:7,
        fontSize:13,
        fontWeight:"700",
        color:"#1D2029",
    },
    text:{
        color:"#1D2029",
        fontWeight:"600",
        fontSize:13,
    },
    detailsContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    detailsText:{
        width:150,
        backgroundColor:"#c0e6ed",
        borderWidth:1,
        alignItems:"center",
        borderRadius:5,
        paddingVertical:10,
        borderColor:"#90E0EF",
        marginVertical:5,
        marginBottom:5
    },
    valuesText:{
        color:"#1D2029",
        fontWeight:"600",
        fontSize:13,
        marginVertical:5,
    },
    valuesBackground:{
        width:"100%",
        height:"auto",
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"#c0e6ed",
        borderWidth:1,
        borderRadius:5,
        borderColor:"#90E0EF"
    },
    valuesRow:{
        flexDirection:"column",
        justifyContent:"space-evenly",
        paddingVertical:10,
        paddingHorizontal:10
    }, 
    values:{
        color:"#1D2029",
        fontWeight:"600",
        fontSize:12,
    },
    line:{
        borderWidth:0.7,
        borderColor:"#1D2022",
        backgroundColor:"#1D2022",
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
    },
    clearButton:{
        width:'40%',
        backgroundColor:"#0077B6",
        borderRadius:10,
        paddingVertical:8,
        alignItems:'center',
        marginVertical:15,
        shadowColor: "#0077B6",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 8,
    },
    searchButton:{
        width:'40%',
        backgroundColor:"#0077B6",
        borderRadius:10,
        paddingVertical:8,
        alignItems:'center',
        marginVertical:15,
        shadowColor: "#0077B6",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 8,
    },
    footer:{
        flexDirection:"row",
        justifyContent:"flex-start",
        backgroundColor:"#00B4D8",
    },
    recordBack:{
        flexDirection:"row",
        backgroundColor:"#c0e6ed",
        borderWidth:1,
        borderColor:"#90E0EF",
        marginVertical:5,
    },
})

export default Purchaseeditentry;
