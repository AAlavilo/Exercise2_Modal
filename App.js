import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

export default function App() {
  const [showOriginal, setShowOriginal] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleVisibility = () => {
    setShowOriginal(!showOriginal);
  };
  
  return (
    <View style={styles.centeredView}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalVisible(true);
          toggleVisibility();
        }}>
        <Text style={styles.textStyle}>Show Modal Message</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
          toggleVisibility();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal</Text>
            <Pressable
              onPress={() => {
                setModalVisible(true);
                toggleVisibility();
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    position: 'absolute',
    top: 60,
    backgroundColor: 'lightgrey',
    padding: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
