/// <EXTERNAL REFERENCES>
/// <reference path="./node_modules/ox/build/OX.d.ts" />

/// <CONFIG REFERENCES>
/// <reference path="./application/config/DatabaseConfig.ts" />
/// <reference path="./application/config/ExpressConfig.ts" />
/// <reference path="./application/config/GlobalFiltersConfig.ts" />
/// <reference path="./application/config/RoutesConfig.ts" />


/// <HELPER REFERENCES>

/// <FILTERS REFERENCES>
/// <reference path="./application/filters/AuthFilter.ts" />

/// <MODEL REFERENCES>

/// <CONTROLLER REFERENCES>
/// <reference path="./application/controllers/HomeController.ts" />

module Sparky {


    var program:any = require('commander');
    program.version('0.0.1');
    program.option('-p, --port <port>', 'specify the port [3000]', 3000);
    program.option('-e, --env <engine>', 'specify environment (development|test|production) [development]', 'development');

    program.parse(process.argv);

    var rootPath:string = __dirname;
    var env:string = program.env;
    var port:number = program.port;


    export var app:OX.Application = new OX.Application(rootPath, env, port);
    app.setDatabaseConfig(new DatabaseConfig());
    app.setExpressConfig(new ExpressConfig());
    app.setGlobalFiltersConfig(new GlobalFiltersConfig());
    app.setRoutesConfig(new RoutesConfig());
    app.giddup();

}
