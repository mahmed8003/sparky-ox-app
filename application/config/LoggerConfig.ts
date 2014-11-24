/// <reference path="../../app.ts" />

module Sparky {

    export class LoggerConfig implements OX.LoggerConfig {

        public config(loggerInfo:OX.EnvLoggerInfo):void {
            loggerInfo.development = {
                name: 'Sparky',
                streamsInfo: [
                    {
                        type: OX.LoggerStreamType.STREAM,
                        level: OX.LoggerLevel.INFO
                    }
                ]
            };

            loggerInfo.test = {
                name: 'Sparky',
                streamsInfo: [
                    {
                        type: OX.LoggerStreamType.STREAM,
                        level: OX.LoggerLevel.INFO
                    }
                ]
            };

            loggerInfo.production = {
                name: 'Sparky',
                streamsInfo: [
                    {
                        type: OX.LoggerStreamType.STREAM,
                        level: OX.LoggerLevel.INFO
                    }
                ]
            };
        }
    }
}
