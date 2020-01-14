const spawn = require('child_process').spawn;
const http = require('http');

module.exports = class MySQLServer {

    static start(config, cb) {
        const server = new MySQLServer(config);

        return server.run(cb);
    }

    constructor(config) {
        this.path = 'mysqld';
        this.port = 3306;
        this.stdio = 'inherit';
        this.env = process.env;

    };

    getParameters(){
        const params =  ['--port', this.port];
        return params;
    }

    run(cb) {
        this.process = spawn(this.path, this.getParameters(), {
            stdio: this.stdio,
            env: this.env
        });

        this.process.on('close', () => console.log('MySQL Server closed'));
        this.process.on('error', error =>
            console.error('MySQL Server error', error)
        );

        if (cb) {
            checkServer(this.host, this.port, () => cb(this));
        } else {
            return new Promise((resolve, reject) => {
                try {
                    checkServer(this.host, this.port, () => resolve(this));
                } catch (e) {
                    reject(e);
                }
            });
        }
    }

    close() {
        if (!this.process) {
            return;
        }

        this.process.kill();
        delete this.process;
    }

};

function checkServer(host, port, cb) {
    setTimeout(function runCheck() {
        cb(); //TODO qrite server check logic
    }, 100);
}