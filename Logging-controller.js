// This file is just to show how we can use winston
// It does not have anything to do with logging library
import winston from "winston";

const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'warn'
        }),
        new winston.transports.File({
            level: 'error',
            // Create the log directory if it does not exist
            filename: 'logs/example.log'
        })
    ]
};


const logger = winston.createLogger(logConfiguration);

export default function log(level , message){
    if(level && message){
        logger.log({
            // Message to be logged
                message,
            // Level of the message logging
                level
            })
    }
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1) {
        console.log("Script Error: See Browser Console for Detail");
    } else {
        var message = [
            "Message: " + msg,
            "URL: " + url,
            "Line: " + lineNo,
            "Column: " + columnNo,
            "Error object: " + JSON.stringify(error),
        ].join(" - ");
        console.log(message);
    }
    return false;
};

// module.exports = {
//     log : createLogs
// }

// // Log a message
// logger.log({
//     // Message to be logged
//         message: 'Hello, Winston!',
//     // Level of the message logging
//         level: 'info'
//     });
// Log a message
// logger.info('Hello, Winston!');

// // Log some messages
// logger.error("Hello, Winston logger, the first error!");
// logger.warn("Hello, Winston logger, the first warning!");
// logger.warn("Hello, Winston logger, the second warning!");
// logger.error("Hello, Winston logger, the second error!");
// logger.info("Hello, Winston logger, some info!");
// logger.debug("Hello, Winston logger, a debug!");