import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/Input';
import Button from './src/components/Button';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Input placeholder='Digite o Nome...' />
        <Input placeholder='Digite o Telefone...' />
        <Input placeholder='Digite o CPF...' />
        <Button text='Pesquisar' backgroundColor='#609e65' />
        <Button text='Listar' backgroundColor='#3D9DF6' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
