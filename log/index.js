const logger = require("./logger");

logger.info(`Sistema inicializado - ${new Date().toISOString()}`)

for (let i = 0; i <= 999; i++) logger.error(`Não foi oissivel atualizar o usuário ${i}`)
