/// <reference path="../../app.ts" />

module Sparky {

    export class AuthFilter extends OX.ActionFilter {

        private i;

        constructor(){
            super();
            console.log('I am AuthFilter Constructor' );
            this.i = 12;
        }

        before(context:OX.AFContext): void {
            console.log('I am before AuthFilter action filter baby');
            this.i += 8;
            context.next();
        }

        after(context:OX.AFContext): void {
            console.log('I am after filter', this.i);
        }

    }

}
