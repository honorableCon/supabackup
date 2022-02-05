import {Database, Storage} from "./utils.js";


export const initializeClient = (url, servicekey) => {
    const database = new Database(url, servicekey);
    const storage = new Storage(url, servicekey);
    
    return {database, storage};
}


export const backup = async (supabackup, bucket, tables) => {
    supabackup.storage.creatBucket(bucket);
    const instant = new Date().toISOString();
    for (const table of tables) {
        supabackup.database.get(table).then( (data,error) => {
            supabackup.storage.uploadFile(`Backup ${instant}/${table}.json`, data)
                .then(
                    () => console.log(`+[${table}] succesfully backup`)
                );
        });
    }
}

export const restore = async (supabackup, bucket, folder, tables) => {

    for (const table of tables) {
        supabackup.storage.downloadFile(bucket, folder, table)
        .then( data => { 
            supabackup.database.clear(table)
            .then( () => {
                supabackup.database.insert(table, JSON.parse(data))
            })
        })
    }
}