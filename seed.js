const db = require('./server/db/');
const { getBook, excerptMaker } = require('./server/helpers.js');
const { Book, Excerpt } = require('./server/db/models/');

const seed = async () => {
  try {
    await db.sync({ force: true });
  } catch (err) {
    console.error(err);
  }

  const books = await Promise.all([
    Book.create({ title: 'Little Women', author: 'Louisa May Alcott' }),
  ]);
  const addExcerpt = [];
  excerptMaker(getBook('public/littleWomen.txt')).forEach(excerpt => {
    addExcerpt.push(Excerpt.create({ paragraph: excerpt, bookId: 1 }));
  });
  const excerpts = await Promise.all(addExcerpt);
};

seed().catch(err => {
  db.close();
  console.log(`
    Error seeding:
    ${err.message}
    ${err.stack}
  `);
});
