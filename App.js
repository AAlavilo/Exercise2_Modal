import React, {useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);  // a state variable to set visibility on different components

  const toggleVisibility = () => {                   // function for toggling visibility
    setIsVisible(!isVisible);                        // setIsVisible is a function that toggles the value it has been given
  };

  return (
    <View style={styles.centeredView}>
      {isVisible && (                                //  Here the 'Pressable' button is being rendered but only if isVisible is true.
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => toggleVisibility()}>        
          <Text style={styles.textStyle}>Show Modal Message</Text>
        </Pressable>
      )}

      
      <Modal                                        //  nothing special here. The "onRequestClose" is a function which is called when the user tries to close the modal
        animationType="slide"                       //  (like using the device's back button) 
        transparent={true}
        visible={!isVisible}
        onRequestClose={() => {
          toggleVisibility();
        }}>
        <View style={styles.modalView}>          
          <Text style={styles.modalText}>This is modal</Text>
          <Pressable onPress={() => toggleVisibility()}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
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
    top: 40,
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
