import db from './DatabaseInstace';

//QUERIES

const sqlCreate = 'CREATE TABLE IF NOT EXISTS USER (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR (200), password VARCHAR (200))';

//CREATE
const sqlInsert = 'INSERT INTO USER (email, password) VALUES (?, ?)';
//READ
const sqlSelect = 'SELECT * FROM USER WHERE id = ?';
//UPDATE
const sqlUpdate = 'UPDATE USER SET email = ?, password = ? WHERE id = ?';
//DELETE
const sqlDelete = 'DELETE FROM USER WHERE id = ?';


//CLASSE
export default class DataManager {
    //MÉTODOS DA CLASSE
    static async createTableUser() {
        (await db).transaction(tx => {
            tx.executeSql(sqlCreate);
        });
    }

    static async openDatabase() {
        return await db;
    }

    static async createUser(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsert, [user.email, user.password]);
        });
    }

    static async getUser(id) {
        let user = null;
        (await db).transaction(tx => {
            tx.executeSql(sqlSelect, [id], (_, { rows }) => {
                user = rows._array[0];
            });
        });
        return user;
    }

    static async deleteUser(id) {
        (await db).transaction(tx => {
            tx.executeSql(sqlDelete, [id]);
        });
    }

    static async updateUser(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlUpdate, [user.email, user.password]);
        });
    }
}



