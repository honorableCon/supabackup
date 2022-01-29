import {backup, initializeClient} from "./supabackup.js";

const SUPABASE_URL="database url"
const SERVICE_KEY='service_role secret'

const tables = ['table1','table2','table3','table4']
const bucket = "Backup"
const supabackup = initializeClient(SUPABASE_URL, SERVICE_KEY);

backup(supabackup, bucket, tables);