const pinoOptions = {
    name: "Exemplos",
    messageKey: "Description"
    // prettyPrint: {
    //     colorize: true,
    //     levelFirst: true
    // }
};
const logger = require('pino')(pinoOptions, "./logs/info.log")

module.exports = logger;