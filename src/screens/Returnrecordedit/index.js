import React, { Component,useState } from 'react';
import {ScrollView,Text,View,TouchableOpacity,StyleSheet,SafeAreaView,TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InputTextField from '../../components/InputTextField'
import CheckBox from '@react-native-community/checkbox';
import SelectDropdown from 'react-native-select-dropdown';

const warehouse = ["warehouse1", "warehouse2", "warehouse3", "warehouse4"]
const supplier = ["supplier1", "supplier2", "supplier3", "supplier4"]
const workorder_no = ["workorder no1", "workorder no2", "workorder no3", "workorder no4"]
const return_no = ["return no1", "return no2", "return no3", "return no4"]
const gatepass_no = ["gatepass no1", "gatepass no2", "gatepass no3", "gatepass no4"]




const Returnrecordedit = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                            <TouchableOpacity style={styles.iconBack}>
                                <MaterialIcons style={styles.lo_icon} name="edit" size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconBack}>
                                <MaterialIcons style={styles.lo_icon} name="delete-outline" size={21} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconBack}>
                                <MaterialIcons style={styles.lo_icon} name="content-paste" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:10,marginBottom:5}}>
                            <Text style={styles.dataText}>WSI/22-23/0000001</Text>
                            <Text style={styles.dataText}>01/01/22</Text>
                        </View>
                    </View>
                        <View style={styles.contentContainer}>
                            <SafeAreaView>
                            <View>
                                <Text style={styles.text}>Warehouse</Text>
                                <SelectDropdown
                                    data={warehouse}
                                    // defaultValueByIndex={1}
                                    // defaultValue={'supplier1'}
                                    onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                    }}
                                    defaultButtonText={'Select Warehouse'}
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
                                    <Text style={styles.text}>Supplier</Text>
                                    <SelectDropdown
                                        data={supplier}
                                        // defaultValueByIndex={1}
                                        // defaultValue={'supplier1'}
                                        onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                        }}
                                        defaultButtonText={'Select Supplier'}
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
                                    <Text style={styles.date_title}>Address</Text>
                                    <TextInput 
                                        placeholder="Enter Address"
                                        style={styles.date_input}>
                                    </TextInput>
                                </View>
                                <View>
                                    <Text style={styles.text}>WorkOrder No</Text>
                                    <SelectDropdown
                                        data={workorder_no}
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
                                    <Text style={styles.text}>Return No</Text>
                                    <SelectDropdown
                                        data={return_no}
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
                                    <Text style={styles.text}>GatePass No</Text>
                                    <SelectDropdown
                                        data={gatepass_no}
                                        // defaultValueByIndex={1}
                                        // defaultValue={'supplier1'}
                                        onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index);
                                        }}
                                        defaultButtonText={'Select GatePass No'}
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
                                        <Text style={styles.date_title}>Dc No</Text>
                                        <TextInput 
                                            placeholder="Enter Dc No"
                                            keyboardType="numeric"
                                            style={styles.date_input}>
                                        </TextInput>
                                    </View>
                                    <View>
                                        <Text style={styles.date_title}>Date</Text>
                                        <TextInput 
                                            placeholder="DD/MM/YYYY"
                                            style={styles.date_input}>
                                        </TextInput>
                                    </View>
                                </View>
                            </SafeAreaView>
                        </View>   
                    <ScrollView horizontal>
                        <View>
                            <View style={styles.footer}>
                                    <CheckBox
                                    style={{marginTop:5,marginBottom:5,marginLeft:5}}
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    tintColors={{true: '#FF810D'}}
                                />
                                <Text style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginVertical:10,marginRight:20,marginLeft:5}}>S.No</Text>
                                <Text style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginVertical:10,marginRight:40}}>WorkOrder No</Text>
                                <Text style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginVertical:10,marginRight:20}}>Order No</Text>
                                <Text style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginVertical:10,marginRight:20}}>Return No</Text>
                                <Text style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginVertical:10,marginRight:20}}>Count</Text>
                            </View>
                            <View style={styles.recordContainer}>
                                <View style={styles.recordBack}>
                                        <CheckBox
                                        style={{marginTop:5,marginBottom:5,marginLeft:5}}
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                        tintColors={{true: '#FF810D'}}
                                        />
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:20,marginLeft:20}}>1</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:10}}>WSI/22-23/0000001</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:40}}>4455661</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>2233441</Text>
                                        </View>
                                        <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>10</Text>
                                        </View>
                                    </View>
                                    <View style={styles.recordBack}>
                                        <CheckBox
                                        style={{marginTop:5,marginBottom:5,marginLeft:5}}
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                        tintColors={{true: '#FF810D'}}
                                        />
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:20,marginLeft:20}}>1</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:10}}>WSI/22-23/0000001</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:40}}>4455661</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>2233441</Text>
                                        </View>
                                        <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>50</Text>
                                        </View>
                                    </View>
                                    <View style={styles.recordBack}>
                                        <CheckBox
                                        style={{marginTop:5,marginBottom:5,marginLeft:5}}
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                        tintColors={{true: '#FF810D'}}
                                        />
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:20,marginLeft:20}}>1</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:10}}>WSI/22-23/0000001</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:40}}>4455661</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>2233441</Text>
                                        </View>
                                        <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>60</Text>
                                        </View>
                                    </View>
                                    <View style={styles.recordBack}>
                                        <CheckBox
                                        style={{marginTop:5,marginBottom:5,marginLeft:5}}
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                        tintColors={{true: '#FF810D'}}
                                        />
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:20,marginLeft:20}}>1</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:10}}>WSI/22-23/0000001</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:40}}>4455661</Text>
                                        </View>
                                        <View>
                                            <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>2233441</Text>
                                        </View>
                                        <View>
                                        <Text style={{color:"#1D2022",fontSize:10,marginVertical:10,marginRight:50}}>40</Text>
                                        </View>
                                    </View>
                            </View>
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
        width:"100%",
        justifyContent:"space-between",
        flexDirection:"row",
        backgroundColor:"#00B4D8",
        paddingHorizontal:20,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,
    },
    iconBack:{
        height:35,
        width:35,
        backgroundColor:"#c0e6ed",
        borderRadius:5,
        alignItems:"center",
        marginVertical:10,
        marginHorizontal:5
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
    dataText:{
        color:"#1D2029",
        textAlign:"right",
        fontWeight:"700",
        fontSize:11,
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
        borderWidth:1,
        borderColor:"#90E0EF",
        shadowColor: "#0077B6",
        shadowOffset: {width: 0,height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 8,
    },
    dropdown2BtnTxtStyle: {
        color: '#1D2029',
        textAlign:"left",
        fontWeight:"bold"
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

export default Returnrecordedit;
