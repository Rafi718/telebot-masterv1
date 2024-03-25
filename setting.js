//BOT BY SANSLINE - RAFIPROJECT.SITE
//FREE APIKEY PREMIUM

const TelegramBot = require('node-telegram-bot-api'); 
const token = "-"; //TOKEN TELE BOT
const botname = "-";

module.exports = {
    botname
};
 
const bot = new TelegramBot(token, { polling: true });
module.exports = bot ;


