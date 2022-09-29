
import DataManager from './DataManager';
import db from './DatabaseInstance';
import * as SQLite from 'expo-sqlite';

export default class DatabaseInit {

    constructor() {
        // db.transaction([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        //     console.log('Foreign keys turned on')
        // );
        this.InitDb();
    }
    InitDb() {
        var sql = [
            `DROP TABLE IF EXISTS User;`,

            'CREATE TABLE IF NOT EXISTS USER(' +
            'ID INTEGER PRIMARY KEY, ' +
            ' EMAIL VARCHAR(200), PASSWORD VARCHAR(200))'
            ,
            `INSERT INTO USER (ID, EMAIL, PASSWORD) VALUES (1,'TESTE','TESTE');`,
            `INSERT INTO USER (ID, EMAIL, PASSWORD) VALUES (2,'TESTE','TESTE');`,
            `INSERT INTO USER (ID, EMAIL, PASSWORD) VALUES (3,'TESTE','TESTE');`,
            `INSERT INTO USER (ID, EMAIL, PASSWORD) VALUES (4,'TESTE','TESTE');`
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }
}
