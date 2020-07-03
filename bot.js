import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import showCocktail from './helpers/show.js';
import vodkaCocktails from './info/vodka.js';
import whiskeyCocktails from './info/whiskey.js'

import serverFix from 'http';

serverFix.createServer().listen(process.env.PORT || 8443).on('request', function(req, res){
  res.end('')
});

dotenv.config();
const collections = [vodkaCocktails, whiskeyCocktails];
// menu - переменная для отсечения всех кнопок, не содержащих название коктейля
const menu = ['По названию', 'По категориям', 'По виду алкоголя', 'Вкусно и не крепко', 'Умеренно крепко', 'Вкусно и крепко', 'Дичь какая-то', 'Водка', 'Виски', 'Джин', 'Текила', 'Ром'];


const bot = new TelegramBot(process.env.TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    }
  },
  webHook: {
    port: process.env.PORT || 8443,
  }
});

bot.onText(/\/start/, (msg) => {
  const text = `Привет, ${msg.from.first_name}!\nВыберете вид поиска:`;
  bot.sendMessage(msg.chat.id, text, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'По названию',
            callback_data: 'По названию'
          },
          {
            text: 'По категориям',
            callback_data: 'По категориям'
          },
          {
            text: 'По виду алкоголя',
            callback_data: 'По виду алкоголя'
          }
        ],
      ]
    }
  })
});

bot.on('polling_error', (err) => console.log(err));

bot.on('message', (msg) => {

  const { id } = msg.chat;

  if (msg.text !== '/start') {

    const currentCocktail = collections.flat().find(cocktail => cocktail.name.toLowerCase() === msg.text.toLowerCase());
    if (currentCocktail) {

      showCocktail(currentCocktail);

      const view = `
      <u><b>${currentCocktail.name}</b></u>
      <pre>Категория: ${currentCocktail.category}</pre>
      <pre>Основной алкоголь: ${currentCocktail.mainAlco}</pre>
      <pre>Ингредиенты: ${currentCocktail.ingredients}</pre>
      <pre>Нужный бокал: ${currentCocktail.glass}</pre>
      <pre>Как готовить: ${currentCocktail.recipe}</pre>
      `
      return bot.sendMessage(id, view, {
        parse_mode: 'HTML',
      });
    }
    bot.sendMessage(id, `${msg.from.first_name}, вы уверены в названии коктейля?`);


  }


});


bot.on('callback_query', (query) => {
  bot.answerCallbackQuery(query.id, `${query.data}`);

  const cocktailsMenu = {
    reply_markup: {
      inline_keyboard: [
      ]
    }
  };

  if (query.data === 'По виду алкоголя') {
    bot.sendMessage(query.from.id, 'Виды алкоголя', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Водка',
              callback_data: 'Водка',
            }
          ],
          [
            {
              text: 'Виски',
              callback_data: 'Виски',
            },
          ],
          [
            {
              text: 'Джин',
              callback_data: 'Джин',
            },
          ],
          [
            {
              text: 'Текила',
              callback_data: 'Текила',
            },
          ],
          [
            {
              text: 'Ром',
              callback_data: 'Ром',
            },
          ],
        ],
      }
    })
  }

  if (query.data === 'По категориям') {
    bot.sendMessage(query.from.id, 'Категории коктейлей', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Вкусно и не крепко',
              callback_data: 'Вкусно и не крепко',
            },
          ],
          [
            {
              text: 'Умеренно крепко',
              callback_data: 'Умеренно крепко',
            },
          ],
          [
            {
              text: 'Вкусно и крепко',
              callback_data: 'Вкусно и крепко',
            },
          ],
          [
            {
              text: 'Дичь какая-то',
              callback_data: 'Дичь какая-то',
            },
          ],
        ],
      }
    })
  }

  if (query.data === 'Водка') {
    vodkaCocktails.forEach((cocktail) => {
      cocktailsMenu.reply_markup.inline_keyboard.push(
        [{
          text: cocktail.name,
          callback_data: cocktail.name,
        }]
      )
    })
    bot.sendMessage(query.from.id, 'Коктейли на водке', cocktailsMenu)
  }

  if (query.data === 'Виски') {
    whiskeyCocktails.forEach((cocktail) => {
      cocktailsMenu.reply_markup.inline_keyboard.push(
        [{
          text: cocktail.name,
          callback_data: cocktail.name,
        }]
      )
    })
    bot.sendMessage(query.from.id, 'Коктейли на виски', cocktailsMenu)
  }

  if (query.data === 'Вкусно и не крепко') {

    collections.flat().forEach((cocktail) => {
      if (cocktail.category === query.data) {
        cocktailsMenu.reply_markup.inline_keyboard.push(
          [
            {
            text: cocktail.name,
            callback_data: cocktail.name,
          }
        ]
        )
      }
    })
    bot.sendMessage(query.from.id, 'Вкусно и не крепко', cocktailsMenu)
  }

  if (query.data === 'Умеренно крепко') {
    collections.flat().forEach((cocktail) => {
      if (cocktail.category === query.data) {
        cocktailsMenu.reply_markup.inline_keyboard.push(
          [
            {
            text: cocktail.name,
            callback_data: cocktail.name,
          }
        ]
        )
      }
    })
    bot.sendMessage(query.from.id, 'Умеренно крепко', cocktailsMenu)
  }

  if (query.data === 'Вкусно и крепко') {
    collections.flat().forEach((cocktail) => {
      if (cocktail.category === query.data) {
        cocktailsMenu.reply_markup.inline_keyboard.push(
          [
            {
            text: cocktail.name,
            callback_data: cocktail.name,
          }
        ]
        )
      }
    })
    bot.sendMessage(query.from.id, 'Вкусно и крепко', cocktailsMenu)
  }

  if (query.data === 'Дичь какая-то') {
    collections.flat().forEach((cocktail) => {
      if (cocktail.category === query.data) {
        cocktailsMenu.reply_markup.inline_keyboard.push(
          [
            {
            text: cocktail.name,
            callback_data: cocktail.name,
          }
        ]
        )
      }
    })
    bot.sendMessage(query.from.id, 'Дичь какая-то', cocktailsMenu)
  }

  if (query.data === 'По названию') {
    bot.sendMessage(query.from.id, 'Просто введите название интересующего вас коктейля в текстовое поле')
  }

  if (!menu.includes(query.data)) {
    const currentCocktail = collections.flat().find(cocktail => cocktail.name.toLowerCase() === query.data.toLowerCase());

    showCocktail(currentCocktail);

    const view = `
    <u><b>${currentCocktail.name}</b></u>
    <pre>Категория: ${currentCocktail.category}</pre>
    <pre>Основной алкоголь: ${currentCocktail.mainAlco}</pre>
    <pre>Ингредиенты: ${currentCocktail.ingredients}</pre>
    <pre>Нужный бокал: ${currentCocktail.glass}</pre>
    <pre>Как готовить: ${currentCocktail.recipe}</pre>
    `
    bot.sendMessage(query.from.id, view, {
      parse_mode: 'HTML',
    });
  }

})
