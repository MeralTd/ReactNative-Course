import * as SQLite from 'expo-sqlite';


const database = SQLite.openDatabase('PlacesDB.db');

export function init() {
    const promise  = new Promise((revolse, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                )`,
                [],
                () => {
                    revolse();
                },
                (_, error) => {
                    reject(error);
                }
            );
    
        });
    })

    return promise;
   
}