//BOT BY SANSLINE - RAFIPROJECT.SITE
//FREE APIKEY PREMIUM

const TelegramBot = require('node-telegram-bot-api'); 
const token = "7071018315:AAG4YO1aPvkPrqiMyusREoaLNz_PHbsyZ6A"; //TOKEN TELE BOT
const botname = "Sansline-bot";

module.exports = {
    botname
};
 
const bot = new TelegramBot(token, { polling: true });
module.exports = bot ;


