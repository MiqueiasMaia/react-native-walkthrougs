import db from './DatabaseInstance';
import User from './User';

const sqlCreate =
    'CREATE TABLE IF NOT EXISTS USER(' +
    'ID INTEGER PRIMARY KEY, ' +
    ' EMAIL VARCHAR(200), PASSWORD VARCHAR(200))';

const sqlInsert =
    'INSERT INTO USER (ID, EMAIL, PASSWORD)' +
    ' VALUES (?,?,?)';

const sqlDelete =
    'DELETE FROM USER WHERE CODIGO=?';

const sqlSelect =
    'SELECT * FROM USER';

export default class DataManager {
    async createDatabase() {
        (await db).transaction(tx => {
            tx.executeSql(sqlCreate, []);
        });
    }

    async openDataBase() {
        return await db;
    }

    async remvoveUser(key) {
        (await db).transaction(tx => {
            tx.executeSql(sqlDelete, [key]);
        });
    }

    async addUser(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsert, [user.id, user.email, user.password]);
        });
    }

    async indexUser() {
        let users = [];
        (await db).transaction(tx => {
            tx.executeSql(sqlSelect, [], (_, { rows }) => {
                for (let i = 0; i < rows.length; i++) {
                    users.push(
                        new User(rows.item(i).ID, rows.item(i).EMAIL, rows.item(i).PASSWORD)
                    );
                }
            });
        });
        return users;
    }
}