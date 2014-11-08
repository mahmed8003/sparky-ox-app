/// <reference path="../../app.ts" />

module Sparky {

    export class ExpressConfig implements OX.ExpressConfig {

        public config(app:any):void {
            app.use(function(req, res, next) {
                console.log('I am from express config');
                next();
            });
        }
    }
}
