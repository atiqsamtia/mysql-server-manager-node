# MySQL Server Manager for Node

Manage and run MySQL Server in node


## Install
```
npm install mysql-server-manager-node
```

## Usage

- Download server files in compressed form from this [link](https://sourceforge.net/projects/miniserver/files/Uniform%20Server%20ZeroXIV/ZeroXIV%20Modules/ZeroXIV_mysql_5_7_28.exe/download) (Windows)
- Extract the archive and copy **mysql** directory to your project root
- Now use in your project like this sample code.

```js
const MySQLServer = require('mysql-server-manager-node');
const mysql_server = new MySQLServer({
    path: __dirname + '/mysql/bin/mysqld_z.exe'
    port: 3306
});
mysql_server.run(); 
```

Remember to close the server on your application close like this

```js
mysql_server.close();
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

Atiq Samtia– [@AtiqSamtia](https://twitter.com/atiqsamtia) – me@atiqsamtia.com

Distributed under the GPL3 license.

[https://github.com/atiqsamtia/mysql-server-manager-node](https://github.com/atiqsamtia/mysql-server-manager-node)

## Credits (Thank You) 
OSCAROTERO FOR PHP SERVER (Inspiration)

[https://github.com/oscarotero/php-server-manager](https://github.com/oscarotero/php-server-manager)