const config = require('../config.json');

exports = Object.freeze({
    SYMBOL : `\`\`\`/symbol<number between 1 to ${config.max_symbol}>\`\`\``,
    SETSYB : `\`\`\`/setsyb <number between 1 to ${config.max_symbol}> <image URL>\`\`\``
});
