import React, { useState,useEffect } from 'react';
import {ScrollView,Text,View,TouchableOpacity,StyleSheet,SafeAreaView,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import InputTextField from '../../components/InputTextField'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SelectDropdown from 'react-native-select-dropdown';

import axios from 'axios';
import { Picker } from '@react-native-picker/picker';




const PurchaseOpenMode = ({navigation}) => {
    

const [lists,setLists] = useState([]);



const [value,setValue] = useState('');

const [userId,setUserId] = useState([]);

const view = () => {
    axios.get('http://192.168.1.2:5000/api/purchase').then(response => {
    setLists(response.data);
    // console.log(response.data);
    });
};

useEffect(() => {
    view();
}, []);


const searchbtn = () => {
   
    
        // axios.get('http://192.168.1.2:5000/api/purchase')
        // .then((res)=>{
        // setUserId(res.data);
        // console.log(res.data);
        // });
    
        if(supplierData){
          console.log(supplierData && supplierData.workorderno);
          setUserId(supplierData);
        }
  
 };

const supplierData = lists.find((obj)=>{
if(obj.supplier === value){
    return true;
}
return false;
})
 


  
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                        <Text style={styles.header_text}>Yarn Purchase</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Purchasemain')}>
                            <Icon style={styles.lo_icon} name="add-circle-outline" size={30} />
                        </TouchableOpacity>
                </View>
                            <View style={styles.contentContainer}>
                                <SafeAreaView>
                                    <View>
                                        <Text style={styles.text}>Supplier</Text>
                                         <Picker
                                            selectedValue={value}
                                            onValueChange={(itemValue) =>
                                                setValue(itemValue)
                                            }>
                                             <Picker.Item label="Select" value="Select" /> 
                                             {  lists.map((item, index) => {
                                                return (<Picker.Item
                                                        key={index}
                                                        label={`${item.supplier.toString()}`}
                                                        value={`${item.supplier}`} />)
                                                })}  
                                                 
                                            </Picker> 
                                    
                                        <SelectDropdown
                                            data={lists.map((list,index)=>{
                                                return(
                                                    list.supplier
                                                )
                                            })}
                                            onSelect={(selectedItem, index) => {
                                                console.log(selectedItem, index);
                                                }}
                                            defaultButtonText={'Select Supplier'}
                                            
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem;
                                            }}
                                            rowTextForSelection={(value, index) => {
                                            return value;
                                            }}
                                            buttonStyle={styles.dropdown2BtnStyle}
                                            buttonTextStyle={styles.dropdown2BtnTxtStyle}
                                            renderDropdownIcon={isOpened => {
                                            return <MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} color={'#1D2029'} size={18} />;
                                            }}
                                            dropdownIconPosition={'right'}
                                            dropdownStyle={styles.dropdown2DropdownStyle}
                                            rowStyle={styles.dropdown2RowStyle}
                                            rowTextStyle={styles.dropdown2RowTxtStyle}
                                            selectedRowStyle={styles.dropdown2SelectedRowStyle}
                                            search
                                            searchInputStyle={styles.dropdown2searchInputStyleStyle}
                                            searchPlaceHolder={'Search here'}
                                            searchPlaceHolderColor={'#1D2029'}
                                            renderSearchInputLeftIcon={() => {
                                            return <MaterialIcons name={'search'} color={'#1D2029'} size={18} />;
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>WorkOrder No</Text>
                                        <SelectDropdown
                                            data={supplierData && supplierData.workorderno}
                                            // defaultValueByIndex={1}
                                            // defaultValue={'supplier1'}
                                            onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index);
                                            }}
                                            defaultButtonText={'Select WorkOrder No'}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem;
                                            }}
                                            rowTextForSelection={(item, index) => {
                                            return item;
                                            }}
                                            buttonStyle={styles.dropdown2BtnStyle}
                                            buttonTextStyle={styles.dropdown2BtnTxtStyle}
                                            renderDropdownIcon={isOpened => {
                                            return <MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} color={'#1D2029'} size={18} />;
                                            }}
                                            dropdownIconPosition={'right'}
                                            dropdownStyle={styles.dropdown2DropdownStyle}
                                            rowStyle={styles.dropdown2RowStyle}
                                            rowTextStyle={styles.dropdown2RowTxtStyle}
                                            selectedRowStyle={styles.dropdown2SelectedRowStyle}
                                            search
                                            searchInputStyle={styles.dropdown2searchInputStyleStyle}
                                            searchPlaceHolder={'Search here'}
                                            searchPlaceHolderColor={'#1D2029'}
                                            renderSearchInputLeftIcon={() => {
                                            return <MaterialIcons name={'search'} color={'#1D2029'} size={18} />;
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Order No</Text>
                                        <SelectDropdown
                                            
                                            // defaultValueByIndex={1}
                                            // defaultValue={'supplier1'}
                                            onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index);
                                            }}
                                            defaultButtonText={'Select Order No'}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem;
                                            }}
                                            rowTextForSelection={(item, index) => {
                                            return item;
                                            }}
                                            buttonStyle={styles.dropdown2BtnStyle}
                                            buttonTextStyle={styles.dropdown2BtnTxtStyle}
                                            renderDropdownIcon={isOpened => {
                                            return <MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} color={'#1D2029'} size={18} />;
                                            }}
                                            dropdownIconPosition={'right'}
                                            dropdownStyle={styles.dropdown2DropdownStyle}
                                            rowStyle={styles.dropdown2RowStyle}
                                            rowTextStyle={styles.dropdown2RowTxtStyle}
                                            selectedRowStyle={styles.dropdown2SelectedRowStyle}
                                            search
                                            searchInputStyle={styles.dropdown2searchInputStyleStyle}
                                            searchPlaceHolder={'Search here'}
                                            searchPlaceHolderColor={'#1D2029'}
                                            renderSearchInputLeftIcon={() => {
                                            return <MaterialIcons name={'search'} color={'#1D2029'} size={18} />;
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.text}>Receipt No</Text>
                                        <SelectDropdown
                                            
                                            // defaultValueByIndex={1}
                                            // defaultValue={'supplier1'}
                                            onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index);
                                            }}
                                            defaultButtonText={'Select Receipt No'}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem;
                                            }}
                                            rowTextForSelection={(item, index) => {
                                            return item;
                                            }}
                                            buttonStyle={styles.dropdown2BtnStyle}
                                            buttonTextStyle={styles.dropdown2BtnTxtStyle}
                                            renderDropdownIcon={isOpened => {
                                            return <MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} color={'#1D2029'} size={18} />;
                                            }}
                                            dropdownIconPosition={'right'}
                                            dropdownStyle={styles.dropdown2DropdownStyle}
                                            rowStyle={styles.dropdown2RowStyle}
                                            rowTextStyle={styles.dropdown2RowTxtStyle}
                                            selectedRowStyle={styles.dropdown2SelectedRowStyle}
                                            search
                                            searchInputStyle={styles.dropdown2searchInputStyleStyle}
                                            searchPlaceHolder={'Search here'}
                                            searchPlaceHolderColor={'#1D2029'}
                                            renderSearchInputLeftIcon={() => {
                                            return <MaterialIcons name={'search'} color={'#1D2029'} size={18} />;
                                            }}
                                        />
                                    </View>
                                    <View style={styles.date_container}>
                                        <View>
                                            <Text style={styles.date_title}>From</Text>
                                            <TextInput 
                                                placeholder="DD/MM/YYYY"
                                                style={styles.date_input}>
                                            </TextInput>
                                        </View>
                                        <View>
                                            <Text style={styles.date_title}>To</Text>
                                            <TextInput 
                                                placeholder="DD/MM/YYYY"
                                                style={styles.date_input}>
                                            </TextInput>
                                        </View>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={styles.clearButton}>
                                            <Text style={[styles.text,{color:"#ffff",fontWeight:"600",fontSize:16}]}>Clear</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.searchButton} onPress={searchbtn}>
                                            <Text style={[styles.text,{color:"#ffff",fontWeight:"600",fontSize:16}]}>Search</Text>
                                        </TouchableOpacity>
                                    </View>
                                </SafeAreaView>
                            </View>    
                <View style={styles.footer}>
                    <Text style={styles.footer_text}>Records</Text>
                    <TouchableOpacity>
                        <Icon style={styles.lo_icon} name="delete-outline" size={30} />
                    </TouchableOpacity>
                </View>
                <View style={styles.recordContainer}>
                    <ScrollView>
                   
                          
                            
                                    <TouchableOpacity  onPress={()=>{
                                        navigation.navigate('Purchaserecordedit', {
                                            supplier: userId})}}>
                                    <View  style={styles.recordBack}>
                                    
                                       
                                    <View>
                                    <Text style={styles.text}>Date</Text>
                                    <Text style={styles.text}>22/07/22</Text>
                                    </View>
                                    <View>
                                    <Text style={styles.text}>Record No</Text>
                                    <Text style={styles.text}>{userId.workorderno}</Text>
                                    </View>
                                    <View>
                                    <Text style={styles.text}>Supplier</Text>
                                    <Text style={styles.text}>{userId.supplier}</Text>
                                    </View>
                                    </View>
                                
                                    </TouchableOpacity>
                                
                           
                                    
                    </ScrollView>
                </View>
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
    lo_icon:{
        color:"#03045E",
        marginTop:8,
        marginBottom:8,
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
    dropdown2BtnStyle: {
        width:'auto',
        marginVertical:5,
        backgroundColor: "#c0e6ed",
        borderRadius: 5,
        shadowColor: "#0077B6",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    dropdown2BtnTxtStyle: {
        color: '#1D2029',
        textAlign:"left",
        fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
        backgroundColor: '#1D2029',
        borderRadius: 12,
    },
    dropdown2RowStyle: {backgroundColor: '#ffff', borderBottomColor: '#f2f2f2'},
    dropdown2RowTxtStyle: {
        color: '#1D2029',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    dropdown2SelectedRowStyle: {backgroundColor: "#c0e6ed"},
    dropdown2searchInputStyleStyle: {
        backgroundColor: '#ffff',
        borderBottomWidth: 1,
        borderBottomColor: '#c0e6ed',
    },
    date_container:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    date_title:{
        color:"#1D2029",
        fontSize:13,
        fontWeight:"600",
    },
    date_input:{
        paddingHorizontal:10,
        color:"#1D2029",
        fontSize:16,
        borderRadius:5,
        borderWidth:1,
        backgroundColor:"#c0e6ed",
        borderColor:"#90E0EF",
        shadowColor: "#0077B6",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 8,
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
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
        elevation: 10,
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
        elevation: 10,
    },
    footer_text:{
        marginTop:8,
        marginBottom:7,
        fontSize:15,
        fontWeight:"700",
        color:"#1D2029",
    },
    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#00B4D8",
        paddingHorizontal:20,
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
    },
    recordContainer:{
        marginHorizontal:14,
        marginVertical:10,
    },
    recordBack:{
        flexDirection:"row",
        backgroundColor:"#c0e6ed",
        borderWidth:1,
        borderColor:"#90E0EF",
        justifyContent:"space-evenly",
        paddingVertical:5,
        marginVertical:5,
        borderRadius:5,
    },
})

export default PurchaseOpenMode;
