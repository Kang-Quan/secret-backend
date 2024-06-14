require('dotenv').config();
const express = require("express");
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const port = process.env.PORT || 8000;
const token = process.env.TELEBOTKEY || "";
const bot = new TelegramBot(token, { polling: false });
const chatID = process.env.CHATID;

app.get("/", (req, res) => {
    // Sending a message via the bot
    if (bot && bot.sendMessage && chatID) {
      bot.sendMessage(chatID, 'Received your message')
        .then(() => {
          res.send("Express on Vercel");
        })
        .catch((error) => {
          console.error("Error sending bot message:", error);
          res.status(500).send("Error sending bot message");
        });
    } else {
      res.send("Express on Vercel");
    }
  });

app.listen(port, () => console.log("Server ready on port " + port));

module.exports = app;