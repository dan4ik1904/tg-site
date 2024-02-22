const express = require('express')
const Bot = require('node-telegram-bot-api')

const token = '7097107639:AAGMDm8AvjqtjpmZXkmfIX-2ZmRVAypIz28';

// Create a bot that uses 'polling' to fetch new updates
const bot = new Bot(token, {polling: true});

// Matches "/echo [whatever]"
bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, msg.text);
});

const app = express()

const PORT = 8080

app.listen(PORT, () => {
    console.log('bot sterted on PORT', PORT)
})

app.post('web-data', (req, res) => {
    console.log(123456789)
})