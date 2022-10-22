const axios = require("axios");
require("dotenv").config();

class Telegram {
  async sendTelegramMessage(message) {
    const botId = process.env.TELEGRAM_BOTID;
    const chatId = process.env.TELEGRAM_CHATID;
    if (!botId || !chatId) {
      return false;
    }
    const telegramMsg = encodeURIComponent(message);
    const url = `https://api.telegram.org/${botId}/sendMessage?chat_id=${chatId}&text=${telegramMsg}&parse_mode=HTML`;
    const response = await axios.get(url);
    return true;
  }
}

module.exports = Telegram;
