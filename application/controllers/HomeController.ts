/// <reference path="../../app.ts" />

module Sparky {

    export class HomeController extends OX.Controller {

        public static configure() {
            console.log('I am config from home controller');
            //this.addFilter(AuthFilter).addAction('index');
        }

        public constructor(){
            super();
            console.log('I am constructor from HomeController');
        }

        public index(req:OX.Request, res:OX.Response){
            res.send('hello i am here now');
        }
    }
}
