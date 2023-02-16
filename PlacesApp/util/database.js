import * as SQLite from 'expo-sqlite';
import { Places } from '../models/place';


const database = SQLite.openDatabase('PlacesDB.db');

export function init() {
    const promise  = new Promise((resolve, reject) => {
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
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            );
    
        });
    })

    return promise;
   
}

export function insertPlaces(places) {
    const promise  = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO places (title, imageUri, address, lat, lng)
                 VALUES(?, ?, ?, ?, ?)`,
                [
                    places.title, 
                    places.imageUri, 
                    places.address, 
                    places.location.lat, 
                    places.location.lng],
                (_, result) => {
                    console.log(result);
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            );
    
        });  
    })

    return promise;
   
}

export function fetchPlaces() {
    const promise  = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM places',
                [],
                (_, result) => {
                    const places = [];

                    for (const dp of result.rows._array) {
                        places.push(
                            new Places(
                                dp.title,
                                dp.imageUri,
                                {
                                    address: dp.address,
                                    lat: dp.lat,
                                    lng: dp.lng,
                                },
                                dp.id
                            )
                        );
                    }
                    console.log(places);
                    resolve(places);
                },
                (_, error) => {
                    reject(error);
                }
            );
    
        });  
    })

    return promise;
   
}