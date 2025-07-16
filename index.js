const TelegramBot = require('node-telegram-bot-api');

// Remplace le token par le tien :
const token = '7743916485:AAFD7ELOMrwHz5GKYv5RvIzFK5eLJ7GOxj8';
const bot = new TelegramBot(token, { polling: true });

// ID de ton canal Telegram
const channelId = '@test_crypto_bot_sosoquantum';

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "🚀 Bot activé ! Prêt à recevoir les signaux.");
});

// Fonction test pour envoyer un signal automatiquement
bot.on('polling_error', (error) => {
  console.error(error);
});

bot.sendMessage(channelId, "📡 Bot opérationnel. En attente de signal.");
