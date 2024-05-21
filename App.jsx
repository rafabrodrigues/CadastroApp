import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import Input from "./src/components/Input";
import Button from "./src/components/Button";
import ResultText from "./src/components/ResultText";
import db from "./src/DataBase";



export default function App() {
  // DataBase.createTable();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [users, setUsers] = useState([])
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCadastrar = async () => {
    if (!nome || !telefone || !cpf) {
      alert("Por favor, preencha todos os campos");
      return;
    }
    const query_insert = "INSERT INTO USERS (nome, telefone, cpf) VALUES (?, ?, ?)";
    const params = [nome, telefone, cpf]
    await db.insertData(query_insert, params)
    setTelefone('')
    setCpf('')
    setNome('')
    alert("Usuário cadastrado com sucesso");
    handleShow();
  };

  const handleShow = async () => {
    const result = await db.selectData('SELECT * FROM USERS')
    setUsers(result)
  }

  const handleDelete = async () => {
    await db.deleteData('DELETE FROM USERS')
    setUsers([])
  }

  const handleLongPress = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  }

  useEffect(() => {
    const createTable = () => {
      db.createTable()
    }
    createTable()

  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          placeholder="Digite o Nome..."
          onChangeText={setNome}
          value={nome} />
        <Input
          placeholder="Digite o Telefone..."
          onChangeText={setTelefone}
          value={telefone}
        />
        <Input
          placeholder="Digite o CPF..."
          onChangeText={setCpf}
          value={cpf}
        />
        <Button
          text="Cadastrar"
          backgroundColor="#609e65"
          onPress={handleCadastrar}
        />
        <Button
          text='Deletar'
          backgroundColor='#ff0000'
          onPress={handleDelete}
        />
        <Button
          text="Listar"
          backgroundColor="#3D9DF6"
          onPress={handleShow} />
        {users.map((user, index) => (
          <TouchableOpacity key={index} onLongPress={() => handleLongPress(index)}>
            <View style={[styles.resultContainer, selectedItem === index && styles.selected]}>
              <ResultText text={'Nome: ' + user.nome} />
              <ResultText text={'Telefone: ' + user.telefone} />
              <ResultText text={'CPF: ' + user.cpf} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

  );

  handleShow();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  formContainer: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  resultContainer: {
    marginTop: 10,
    backgroundColor: '#232323',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    gap: 4,
  },
  selected: {
    backgroundColor: 'lightblue',
  }
});
