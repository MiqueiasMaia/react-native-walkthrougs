import { openDatabase } from 'react-native-sqlite-storage';
import * as SQLite from 'expo-sqlite';

var db = SQLite.openDatabase({ name: 'UsersDatabase.db' }); 

export default db;