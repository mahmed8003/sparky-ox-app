/// <reference path="../../app.ts" />

module Sparky {

    export class DatabaseConfig implements OX.DatabaseConfig {
        public config(config:OX.EnvDBConfig):boolean {
            return false;
        }
        public connect(config:OX.DBConfig):any {
            return null;
        }
    }

}
