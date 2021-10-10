const db = require('./server/db/');
const { getBook, excerptMaker } = require('./server/helpers.js');
const { Book, Excerpt } = require('./server/db/models/');

console.log('SUKI SU UWAU UMAI UMAI UMAI UMAI');

const seed = async () => {
  console.log('LINE 8');
  try {
    await db.sync({ force: true });
  } catch (err) {
    console.error(err);
  }

  console.log('LINEN 10');
  const books = await Promise.all([
    Book.create({ title: 'Little Women', author: 'Louisa May Alcott' }),
  ]);
  console.log('CATORCE');
  const addExcerpt = [];
  excerptMaker(getBook('public/littleWomen.txt')).forEach(excerpt => {
    console.log('LINE 17', excerpt);
    addExcerpt.push(Excerpt.create({ paragraph: excerpt, bookId: 1 }));
  });
  console.log('kjaheydbwqilag', 'BAYONETTA AVOCADO', addExcerpt);
  const excerpts = await Promise.all(addExcerpt);
  console.log('finish her');
};

seed().catch(err => {
  db.close();
  console.log(`
    Error seeding:
    ${err.message}
    ${err.stack}
  `);
});
