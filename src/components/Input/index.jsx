import React from 'react';
import {TextInput, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    input: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        color: '#000',
    }
});
 
const Input = ({placeholder, onChangeText, value}) => {
    return (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          onChangeText={onChangeText}
          value={value}
        />
    );
}

 
export default Input;