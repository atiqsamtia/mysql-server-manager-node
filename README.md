# MySQL Server Manager

Manage and run MySQL Server in node


## Install
```
npm install mysql-server-manager-node
```

## Usage
```js
const MySQLServer = require('mysql-server-manager-node');
const mysql_server = new MySQLServer({
    path: __dirname + '/mysql/bin/mysqld_z.exe'
    port: 3306
});
mysql_server.run(); 
```

## Configuration
Name | Default | Description
-----|---------|------------
`path` | `mysqld` | mysqld file path (See Usage for moreinfo)
`port` | `3306` | The port used
`script` | `null` | The "router" script
`stdio` | `inherit` | stdio option passed to the spawned process - https://nodejs.org/api/child_process.html#child_process_options_stdio
`env` | `process.env` | The environment variables passed

## Does this Work in Electron?
Yes


## Meta

Atiq Samtia– [@AtiqSamtia](https://github.com/atiqsamtia) – me@atiqsamtia.com

Distributed under the GPL3 license.

[https://github.com/atiqsamtia/mysql-server-manager-node](https://github.com/atiqsamtia/mysql-server-manager-node)

## Credits (Thank You) 
OSCAROTERO FOR PHP SERVER (Inspiration)
https://github.com/oscarotero/php-server-manager