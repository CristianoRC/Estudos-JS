const { createWriteStream } = require("pino-logflare")

const stream = createWriteStream({
    apiKey: "API_KEY",
    sourceToken: "SOURCE_TOKEN"
});

const pinoOptions = {
    name: "Exemplos",
    messageKey: "Description"
    // prettyPrint: {
    //     colorize: true,
    //     levelFirst: true
    // }
};

// const logger = require('pino')(pinoOptions, "./logs/info.log") -> Gravar em arquivo
const logger = require('pino')(pinoOptions, stream)

module.exports = logger;