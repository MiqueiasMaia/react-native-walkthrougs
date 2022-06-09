import DataManager from './DataManager';
import db from './DatabaseInstace';
export default class DatabaseInit {

    seeder = [
        {
            name: 'João',
            email: 'joao@teste.com',
            password: '123456',
        },
        {
            name: 'Maria',
            email: 'maria@teste.com',
            password: '123456',
        },
        {
            name: 'Tiago',
            email: 'tiago@teste.com',
            password: '123456',
        },
    ];

    constructor() {
        this.initDb();
    }

    initDb() {
        const sql = [
            DataManager.createTableUser(),
            DataManager.createUser(this.seeder[0]),
        ];
        db.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}