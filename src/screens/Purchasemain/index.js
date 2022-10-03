import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import {DataTable} from 'react-native-paper';

const Purchasemain = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const [warehouse, setWarehouse] = useState('');
  const [supplier, setSupplier] = useState('');
  const [address, setAddress] = useState('');
  const [workorderno, setWorkorderno] = useState('');
  const [orderno, setOrderno] = useState('');
  const [gatepass, setGatepass] = useState('');
  const [dcno, setDcno] = useState('');
  const [date, setDate] = useState('');
  const [lists, setLists] = useState([]);


  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const Add = (event) => {
    event.preventDefault();
    axios
      .post('http://192.168.1.2:5000/api/purchase', {
        warehouse: warehouse,
        supplier: supplier,
        address: address,
        workorderno: workorderno,
        orderno: orderno,
        gatepass: gatepass,
        dcno: dcno,
        date: date,
      })
      .then(result => {
        alert(result.data);
        console.log(result.data);
      })
      .catch(err => {
        alert(err.response.data);
      });
  };

  const view = () => {
    axios.get('http://192.168.1.2:5000/api/purchase').then(response => {
      setLists(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    view();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Yarn Purchase</Text>
          <View style={{marginTop: 10, marginBottom: 5}}>
            <Text style={styles.dataText}>WSI/22-23/0000001</Text>
            <Text style={styles.dataText}>01/01/22</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <SafeAreaView>
            <View>
              <Text style={styles.text}>Warehouse</Text>
              <TextInput
                style={styles.date_input}
                value={warehouse}
                onChangeText={text => setWarehouse(text)}
                placeholder="Warehouse"
              />
            </View>
            <View>
              <Text style={styles.text}>Supplier</Text>
              <TextInput
                style={styles.date_input}
                value={supplier}
                onChangeText={text => setSupplier(text)}
                placeholder="Supplier"
              />
            </View>
            <View>
              <Text style={styles.date_title}>Address</Text>
              <TextInput
                style={styles.date_input}
                value={address}
                onChangeText={text => setAddress(text)}
                placeholder="Address"
              />
            </View>
            <View>
              <Text style={styles.text}>WorkOrder No</Text>
              <TextInput
                style={styles.date_input}
                value={workorderno}
                onChangeText={text => setWorkorderno(text)}
                placeholder="WorkOrder No"
              />
            </View>
            <View>
              <Text style={styles.text}>Order No</Text>
              <TextInput
                style={styles.date_input}
                value={orderno}
                onChangeText={text => setOrderno(text)}
                placeholder="Order No"
              />
            </View>
            <View>
              <Text style={styles.text}>GatePass No</Text>
              <TextInput
                style={styles.date_input}
                value={gatepass}
                onChangeText={text => setGatepass(text)}
                placeholder="GatePass No"
              />
            </View>
            <View style={styles.date_container}>
              <View>
                <Text style={styles.date_title}>Dc No</Text>
                <TextInput
                  placeholder="Enter Dc No"
                  keyboardType="numeric"
                  value={dcno}
                  onChangeText={text => setDcno(text)}
                  style={styles.date_input}
                />
              </View>
              <View>
                <Text style={styles.date_title}>Date</Text>
                <TextInput
                  keyboardType="birthdate-full"
                  placeholder="DD/MM/YYYY"
                  value={date}
                  onChangeText={text => setDate(text)}
                  style={styles.date_input}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.clearButton}>
                <Text
                  style={[
                    styles.text,
                    {color: '#ffff', fontWeight: '600', fontSize: 16},
                  ]}>
                  Save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.searchButton} onPress={Add}>
                <Text
                  style={[
                    styles.text,
                    {color: '#ffff', fontWeight: '600', fontSize: 16},
                  ]}
                  >
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
        <ScrollView horizontal>
          <View>
            <DataTable>
            <View style={styles.footer}>
            <CheckBox
            style={{marginLeft:5,marginTop:10}}
            disabled={false}
            value={isChecked}
            onValueChange={(newValue) => setIsChecked(newValue)}
           
            tintColors={{true: '#FF810D'}}
             />
              <DataTable.Header style={{marginVertical:0}}>
                <DataTable.Title style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginRight:10,paddingVertical:10}}>S.No</DataTable.Title>
                <DataTable.Title style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginRight:40,marginLeft:5,paddingVertical:10}}>Warehouse</DataTable.Title>
                <DataTable.Title style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginRight:40,marginLeft:30,paddingVertical:10}}>Supplier</DataTable.Title>
                <DataTable.Title style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginRight:40,marginLeft:40,paddingVertical:10}}>Address</DataTable.Title>
                <DataTable.Title style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginRight:50,marginLeft:90,paddingVertical:10}}>WorkOrderNo</DataTable.Title>
                <DataTable.Title style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginRight:40,marginLeft:70,paddingVertical:10}}>OrderNo</DataTable.Title>
                <DataTable.Title style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginRight:40,marginLeft:70,paddingVertical:10}}>GatePass</DataTable.Title>
                <DataTable.Title style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginRight:40,marginLeft:70,paddingVertical:10}}>DC No</DataTable.Title>
                <DataTable.Title style={{color:"#1D2022",fontSize:12,fontWeight:"700",marginRight:40,marginLeft:70,paddingVertical:10}}>Date</DataTable.Title>
              </DataTable.Header>
              </View>
              
              {lists.map((list,index)=>{  return(
            <View style={styles.recordContainer} key={index}>   
            <View style={styles.recordBack}>
              
                <CheckBox 
                style={{marginTop:5,marginBottom:5,marginLeft:5}}
                disabled={false}
                value={isChecked}
                onChange={handleOnChange}
                tintColors={{true: '#FF810D'}}
                />
                <DataTable.Row>
                <DataTable.Cell style={{color:"#1D2022",fontSize:10,marginRight:10,marginLeft:8}}>1</DataTable.Cell>
                <DataTable.Cell style={{fontSize:10,marginRight:20,marginLeft:15}}>{list.warehouse}</DataTable.Cell>
                <DataTable.Cell style={{color:"#1D2022",fontSize:10,marginRight:10,marginLeft:20}}>{list.supplier}</DataTable.Cell>
                <DataTable.Cell style={{color:"#1D2022",fontSize:10,marginRight:50,marginLeft:50}}>{list.address}</DataTable.Cell>
                <DataTable.Cell style={{color:"#1D2022",fontSize:10,marginRight:40,marginLeft:20}}>{list.workorderno}</DataTable.Cell>
                <DataTable.Cell style={{color:"#1D2022",fontSize:10,marginRight:40,marginLeft:20}}>{list.orderno}</DataTable.Cell>
                <DataTable.Cell style={{color:"#1D2022",fontSize:10,marginRight:40,marginLeft:20}}>{list.gatepass}</DataTable.Cell>
                <DataTable.Cell style={{color:"#1D2022",fontSize:10,marginRight:40,marginLeft:20}}>{list.dcno}</DataTable.Cell>
                <DataTable.Cell style={{color:"#1D2022",fontSize:10,marginRight:40,marginLeft:50}}>{list.date}</DataTable.Cell>
                </DataTable.Row>
               
            
            </View>     
              
            </View>)  })}
              
             

            </DataTable>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#00B4D8',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  lo_icon: {
    color: '#03045E',
    marginTop: 8,
    marginBottom: 8,
  },
  header_text: {
    marginTop: 18,
    marginBottom: 7,
    fontSize: 13,
    fontWeight: '700',
    color: '#1D2029',
  },
  dataText: {
    color: '#1D2029',
    textAlign: 'right',
    fontWeight: '700',
    fontSize: 11,
  },
  text: {
    color: '#1D2029',
    fontWeight: '600',
    fontSize: 13,
  },
  dropdown2BtnStyle: {
    width: 'auto',
    marginVertical: 5,
    backgroundColor: '#c0e6ed',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#90E0EF',
    shadowColor: '#0077B6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#1D2029',
    textAlign: 'left',
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
  dropdown2SelectedRowStyle: {backgroundColor: '#c0e6ed'},
  dropdown2searchInputStyleStyle: {
    backgroundColor: '#ffff',
    borderBottomWidth: 1,
    borderBottomColor: '#c0e6ed',
  },
  date_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date_title: {
    color: '#1D2029',
    fontSize: 13,
    fontWeight: '600',
  },
  date_input: {
    paddingHorizontal: 10,
    color: '#1D2029',
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#c0e6ed',
    borderColor: '#90E0EF',
    shadowColor: '#0077B6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    width: '40%',
    backgroundColor: '#0077B6',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginVertical: 15,
    shadowColor: '#0077B6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 8,
  },
  searchButton: {
    width: '40%',
    backgroundColor: '#0077B6',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginVertical: 15,
    shadowColor: '#0077B6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#00B4D8',
  },
  recordBack: {
    flexDirection: 'row',
    backgroundColor: '#c0e6ed',
    borderWidth: 1,
    borderColor: '#90E0EF',
    marginVertical: 5,
  },
});

export default Purchasemain;
