import { createClient } from '@supabase/supabase-js';

export class Database {
    
    constructor(url, apiKey) {
        this.url = url;
        this.apiKey = apiKey;
        this.supabase = createClient(url, apiKey);
    }
    async get(table) {
        const { data, error } = await this.supabase
            .from(table)
            .select()
        
        return data
    }
}

export class Storage {
    constructor(url, sevicekey) {
        this.url = url;
        this.sevicekey = sevicekey;
        this.supastorage = createClient(url, sevicekey).storage;
    }

    async creatBucket(bucket){
        this.bucket = bucket
        const { data, error } = await this.supastorage
            .createBucket(this.bucket, { public: false })

        return data
    }

    async uploadFile(path, fileBody){
        const { data, error } = await this.supastorage
        .from(this.bucket)
        .upload(path, JSON.stringify(fileBody), {
            cacheControl: '3600',
            upsert: false
        })

        return {data, error};
    }
}
