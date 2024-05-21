import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    resultText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    }
});

const ResultText = ({ text }) => {
    return (
        <Text style={styles.resultText}>{text}</Text>
    );
}

export default ResultText; 