import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({
 name: 'UserDatabase',
 location: 'default'
});

useEffect(() => {
    createTable();
  }, []);
  
  const createTable = async () => {
    const query_create = `CREATE TABLE IF NOT EXISTS Users(
        nome TEXT NOT NULL,
        telefone TEXT NOT NULL,
        cpf TEXT NOT NULL
    );`;
    try {
      await db.executeSql(query_create);
      } catch (err) {
        console.log({err});
      }
    };

    const insertData = async ({query_insert, params}) => {
        try {
            await db.executeSql(query_insert, params);
            
        } catch () {
            
        }
    }