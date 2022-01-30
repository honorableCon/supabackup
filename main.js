import {backup, initializeClient} from "supabackup";
import {config} from 'dotenv';
config();

const SUPABASE_URL=process.env.SUPABASE_URL
const SERVICE_KEY=process.env.SUPABASE_SERVICE_KEY

const tables = ['table1','table2','table3']
const bucket = "Backup"
const supabackup = initializeClient(SUPABASE_URL, SERVICE_KEY);

backup(supabackup, bucket, tables);