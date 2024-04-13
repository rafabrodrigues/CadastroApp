import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({text, backgroundColor}) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: backgroundColor,
            padding: 10,
            borderRadius: 5,
            marginTop: 5,
            alignItems: 'center',
        },
    
        textButton: {
            color: 'white',
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
        },
    });

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;