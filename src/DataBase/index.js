import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('userss-data.db');

const execute = (query, params, readOnly = false) =>
  new Promise((resolve, reject) => {
    db.transactionAsync((tx) => {
      tx.executeSqlAsync(query, params)
        .then(resolve)
        .catch((e) => {
          console.error(e);
          reject(e);
        });
    }, readOnly);
  });

const createTable = async () => {
  const query_create = `CREATE TABLE IF NOT EXISTS Users(
        nome TEXT NOT NULL,
        telefone TEXT NOT NULL,
        cpf TEXT NOT NULL
    );`;
  try {
    return execute(query_create);
  } catch (err) {
    console.log({ err });
  }
};

const insertData = async (query, params) => {
  return await execute(query, params);
};

const selectData = async (query, params) => {
  return (await execute(query, params)).rows;
};

const deleteData = async (query, params) => {
  return execute(query, params);
};

export default {
  createTable,
  selectData,
  insertData,
  deleteData,
};
