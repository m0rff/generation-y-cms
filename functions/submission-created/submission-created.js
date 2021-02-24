const TelegramBot = require('telegrambot');

const handler = async (event) => {
  console.log(event)

  if (process.env.TG_BOT_TOKEN === undefined || process.env.TG_CHAT_ID === undefined) {
    console.log( 'Env vars must be provided!');

    return { statusCode: 422, body: 'Env vars must be provided!' }
  }

  const api = new TelegramBot(process.env.TG_BOT_TOKEN);

  const payload = JSON.stringify(event)

  try {
    api.sendMessage({
      chat_id: process.env.TG_CHAT_ID,
      text: payload
    }, function (err, message) {
      if (err) throw err;
      console.log(String(err))
    });
  } catch (error) {
    return { statusCode: 422, body: String(error) }
  }
}

module.exports = { handler }
