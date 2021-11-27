require('dotenv').config();
const Koa = require('koa');
const cors = require('@koa/cors');
const server = new Koa();
const axios = require('axios');
const logger = require('koa-morgan');
const Router = require('koa-router');
const bodyParser = require('koa-body')();
const Excerpt = require('./db/models/excerpt');
const Sequelize = require('sequelize');
const port = process.env.PORT || 2020;

const {
  excerptMaker,
  getStopWords,
  cleanStopWords,
  getBook,
  chooseExcerpt,
  chooseWords,
  buildDict,
} = require('./helpers');

const router = new Router();

router.get('/api/madlibs', async ctx => {
  try {
    //receive book
    let book = await Excerpt.findAll({
      where: {
        bookId: 1,
      },
    });

    //randomly choose an excerpt
    let excerptObj = chooseExcerpt(book);

    //grab paragraph from excerpt object
    let excerpt = excerptObj.dataValues.paragraph;

    //clean excerpt of stop words
    //and choose the words for the game
    let wordsToCheck = chooseWords(cleanStopWords(excerpt, getStopWords()));

    //build dictionary (dict[word] = type)
    let dict = await buildDict(wordsToCheck);

    //generate the actual game
    let gameData = {
      //add what type of word and their quantity
      wordType: {},
      //substitute the words in the text for the type and their index
      excerpt: excerpt,
    };

    //it's the game!
    const gameExcerpt = obj => {
      let str = gameData.excerpt;
      for (let key in obj) {
        if (
          obj[key] !== undefined &&
          !obj[key].includes('pronoun') &&
          !obj[key].includes('interjection') &&
          !obj[key].includes('noun, singular or plural in construction') &&
          !obj[key].includes(
            'noun, plural in form but singular in construction',
          ) &&
          !obj[key].includes('prefix') &&
          !obj[key].includes(
            'noun, plural in form but singular or plural in construction',
          )
        ) {
          if (gameData.wordType.hasOwnProperty(obj[key])) {
            gameData.wordType[dict[key]]++;
          } else {
            gameData.wordType[dict[key]] = 1;
          }
          noSpaces = obj[key].replace(' ', '');
          str = str.replace(key, ` {${noSpaces.toUpperCase()}} `);
        }
      }
      return str;
    };

    //ctx.body = gameExcerpt(dict)
    ctx.body = { gameExcerpt: gameExcerpt(dict), wordTypes: gameData.wordType };
  } catch (error) {
    console.log(error);
  }
});

router.post('/something', ctx => {
  ctx.body = {
    something: 'something here',
  };
});

server
  .use(logger('tiny'))
  .use(cors())
  .use(router.routes())
  .listen(port);

module.exports = server;
