const process = require('process')
const TelegramBot = require('telegrambot');

const { TG_BOT_TOKEN, TG_CHAT_ID } = process.env

const handler = async (event) => {
  if (TG_BOT_TOKEN === undefined || TG_CHAT_ID === undefined) {
    return { statusCode: 422, body: 'Env vars must be provided!' }
  }

  const api = new TelegramBot(TG_BOT_TOKEN);

  const payload = JSON.stringify(event)

  try {
    api.sendMessage({ chat_id: TG_CHAT_ID, text: payload }, function (err, message) {
      if (err) throw err;
    });
  } catch (error) {
    return { statusCode: 422, body: String(error) }
  }
}

module.exports = { handler }
