import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import showCocktail from './helpers/show.js';
import vodkaCocktails from './info/vodka.js';
import whiskeyCocktails from './info/whiskey.js';
import rumCocktails from './info/rum.js';
import ginCocktails from './info/gin.js';
import tequilaCocktails from './info/tequila.js';

import serverFix from 'http';

// без этого кода не работает задеплоенный бот
serverFix.createServer().listen(process.env.PORT || 8443).on('request', function (req, res) {
  res.end('')
});

dotenv.config();
const collections = [vodkaCocktails, whiskeyCocktails, rumCocktails, ginCocktails, tequilaCocktails];
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
  // webHook: {
  //   port: 8443,
  //   host: ,
  //   ssl_cert: ,
  //   ssl_priv: ,
  // }
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
          }
        ],
        [
          {
            text: 'По категориям',
            callback_data: 'По категориям'
          }
        ],
        [
          {
            text: 'По виду алкоголя',
            callback_data: 'По виду алкоголя'
          }
        ],
        [
          {
            text: 'Мне повезет!',
            callback_data: 'Мне повезет!'
          }
        ],
      ],
    }
  })
});

// bot.on('polling_error', (err) => console.log(err));

bot.on('message', (msg) => {

  const { id } = msg.chat;

  const cocktailsMenu = {
    reply_markup: {
      inline_keyboard: [
      ],
    }
  };

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
      <a href="${currentCocktail.image}">.</a>
      <a href="${currentCocktail.source}">Источник</a>
      `
      return bot.sendMessage(id, view, {
        parse_mode: 'HTML',
      });
    }
    if (!menu.includes(msg.text)) {
      bot.sendMessage(id, `${msg.from.first_name}, вы уверены в названии коктейля?`);
    }
  }

  if (msg.text === 'Водка') {
    vodkaCocktails.forEach((cocktail) => {
      cocktailsMenu.reply_markup.inline_keyboard.push(
        [{
          text: cocktail.name,
          callback_data: cocktail.name,
        }]
      )
    })
    bot.sendMessage(id, 'Коктейли на водке', cocktailsMenu)
  }

  if (msg.text === 'Виски') {
    whiskeyCocktails.forEach((cocktail) => {
      cocktailsMenu.reply_markup.inline_keyboard.push(
        [{
          text: cocktail.name,
          callback_data: cocktail.name,
        }]
      )
    })
    bot.sendMessage(id, 'Коктейли на виски', cocktailsMenu)
  }

  if (msg.text === 'Джин') {
    ginCocktails.forEach((cocktail) => {
      cocktailsMenu.reply_markup.inline_keyboard.push(
        [{
          text: cocktail.name,
          callback_data: cocktail.name,
        }]
      )
    })
    bot.sendMessage(id, 'Коктейли на джине', cocktailsMenu)
  }

  if (msg.text === 'Ром') {
    rumCocktails.forEach((cocktail) => {
      cocktailsMenu.reply_markup.inline_keyboard.push(
        [{
          text: cocktail.name,
          callback_data: cocktail.name,
        }]
      )
    })
    bot.sendMessage(id, 'Коктейли на роме', cocktailsMenu)
  }

  if (msg.text === 'Текила') {
    tequilaCocktails.forEach((cocktail) => {
      cocktailsMenu.reply_markup.inline_keyboard.push(
        [{
          text: cocktail.name,
          callback_data: cocktail.name,
        }]
      )
    })
    bot.sendMessage(id, 'Коктейли на текиле', cocktailsMenu)
  }

  if (msg.text === 'Вкусно и не крепко') {

    collections.flat().forEach((cocktail) => {
      if (cocktail.category === msg.text) {
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
    bot.sendMessage(id, 'Вкусно и не крепко', cocktailsMenu)
  }

  if (msg.text === 'Умеренно крепко') {

    collections.flat().forEach((cocktail) => {
      if (cocktail.category === msg.text) {
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
    bot.sendMessage(id, 'Умеренно крепко', cocktailsMenu)
  }

  if (msg.text === 'Вкусно и крепко') {

    collections.flat().forEach((cocktail) => {
      if (cocktail.category === msg.text) {
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
    bot.sendMessage(id, 'Вкусно и крепко', cocktailsMenu)
  }

  if (msg.text === 'Дичь какая-то') {

    collections.flat().forEach((cocktail) => {
      if (cocktail.category === msg.text) {
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
    bot.sendMessage(id, 'Дичь какая-то', cocktailsMenu)
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
        keyboard: [
          ['Водка', 'Виски', 'Джин', 'Текила', 'Ром'],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      }
    })
  }

  if (query.data === 'По категориям') {
    bot.sendMessage(query.from.id, 'Категории коктейлей', {
      reply_markup: {
        keyboard: [
          ['Вкусно и не крепко', 'Умеренно крепко'],
          ['Вкусно и крепко', 'Дичь какая-то'],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      }
    })
  }

  if (query.data === 'По названию') {
    bot.sendMessage(query.from.id, 'Просто введите название интересующего вас коктейля в текстовое поле')
  }

  if (query.data === 'Мне повезет!') {
    const length = collections.flat().length;
    const randomCocktail = collections.flat()[Math.floor(Math.random() * (length - 1))];

    showCocktail(randomCocktail);

    const view = `
    <u><b>${randomCocktail.name}</b></u>
    <pre>Категория: ${randomCocktail.category}</pre>
    <pre>Основной алкоголь: ${randomCocktail.mainAlco}</pre>
    <pre>Ингредиенты: ${randomCocktail.ingredients}</pre>
    <pre>Нужный бокал: ${randomCocktail.glass}</pre>
    <pre>Как готовить: ${randomCocktail.recipe}</pre>
    <a href="${randomCocktail.image}">.</a>
    <a href="${randomCocktail.source}">Источник</a>
    `

    bot.sendMessage(query.from.id, view, {
      parse_mode: 'HTML',
    });
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
    <a href="${currentCocktail.image}">.</a>
    <a href="${currentCocktail.source}">Источник</a>
    `
    bot.sendMessage(query.from.id, view, {
      parse_mode: 'HTML',
    });
  }

})
