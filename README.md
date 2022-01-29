# SUPABACKUP 

[![Made-In-Senegal](https://github.com/GalsenDev221/made.in.senegal/blob/master/assets/badge.svg)](https://github.com/GalsenDev221/made.in.senegal) 

Supabackup is a node package, that allows you to easily perform your supabase backup operations for free.<br>
This package creates a backup of your given database tables. <br>
The backup is stored on your supabase storage. (in json format) <br>
You can add this on your administration interface to add backup feature.

<br>

# Getting Started

## Installation 📥 

Make sure you have Node, Npm already installed in your system. you can check if Node, Npm available in your system by running below command,

```
node -v

npm -v
```

If it's not installed in your system then please install them by checking official documentation of,

- https://nodejs.org/en/

After that, Install Package with below command :

```
npm install supabackup
```

<br>


# Usage ✅
## Initializing 
You can initialize a new Supabackup client using the initializeClient() method.
It's allow you to configure your backup.

### Parameters
1. supabaseUrl `required` `string`
      > The unique Supabase URL which is supplied when you create a new project in your project dashboard.

2. supabaseServiceKey `required` `string`

      > You can find the SERVICE_KEY on :

      > Setings > (project setings) API > `service_role` `secret` click on `reveal` and copy the key

### Example 💛
#### initializeClient()
```javascript
import { initializeClient } from 'supabackup'

// Create a single supabase client for interacting with your database 
const supabackup = initializeClient('https://xyzcompany.supabase.co', 'service-key')
```

<br>

## Backing up
You can make a new backup of your database using the backup() method.
### Parameters
1. supabackupClient `required` 
      > create with `initializeClient()`
2. bucket `string` `required` 
      > name that you give to your bucket (storage container)
3. tables `required` `array(string)` 
      > array of tables that you want to backup

### Example 💛
#### backup()
```javascript
import { initializeClient, backup } from 'supabackup'

// Create a single supabase client for interacting with your database 
const supabackup = initializeClient('https://xyzcompany.supabase.co', 'service-key')

// Backup the given tables (chat, user) on the bucket (Backup Chat)
backup(supabackup, "Backup Chat", ['user', 'chat']);
```
You can found the backup : `storage > Backup Chat > Backup [Date]`

#### Contributing 🤝

Bug reports and Pull Requests are welcome 👋🏽  
You can tell me on **[issues](https://github.com/honorableCon/supabackup/issues)**


#### License 🔖

This project is under **[MIT License](https://opensource.org/licenses/MIT)**.